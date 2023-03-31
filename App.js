import * as React from 'react';
import {View,Image,TouchableOpacity,Text,TextInput} from 'react-native';
import styles from './src/estilo/estilo';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './src/components/header';
import Box from './src/components/box';
import Footer from './src/components/footer';

export default function App() {
  return (
    <View style={styles.container}>

      <Header></Header>
      <Box></Box>
      <Footer></Footer>
       
      
    </View>
  );
}

