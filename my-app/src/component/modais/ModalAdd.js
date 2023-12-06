import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Pesquisar from '../pesquisar';
import CardListaAdd from '../cards/CardListaAdd';

export default function ModalAdd({ visible, onClose }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Adicionar</Text>
                    <Text style={styles.subtitle}>Em qual lista deseja salvar esse item? </Text>
                    <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
                        <Ionicons name="close-circle-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <Pesquisar />
                    <CardListaAdd />
                    <CardListaAdd />
                    <CardListaAdd />
                    <View style={styles.buttonContainer} >
                        <TouchableOpacity style={styles.button2}>
                            <Text style={{ color: '#5BC566', fontWeight: 'bold' }}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};



const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: '300'
    },
    closeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginTop: 20,
        width: '60%',
        marginLeft: 'auto'
    },
    button: {
        flex: 1,
        borderRadius: 6,
        padding: 10,
        marginHorizontal: 5,
        alignItems: 'center',
        backgroundColor: '#5BC566'


    },
    button2: {
        flex: 1,
        borderRadius: 6,
        padding: 10,
        marginHorizontal: 5,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#5BC566',
    },
});

