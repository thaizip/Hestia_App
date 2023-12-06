import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CardLista from '../../component/cards/CardLista';
import Pesquisar from '../../component/pesquisar';


export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Listas </Text>
      <Text style={styles.subtitulo}>Compare os preços e economize !</Text>
      <Pesquisar/>
      <View style={styles.lista}>
      <CardLista/>
      <CardLista/>
      <CardLista/>
      <CardLista/>
      <CardLista/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '5%',
    marginLeft: '5%',
    color: '#303030',
    flexGrow: 1
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '300',
    paddingBottom: '5%'
  },
})