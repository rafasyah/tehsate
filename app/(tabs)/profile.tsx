import ButtonPrimary from '@/components/buttonprimary';
import FormFill from '@/components/formfill';
import PatternBackground from '@/components/patternbackground';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('Kurniawan');
  const [email, setEmail] = useState('kurniawan@gmail.com');
  const [address, setAddress] = useState(
    'Jl. Bambu Apus 3, Jakarta Timur'
  );
  const [password, setPassword] = useState('***********');

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER BACKGROUND */}
      <View style={styles.header}>
  <PatternBackground />

  <TouchableOpacity style={styles.settingsBtn}>
    <Text style={{ fontSize: 18 }}>⚙️</Text>
  </TouchableOpacity>
</View>

      {/* CONTENT CARD */}
      <View style={styles.card}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* FORM INPUTS */}
          <FormFill value={name} onChangeText={setName} />
          <FormFill value={email} onChangeText={setEmail} />
          <FormFill value={address} onChangeText={setAddress} />
          <FormFill value={password} onChangeText={setPassword} />

          {/* MENU ITEMS */}
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Kebijakan dan Privasi</Text>
            <Text>{'>'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Riwayat Order</Text>
            <Text>{'>'}</Text>
          </TouchableOpacity>

          {/* BUTTONS */}
         <View style={styles.buttonRow}>
  <View style={{ flex: 1 }}>
    <ButtonPrimary
      title="Edit Profile ✏️"
      color="#333"
      onPress={() => {}}
    />
  </View>

  <View style={{ flex: 1 }}>
    <ButtonPrimary
      title="Keluar ⎋"
      color="#C2185B"
      onPress={() => {}}
    />
  </View>
</View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
  },

header: {
  height: 160,
  backgroundColor: '#5CB85C',
  overflow: 'hidden',
},

  settingsBtn: {
    alignSelf: 'flex-end',
  },

  card: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    marginTop: -30,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 20,
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },

  menuText: {
    fontSize: 16,
    color: '#444',
  },

  buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
  marginTop: 24,
  gap: 12, // 👈 important
},
});