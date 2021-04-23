import React from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading'

import Routes from './src/routes';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }
  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fc9',
    padding: 15,
    margin: 50
  },
  image: {
    width: 100,
    height: 100
  }
});
