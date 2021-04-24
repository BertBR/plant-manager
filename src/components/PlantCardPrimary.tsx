import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { colors, fonts } from '../styles';
// import { Container } from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

export const PlantCardPrimary: React.FC<PlantProps> = ({data, ...rest}) => {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <Text style={styles.text}>  
        { data.name }
      </Text>

    </RectButton>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10
  },
  text: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16

  }
})