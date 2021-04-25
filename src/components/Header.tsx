import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { colors, fonts } from '../styles';

import userImg from '../assets/vini.png'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { Container } from './styles';

export const Header: React.FC = () => {
  
  const [username, setUsername] = useState<string>()
  
  
  useEffect(() => {
    async function loadStorageUsername(){
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUsername(user || '')
    }

    loadStorageUsername()
  },[])
  return (
  <View style={styles.container}>
    <View>
      <Text style={styles.greeting}>Olá,</Text>
      <Text style={styles.username}>{username}</Text>
    </View>

    <Image style={styles.image} source={userImg}></Image>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight()
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  username: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  }
})