
import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Modal, ScrollView } from 'react-native';
import { Octicons, MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';

export default function CardLista() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const openDropdown = () => {
        setDropdownVisible(true);
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };

    return (
        <View style={styles.container}>
            <Octicons style={{ marginTop: 7 }} name="checklist" size={25} color="#303030" />
            <View>
                <Text style={styles.titulo}>Churasco dia dos Pais</Text>
                <Text style={styles.subtitulo}>13 Jun, 2023</Text>
            </View>

            <TouchableOpacity style={styles.dropdownButton} onPress={openDropdown}>
                <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
            </TouchableOpacity>

            <Modal transparent={true} visible={dropdownVisible} onRequestClose={closeDropdown}>
                <TouchableOpacity
                    style={styles.modalBackground}
                    activeOpacity={1}
                    onPressOut={closeDropdown}
                >
                    <View style={styles.modalContainer}>
                        <ScrollView contentContainerStyle={styles.modalContent}>
                            <TouchableOpacity style={styles.modalItem}>
                                <MaterialCommunityIcons name="piggy-bank-outline" size={24} color="#5BC566" />
                                <Text style={styles.modalText}>Comparar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalItem}>
                                <Feather name="edit" size={20} color="#FFC107" />
                                <Text style={styles.modalText}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalItem}>
                                <Ionicons name="trash" size={20} color="#DC3545" />
                                <Text style={styles.modalText}>Excluir</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: '5%',
        marginTop: '5%',
        color: '#303030',
        padding: '3%',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        elevation: 4,
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
    dropdownButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '13%',
        marginLeft: 'auto',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
    },
    modalContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'stretch', 
    },
    modalItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    modalText: {
        marginLeft: 10,
        fontSize: 18
    },
});
