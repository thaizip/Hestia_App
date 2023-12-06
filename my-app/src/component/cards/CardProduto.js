
import React, {useState}from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ModalAdd from '../modais/ModalAdd';
export default function CardProduto({item}){
  const [modalVisible, setModalVisible] = useState(false);
  return(
    <View style={styles.card}>
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
    <ImageBackground source={item.image} style={styles.image}  resizeMode="contain"/>
    </View>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.subtitle}>{item.subtitle}</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name="piggy-bank-outline" size={24} color="#5BC566" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={24} color="#5BC566" />
      </TouchableOpacity>
      <ModalAdd
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  </View>
  );
}


const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginRight: '5%',
    marginBottom: '5%', 
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4
  },
  image: {
    flex:1,
    width: '85%', 
    height: 100,  
    overflow: 'hidden', 
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    borderWidth: 2,
    borderColor: '#5BC566',
    borderRadius: 5,
    marginRight: '5%'
  },
 
});


