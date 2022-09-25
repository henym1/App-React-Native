import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function MeuComponente(){
    return (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>React Native é bacana</Text>
        <Text style={styles.cardSubtitle}>Serve pra Android e iOS</Text>
    </View>
    )
} 

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 3,
      marginVertical: 7
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    cardSubtitle: {
      color: '#333',
      fontSize: 14
    }
  });