import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface formfillProps {
  placeholder?: string
  label?: string
  value?: string
  onChangeText?: (text: string) => void
}

export default function formfill({ placeholder, label, value, onChangeText }: formfillProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    width: '90%',
    alignSelf: 'center',
    borderColor: '#B9BCBE80',
    borderWidth: 1,
    borderRadius: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
})