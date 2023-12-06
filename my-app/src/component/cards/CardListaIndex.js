import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';


export default function CardLista() {
    return (
        <View style={styles.container}>
            <Octicons style={{ marginTop: 7 }} name="checklist" size={25} color="#303030" />
            <View >
                <Text style={styles.titulo}>Churasco dia dos Pais</Text>
                <Text style={styles.subtitulo}>13 Jun, 2023</Text>
            </View>
            <TouchableOpacity style={styles.buttom}>
                <MaterialCommunityIcons name="piggy-bank-outline" size={24} color="#5BC566" />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: '5%',
        marginTop: '5%',
        color: '#303030',
        padding:'3%',
        backgroundColor:'#FFFFFF',
        borderRadius: 5,
    },
    titulo: {
        fontSize: 16,
        marginLeft: '5%',
        fontWeight: '400',
    },
    subtitulo: {
        fontSize: 13,
        marginLeft: '5%',
        fontWeight: '300',
    },
    buttom: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '13%',
        marginLeft: 'auto',
        borderWidth: 2,
        borderColor: '#5BC566',
        borderRadius: 5,
    }
});

