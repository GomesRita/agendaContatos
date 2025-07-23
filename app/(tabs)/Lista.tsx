import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Storage } from "expo-storage";
import Contato from "@/components/Contato";

export default function Lista() {
  const [contatos, setContatos] = useState<any[]>([]);

  useEffect(() => {
    const fetchContatos = async () => {
      try {
        const item = await Storage.getItem({ key: "contatos" });
        if (item !== null) {
          const parsedItem = JSON.parse(item);
          setContatos(parsedItem);
        }
      } catch (error) {
        // Handle invalid keys or read failures
      }
    };
    fetchContatos();
  }, []);

  return (
    <View>
      <FlatList
        data={contatos}
        keyExtractor={item => item.numero}
        renderItem={({ item }) => (
          <Contato nome={item.nome} numero={item.numero} />
        )}
      />
    </View>
  );
}