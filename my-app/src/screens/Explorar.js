
import React, {useState} from 'react';
import { Text, View,  StyleSheet, FlatList } from 'react-native';
import CarroselCategorias from '../component/Categorias';
import PesquisarExplorar from '../component/PesquisarExplorar';
import CardProduto from '../component/cards/CardProduto';

const data = [
  {
    id: 1,
    title: 'Batata',
    subtitle: 'Versátil e nutritiva. Usada para fazer purê, ou fritas.',
    image: require('../../assets/produtos/batata.png'),
  },
  {
    id: 2,
    title: 'Tomate',
    subtitle: 'Saboroso e suculento. Ideal para preparar molhos de tomate.',
    image: require('../../assets/produtos/tomate.png'),
  },
  {
    id: 3,
    title: 'Beringela',
    subtitle: 'Versátil, deliciosa. Usada para preparar gratinado.',
    image: require('../../assets/produtos/beringela.png'),
  },
  {
    id: 4,
    title: 'Melancia',
    subtitle: 'Refrescante e nutritiva. Otima para sucos',
    image: require('../../assets/produtos/melancia.png'),
  },
  {
    id: 5,
    title: 'Cereja',
    subtitle: 'Saborosa. Uma das mais populares em sobremesas.',
    image: require('../../assets/produtos/cereja.png'),
  },
  {
    id: 6,
    title: 'Alface Americana',
    subtitle: 'A alface é utilizada em saladas frescas e saudáveis.',
    image: require('../../assets/produtos/alfaceA.png'),
  },

];

export default function Explorar() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Explorar </Text>
      <Text style={styles.subtitulo}>Crie sua lista, vamos comprar</Text>
      <View>
        <PesquisarExplorar />
      </View>
      <View>
        <CarroselCategorias />
      </View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardProduto item={item} />}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '5%',
    marginLeft: '5%',
    color: '#303030',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: '300',
    paddingBottom: '5%',
  },

});
