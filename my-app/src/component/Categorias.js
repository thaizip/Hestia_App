import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';

const CarroselCategorias = () => {
  const categorias = [
    { name: 'HORTIFRUTE', image: require('../../assets/category/hortifrute.png') },
    { name: 'PADARIA', image: require('../../assets/category/padaria.png') },
    { name: 'LACTICÍNIOS', image: require('../../assets/category/lacticinios.png') },
    { name: 'PROTEÍNAS', image: require('../../assets/category/proteina.png') },
    { name: 'BEBIDAS', image: require('../../assets/category/bebida.png') },
    { name: 'MERCEARIA', image: require('../../assets/category/mercearia.png') },
    { name: 'DESPESA', image: require('../../assets/category/despesa.png') },
    { name: 'LIMPEZA', image: require('../../assets/category/limpeza.png') },
    { name: 'AUTOCUIDADO', image: require('../../assets/category/autocuidado.png') },
    { name: 'BEBÊS', image: require('../../assets/category/bebe.png') },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCategoryPress = (index) => {
    setSelectedIndex(index);
    // Adicione a lógica desejada ao pressionar um botão, por exemplo, navegar para a categoria selecionada.
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carouselContainer}
    >
      {categorias.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            index === selectedIndex && styles.selectedButton,
          ]}
          onPress={() => handleCategoryPress(index)}
        >
          <View style={styles.categoryContainer}>
            <Image source={category.image} style={styles.image} />
            <Text
              style={[
                styles.buttonText,
                index === selectedIndex && styles.selectedButtonText,
              ]}
            >
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flexDirection: 'row',
  },
  button: {
    padding: 5,
    marginRight: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },    
  buttonText: {
    color: '#303030',
    fontSize: 13,
    fontWeight: '300',
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: '#5BC566',
  },
  selectedButtonText: {
    color: '#5BC566',
    fontWeight: '500',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 5, 
  },
});

export default CarroselCategorias;
