import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function PatternBackground() {
  // how many images fit horizontally
  const imageSize = 120;
  const columns = Math.ceil(width / imageSize);

  const rows = 4; // adjust height coverage

  return (
    <View style={styles.container}>
      {Array.from({ length: rows }).map((_, row) => (
        <View key={row} style={styles.row}>
          {Array.from({ length: columns }).map((_, col) => (
            <Image
              key={col}
              source={require('../assets/images/tehsatelogo.png')} // your pattern image
              style={styles.image}
              resizeMode="contain"
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: 120,
    height: 90,
    opacity: 0.25, // makes it look like background pattern
  },
});