import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Modal, ScrollView } from 'react-native';
import { Octicons, MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';

export default function CardLista() {
    const [isSelected, setIsSelected] = useState(false);

    const handleToggleSelection = () => {
        setIsSelected(!isSelected);
    };

    return (
        <TouchableOpacity
            style={[styles.container, isSelected && styles.selectedContainer]}
            onPress={handleToggleSelection}
        >
            <Octicons style={{ marginTop: 7 }} name="checklist" size={25} color="#303030" />
            <View>
                <Text style={[styles.titulo, isSelected && styles.selectedText]}>Churasco dia dos Pais</Text>
                <Text style={[styles.subtitulo, isSelected && styles.selectedText]}>13 Jun, 2023</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: '5%',
        color: '#303030',
        padding: '3%',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        elevation: 4,
    },
    selectedContainer: {
        backgroundColor: '#f0f0f0',
    },
    titulo: {
        fontSize: 16,
        marginLeft: '5%',
        fontWeight: '400',
    },
    selectedText: {
        color: '#303030',
    },
    subtitulo: {
        fontSize: 13,
        marginLeft: '5%',
        fontWeight: '300',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '13%',
        marginLeft: 'auto',
        borderWidth: 2,
        borderColor: '#5BC566',
        borderRadius: 5,
    },
});
