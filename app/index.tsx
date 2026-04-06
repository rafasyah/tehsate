import ButtonPrimary from '@/components/buttonprimary';
import { router } from "expo-router";
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function index() {
  return (
    <SafeAreaView>
      <View>

        <Image source={require('../assets/images/tehsatelogo.png')} style={{ width: 350, height: 350, alignSelf: 'center' }} />
        <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Pet Cepet, Sen </Text>
        <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Pesen!</Text>
         <Text style={{ fontSize: 15, fontWeight: 'thin', textAlign: 'center' }}>Pengantaran ke rumah, dan</Text>
         <Text style={{ fontSize: 15, fontWeight: 'thin', textAlign: 'center' }}>reservasi online untuk sate Cak Awih</Text>

           <ButtonPrimary title='Pesan sekarang' color='#5CB85C' width='70%'   />
           <Text style={{ textAlign: 'center', marginTop: 20 }}>
             Sudah punya akun? <Text style={{ color: 'blue' }} onPress={() => router.push('/login')}>
               Login di sini
             </Text>
           </Text>
      </View>
    </SafeAreaView>
  )
}