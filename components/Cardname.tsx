import React from 'react'
import { Image, Text, View } from 'react-native'

interface CardnameProps {
  source: number | { uri: string }
  title: string
}

export default function Cardname({ source, title }: CardnameProps) {
  return (
    <View style={{ padding: 10, alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 10 ,marginTop: 10}}>
      <Text>{title}</Text>
        <Image source={source} alt={title} style={{ width: 200, height: 200, borderRadius: 25, position: 'relative' }} />
      
    </View>
  )
}