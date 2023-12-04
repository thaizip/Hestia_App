import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';

const CarroselMercados = () => {
  const logos = [
    require('../../assets/mercados/savegnago.png'),
    require('../../assets/mercados/mortari.png'),
    require('../../assets/mercados/simone.png'),
    require('../../assets/mercados/sl.png'),
   
   
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
      >
        {logos.map((logo, index) => (
          <View key={index} style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '25%',
  },
  logoContainer: {
    backgroundColor: '#FFF7E7',
    marginRight: 15,
    borderRadius: 15,
    padding: 10,
    width: 140,
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});

export default CarroselMercados;
