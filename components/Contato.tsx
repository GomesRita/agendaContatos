import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import React from "react";
import {Image } from "react-native";

type Contato ={
    nome: string;
    numero: string; 
}

export default function Contato({nome, numero}: Contato){
    return(
    <Center className="bg-primary-500 h-[200px] w-[300px]">
        <Text className="text-typography-0 font-bold">{nome}</Text>
        <Text className="text-typography-0 font-bold">{numero}</Text>
    </Center>
    )

}