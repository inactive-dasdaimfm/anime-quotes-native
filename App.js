import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Quotes from "./components/Quotes";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Quotes  />
        <StatusBar style="light" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#011627',
    width: '100%',
    height: '100%',
  },
});
