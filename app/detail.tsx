import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ButtonPrimary from '@/components/buttonprimary';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export default function Detail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const fetchProductDetail = async () => {
    if (!id) return;

    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error('Failed to load product:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" color="#5CB85C" />
      </SafeAreaView>
    );
  }

  if (!product) return null;

  // ✅ Convert price once (USD → IDR)
  const priceIDR = Math.round(product.price * 15000);

  // ✅ Correct subtotal
  const subtotal = priceIDR * quantity;

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ fontSize: 20 }}>←</Text>
        </TouchableOpacity>
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.thumbnail }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.desc}>
          {product.description}
        </Text>

        {/* Price + Quantity */}
        <View style={styles.row}>
          <Text style={styles.price}>
            Rp {subtotal.toLocaleString('id-ID')}
          </Text>

          <View style={styles.qtyContainer}>
            <TouchableOpacity
              onPress={() => setQuantity(q => Math.max(1, q - 1))}
              style={styles.qtyBtn}
            >
              <Text>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyText}>{quantity}</Text>

            <TouchableOpacity
              onPress={() => setQuantity(q => q + 1)}
              style={styles.qtyBtn}
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          
          <View style={{ flex: 1, marginRight: 8 }}>
            <ButtonPrimary
              title="Add to Cart"
              color="#333"
              width="100%"
              onPress={() => console.log('Add to cart')}
            />
          </View>

          <View style={{ flex: 1, marginLeft: 8 }}>
            <ButtonPrimary
              title="Pesan Sekarang!"
              width="100%"
              onPress={() => {
                router.push({
                  pathname: '/OrderScreen',
                  params: {
                    title: product.title,
                    price: priceIDR, // ✅ IMPORTANT: send single item price
                    qty: quantity,
                  },
                });
              }}
            />
          </View>

        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 250,
    height: 180,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 10,
    color: '#555',
    lineHeight: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5CB85C',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    borderRadius: 10,
  },
  qtyBtn: {
    padding: 10,
  },
  qtyText: {
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
});