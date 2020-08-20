import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

/* 
Não possuem valor semântico (significado)
Não possuem estilização própria
View: div, footer, header, main aside, section

Text: p, span, strong, h1, h2, h3

StatusBar
Cor de fundo para 
  *ios: barStyle="light-content" 
  *android: 

*/
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='#7159c1' />
      <View style={styles.container} >
        <Text style={styles.title} >Hello GoStack</Text>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent:'center', //vertical
    alignItems: 'center' // horizontal
  },

  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
});