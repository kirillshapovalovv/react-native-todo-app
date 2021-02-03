import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styled from "styled-components/native";

export default function Button({ pressHandler, text, color, children }) {


  
  return (
    <Btn
      onPress={pressHandler}
      activeOpacity={0.7}
      color={color}
    >
      <BtnText>
        {children}
      </BtnText>
    </Btn>
  );
}



const Btn = styled.TouchableOpacity`
  width: 20%;
  background: ${props => props.color == "green" 
    ?  'green' 
    : props.color === 'red' ? 'red' : '#0466c8'};
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 100px;
  padding-left: 0;
  padding-right: 0;
`;

const BtnText = styled.Text`
  font-size: 15px;
  justify-content: center;
  text-align: center;
`;


