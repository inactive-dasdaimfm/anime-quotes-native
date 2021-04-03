import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Loading = () => {
  return (
      <View>
          <Image 
            source={{ uri: 'https://media.giphy.com/media/13xxoHrXk4Rrdm/giphy.gif' }} 
            style={styles.gif}
          />
      </View>
  );
}

const styles = StyleSheet.create({
    gif: {
        width: 180,
        height: 120,
    },
})

export default Loading;