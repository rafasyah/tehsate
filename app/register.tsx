import ButtonPrimary from '@/components/buttonprimary';
import Formfill from '@/components/formfill';
import { router } from "expo-router";
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function register() {
  return (
    <SafeAreaView>
      <View>
         <Image source={require('../assets/images/tehsatelogo.png')} style={{ width: 150, height: 150, alignSelf: 'center' }} />
        <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Daftar dulu </Text>


              <Text style={{ fontSize: 15, fontWeight: 'thin', textAlign: 'center' }}>daftarin kamu disini, isi yang</Text>
               <Text style={{ fontSize: 15, fontWeight: 'thin', textAlign: 'center' }}>lengkap ya data aku minta, jangan</Text>
                <Text style={{ fontSize: 15, fontWeight: 'thin', textAlign: 'center' }}>sampe ngga!</Text>
                   <Formfill placeholder='Nama Lengkap'  />
       <Formfill placeholder='Email'  />
      <Formfill placeholder='Password' />
      <Formfill placeholder='Konfirmasi Password' />
        
          <ButtonPrimary title='Daftar!' color='#5CB85C' width='90%'   />
           <Text style={{ textAlign: 'center', marginTop: 20 }}>
            Sudah punya akun? <Text style={{ color: 'blue',textDecorationLine: 'underline' }} onPress={() => router.push('/login')}>
                          Masuk
                       </Text></Text>
      </View>
    </SafeAreaView>
  )
}