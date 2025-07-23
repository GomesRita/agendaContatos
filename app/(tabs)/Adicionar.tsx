import { StyleSheet } from 'react-native';
import { Input, InputField } from "@/components/ui/input";
import { Text, View } from '@/components/Themed';
import { Button, ButtonText } from "@/components/ui/button"
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";
import React, { use, useState } from "react";
import { Alert } from 'react-native';
// ...existing code...
import { Storage } from 'expo-storage';

export default function Adicionar() {
  const [isInvalid, setIsInvalid] = React.useState(false)
  const [nome, setNome] = useState<string>("")
  const [numero, setNumero] =useState<string>("") 
  const validadorNumero = /^\d{2}9\d{8}$/;

  const handleSubmit =  async () => {
    if (nome.length > 0 && validadorNumero.test(numero)) {
      setIsInvalid(false);
      await SalvaContato();
      alert("Número salvo");
    } else {
      setIsInvalid(true);

      alert(nome);
    }
  }
  const SalvaContato = async () => {
    try {
      const contatosExistentes = await Storage.getItem({ key: "contatos" });
      let contatos = [];
      if (contatosExistentes) {
        contatos = JSON.parse(contatosExistentes);
      }
      if (!contatos.some(c => c.numero === numero)) {
        contatos.push({ nome, numero });
        await Storage.setItem({
          key: "contatos",
          value: JSON.stringify(contatos)
        });
        console.log("Contato salvo:", contatos);
      }
    } catch (error) {
      // Handle invalid keys or storage failures
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Novo Contato</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        style={styles.input}
      >
        <InputField
          placeholder="Nome do contato"
          value={nome}
          onChangeText={setNome}
        />
      </Input>
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        style={styles.input}
      >
        <InputField
          placeholder="Número"
          value={numero}
          onChangeText={setNumero}
        />
      </Input>

    <Button size="sm" variant="outline" action="primary" onPress={handleSubmit}>
      <ButtonText>Salvar</ButtonText>
    </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input:{
    marginBottom: '10',
  }
});
