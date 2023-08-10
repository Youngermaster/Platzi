import { React } from "react";
import { TextInput, Button, View } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="E-Mail" />
      <TextInput placeholder="passowrd" secureTextEntry={true} />
      <Button title="Send" onPress={() => console.log("first")} />
    </View>
  )
}