import { router } from 'expo-router';
import React from 'react';
import {
    Image,
    SafeAreaView,
    Text,
    View,
} from 'react-native';

import ButtonPrimary from '@/components/buttonprimary';

export default function SuccessScreen() {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    }}>

      {/* ✅ Success Image */}
      <Image
        source={require('../assets/images/clock.png')} // 🔥 change path if needed
        style={{
          width: 400,
          height: 400,
          resizeMode: 'contain',
        }}
      />

      {/* Title */}
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
      }}>
        Pesanan Berhasil!
      </Text>

      {/* Subtitle */}
      <Text style={{
        fontSize: 14,
        color: '#777',
        marginTop: 10,
        textAlign: 'center',
      }}>
        Pesanan kamu sedang diproses dan akan segera dikirim 🚀
      </Text>

      {/* Info Card */}
      <View style={{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 16,
        marginTop: 30,
        width: '100%',
        elevation: 3,
      }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
          Detail Pesanan
        </Text>

        <Text style={{ color: '#555' }}>
          Estimasi: 30–35 menit
        </Text>

        <Text style={{ color: '#555', marginTop: 5 }}>
          Status: Sedang diproses
        </Text>
      </View>

      {/* Button */}
      <View style={{ width: '100%', marginTop: 40 }}>
        <ButtonPrimary
          title="Kembali ke Beranda"
          onPress={() => router.replace('/')}
        />
      </View>

    </SafeAreaView>
  );
}