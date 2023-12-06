
import React from 'react';
import {  TouchableOpacity, StyleSheet, View, Modal, ScrollView } from 'react-native';
import {  Feather, Ionicons } from '@expo/vector-icons';

export default function PesquisarExplorar() {

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Feather name="search" size={20} color="#303030" style={{ marginLeft: 10,}} />
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginRight:'5%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 5,
        width: '100%',
        marginBottom: '3%',
        backgroundColor:'#FFFFFF',
        height: 40,
        elevation: 4,

    },
});

