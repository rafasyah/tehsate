import React from 'react';
import { DimensionValue, Text, TouchableOpacity, View } from 'react-native';

export default function ButtonPrimary({title, color, width, onPress}: {title?: string; color?: string; width?: DimensionValue; onPress?: () => void}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={{ padding: 20, backgroundColor: color, borderRadius: 10, alignItems: 'center', width: width || '100%', alignSelf: 'center', marginTop: 20 }}>
        <Text>{title}</Text>
      </TouchableOpacity>
      
    </View>
  )
}