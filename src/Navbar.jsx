import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Navbar({ title }) {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#0466c8',
        paddingTop: 25,
        paddingBottom: 15,
    },
    text: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    },
})
