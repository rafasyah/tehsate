import ButtonPrimary from '@/components/buttonprimary';
import Formfill from '@/components/formfill';
import { router } from "expo-router";
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function login() {
  return (
    <SafeAreaView>
      <View>
         <Image source={require('../assets/images/tehsatelogo.png')} style={{ width: 150, height: 150, alignSelf: 'center' }} />
        <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Login dulu kali, ah </Text>

              <Text style={{ fontSize: 15, fontWeight: 'thin', textAlign: 'center' }}>Masuk pake akun kamu yang udah</Text>
              <Text style={{ fontSize: 15, fontWeight: 'thin', textAlign: 'center' }}>didaftarin ya!</Text>
       <Formfill placeholder='Email'  />
      <Formfill placeholder='Password' />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', alignSelf: 'center', marginTop: 10 }}>
            <Text>Ingatkan aku</Text>
            <Text style={{ color: 'blue', fontWeight:'bold' }}>Lupa Password?</Text>
        </View>
         <ButtonPrimary title='Masuk!' color='#5CB85C' width='90%'   />
          <ButtonPrimary title='Masuk Admin!' color='#5CB85C' width='90%'  onPress={() => router.push('/main')}   />
           <Text style={{ textAlign: 'center', marginTop: 20 }}>
            Belum punya akun? <Text style={{ color: 'blue' }} onPress={() => router.push('/register')}>
                          Daptar buru!
                       </Text></Text>
      </View>
    </SafeAreaView>
  )
}