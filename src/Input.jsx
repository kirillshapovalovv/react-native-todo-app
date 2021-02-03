import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styled from 'styled-components/native'

export default function Input({ inputValue, placeholder, setInputValue, color }) {
  return (
    <MainInput
      value={inputValue}
      color={color}
      placeholder={placeholder} 
      onChangeText={setInputValue}
      autoCorrect={false}
      autoCapitalize="none"
    />
  );
}

const MainInput = styled.TextInput`
  width: 80%;
  border-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.color ? '#0466c8' : '#fff'};
  padding: 10px;
`;
