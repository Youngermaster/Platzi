import { StyleSheet, SafeAreaView, Button } from 'react-native'
import React from 'react'
import Greet from '../components/Greet';
import LoginForm from '../components/Login';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Greet firstname="Juan" lastname='Young' />
      <Greet firstname="Manuel" lastname='Hoyos' />
      <Greet lastname="Goku" />
      <Greet />
      <LoginForm />
      <StatusBar style="auto" />
      <Button
        onPress={goToSettings}
        title='Go to settings'
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
