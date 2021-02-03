import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Alert, TouchableOpacity, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

import Button from './Button'
import Input from './Input'

export default function AddTodo({ onSubmit }) {

    const [ inputValue, setInputValue ] = useState('');

    const pressHandler = () => {
        // добавление новых todo
        if(inputValue.trim()) {
            onSubmit(inputValue);
            // очистка инпута
            setInputValue('')
        } else {
            Alert.alert('Введите название дела :)');
        }
    };

    return (
        <View style={styles.block}>
            <Input 
                inputValue={inputValue} 
                placeholder="Что нужно сделать?" 
                setInputValue={setInputValue} 
                color={true}
            />
            <Button 
                pressHandler={pressHandler}
                activeOpacity={0.7}
                text="Add Todo"
                color="blue"
            >
                <MaterialIcons name="add" size={16} color="white" />
            </Button>
        </View>
    )
}


const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
})


