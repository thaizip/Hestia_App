import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CarroselCategorias from '../component/Categorias'
import CardLista from '../component/CardLista';
import CarroselMercados from '../component/CarroselMercados'

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Bem - Vindo! </Text>
      <View style={styles.banner}>
        <View style={styles.textBanner}>
          <Text style={styles.tituloBanner}>Bora Economizar?</Text>
          <Text style={styles.subtitulo}>Crie sua lista, vamos comprar</Text>
          <TouchableOpacity style={styles.buttomBanner}>
            <Text>Criar Lista</Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.imageBanner} source={require('../../assets/banner.png')} />
      </View>
      <View >
        <CarroselCategorias />
      </View>
      <View style={styles.lista}>
        <Text>MINHAS LISTAS</Text>
        <CardLista />
        <CardLista />
        <CardLista />

      </View>
      <View>
        <Text style={styles.tituloMercado}>MERCADOS</Text>
        <CarroselMercados/>
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
    marginBottom: '5%'
  },
  //BANNER
  banner: {
    flexDirection: 'row',
    height: '20%',
    backgroundColor: '#82A56A',
    marginRight: '5%',
    marginBottom: '8%',
    borderRadius: 15,
  },
  textBanner: {
    flex: 1,
    padding: '5%',
  },
  tituloBanner: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: '300',
    paddingBottom: '5%'
  },
  buttomBanner: {
    alignItems: 'center',
    width: '50%',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingStart: '5%',
    paddingEnd: '5%',
    backgroundColor: '#FFFDC9',
    borderRadius: 7,

  },
  imageBanner: {
    marginLeft: '5%',
    width: '35%',
    height: 'auto'
  },
  // MINHAS LISTAS
  lista: {
    backgroundColor: '#FFFFFF',
    padding: '5%',
    marginRight: '5%',
    marginBottom: '5%',
    borderRadius: 15,
  },

  //mercados
  tituloMercado:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})