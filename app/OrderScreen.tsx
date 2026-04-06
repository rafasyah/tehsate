import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    ArrowLeft,
    Banknote,
    CheckCircle,
    Circle,
    QrCode,
    Search,
    Wallet,
} from 'lucide-react-native';

import ButtonPrimary from '@/components/buttonprimary';

export default function OrderScreen() {
  const params = useLocalSearchParams();

  const title = (params.title as string) || 'Item';
  const price = Number(params.price) || 0;
  const qty = Number(params.qty) || 1;

  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState<'cash' | 'ovo' | 'qris'>('cash');

  const appFee = 2000;
  const deliveryFee = 5000;

  const subtotal = price * qty;
  const total = subtotal + appFee + deliveryFee;

  const handleOrder = async () => {
    try {
      setLoading(true);

      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('ORDER:', {
        title,
        qty,
        total,
        payment,
      });

      router.push('/success');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5', padding: 16 }}>

      {/* Header */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
      }}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>

        <Search size={24} color="#000" />
      </View>

      {/* Title */}
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20 }}>
        Pesanan Kamu
      </Text>

      {/* Order Details */}
      <View style={{ marginBottom: 20 }}>
        <Row
          label={`${qty}x ${title}`}
          value={`Rp ${subtotal.toLocaleString('id-ID')}`}
        />

        <Row label="Biaya Aplikasi" value="Rp 2.000" />
        <Row label="Biaya Pesan Antar" value="Rp 5.000" />

        <View style={{
          height: 1,
          backgroundColor: '#ccc',
          marginVertical: 10
        }} />

        <Row
          label="Total Biaya"
          value={`Rp ${total.toLocaleString('id-ID')}`}
          bold
        />

        <Text style={{ marginTop: 6, color: '#777', fontSize: 12 }}>
          Estimasi Waktu Antar
        </Text>
        <Text style={{ color: '#333', marginTop: 2 }}>
          30–35 mins
        </Text>
      </View>

      {/* PAYMENT OPTIONS */}

      {/* CASH */}
      <PaymentCard
        label="Bayar Cash aja"
        icon={<Banknote size={20} color="#fff" />}
        color="#333"
        selected={payment === 'cash'}
        onPress={() => setPayment('cash')}
      />

      {/* OVO */}
      <PaymentCard
        label="Pake OVO"
        icon={<Wallet size={20} color="#fff" />}
        color="#6A0DAD"
        selected={payment === 'ovo'}
        onPress={() => setPayment('ovo')}
      />

      {/* QRIS */}
      <PaymentCard
        label="Pake QRIS"
        icon={<QrCode size={20} color="#fff" />}
        color="#C1121F"
        selected={payment === 'qris'}
        onPress={() => setPayment('qris')}
      />

      {/* Button */}
      <View style={{ marginTop: 'auto' }}>
        <ButtonPrimary onPress={handleOrder}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            {loading ? 'Memproses...' : 'Pesan Sekarang!'}
          </Text>
        </ButtonPrimary>
      </View>

    </SafeAreaView>
  );
}

/* ================= COMPONENTS ================= */

function PaymentCard({
  label,
  icon,
  color,
  selected,
  onPress,
}: {
  label: string;
  icon: React.ReactNode;
  color: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        elevation: 3,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {icon}
        <Text style={{ color: '#fff', marginLeft: 10, fontWeight: '600' }}>
          {label}
        </Text>
      </View>

      {selected ? (
        <CheckCircle size={20} color="#fff" />
      ) : (
        <Circle size={20} color="#fff" />
      )}
    </TouchableOpacity>
  );
}

function Row({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8
    }}>
      <Text style={{
        fontWeight: bold ? 'bold' : '400',
        color: '#333'
      }}>
        {label}
      </Text>

      <Text style={{
        fontWeight: bold ? 'bold' : '400',
        color: '#333'
      }}>
        {value}
      </Text>
    </View>
  );
}