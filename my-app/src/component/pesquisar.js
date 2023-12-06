
import React from 'react';
import { TouchableOpacity, StyleSheet, View, Modal, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function Pesquisar() {

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Feather name="search" size={20} color="#303030" style={{ marginLeft: 10, }} />
            </View>
            <TouchableOpacity style={styles.buttom}>
                <Ionicons name="add" size={24} color="#5BC566" />
            </TouchableOpacity>
           
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 5,
        width: '80%',
        backgroundColor: '#FFFFFF',
        height: 40,
        // borderWidth: 0.20,
        // borderColor: '#303030',
        elevation: 4 

    },
    buttom: {
        flex: 1,
        marginLeft: 10,
        borderWidth: 2,
        borderColor: '#5BC566',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: '5%',
        height: 40
    },
});

