import { StyleSheet } from 'react-native';
import { Input, InputField } from "@/components/ui/input";
import { Text, View } from '@/components/Themed';
import { Button, ButtonText } from "@/components/ui/button"
import { VStack } from "@/components/ui/vstack";
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
import { Alert, AlertText, AlertCircleIcon } from "@/components/ui/alert";
import React from "react";
export default function Adicionar() {
  const [isInvalid, setIsInvalid] = React.useState(false)
  const [nome, setNome] = React.useState("12345")

  const handleSubmit = () => {
    if (nome.length > 0) {
      setIsInvalid(true)
    } else {
      setIsInvalid(false)
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
      value={nome}
      onChangeText={(text) => setNome(text)}
    >
      <InputField placeholder="Nome do contato" />
    </Input>
    <Input
      variant="outline"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      style={styles.input}
      value={nome}
      onChangeText={(text) => setInputValue(text)}
    >
      <InputField placeholder="Número" />
    </Input>

    <Button size="sm" variant="outline" action="primary">
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
