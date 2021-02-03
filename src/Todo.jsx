import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import styled from 'styled-components';
import { Feather, MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons';

import Button from './Button'
import Input from './Input'

export default function Todo({ todo, onRemove, onEdit }) {

    const [ deleteVisible, setDeleteVisible ] = useState(true);
    const [ inputValue, setInputValue ] = useState('');

    const pressDeleteHandler = () => {
        onRemove(todo.id)
    }

    const pressEditHandler = () => {
        setDeleteVisible(prev => !prev)
        if(inputValue.trim()) {
            onEdit(todo.id, inputValue)
            setInputValue('')
        }
    }


    return (
        <TouchableOpacity 
            activeOpacity={0.5}
        >
            <View style={styles.todo}>
                {/* Input */}
                {!deleteVisible && 
                <Input 
                    inputValue={inputValue}
                    placeholder="Введите что-нибудь..."
                    setInputValue={setInputValue}
                />}
                {/* Todo text */}
                {deleteVisible && <Text style={{width: '55%'}} >{todo.title}</Text>}
                {/* Edit Todo */}
                <Button 
                    pressHandler={pressEditHandler} 
                    text="Edit" 
                    color="green"
                >
                    <Feather name="edit" size={16} color="white" /> 
                </Button>
                {/* Delete Todo */}
                {deleteVisible && <Button 
                    pressHandler={pressDeleteHandler} 
                    text="Delete" 
                    color="red"
                >
                    <MaterialCommunityIcons name="delete" size={16} color="white" />
                </Button>}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
    title: {
        width: '70%',
    }
})

