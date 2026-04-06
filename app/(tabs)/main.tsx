import ButtonPrimary from '@/components/buttonprimary';
import { router } from 'expo-router';
import { ShoppingCart } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export default function Main() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products?limit=10');
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    console.log('Add:', product.title);
  };

  const handlePress = (product: Product) => {
    router.push(`/detail?id=${product.id}`);
  };

  if (loading) {
    return (
      <SafeAreaView style={[styles.safeArea, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#5CB85C" />
        <Text style={{ marginTop: 16 }}>Loading products...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 17, textAlign:'center' }}>Bambu Apus, Jakarta Timur</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Sore, Mang Saswi</Text>

        <TextInput
          style={styles.search}
          placeholder="Cari makanan..."
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 16 }}
          contentContainerStyle={{ gap: 10 }}
        >
          <CategoryButton title="Rekomendasi" />
          <CategoryButton title="Makanan" />
          <CategoryButton title="Minuman" />
        </ScrollView>
      </View>

      {/* Product Grid */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingBottom: 100,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={handlePress}
            onAddToCart={handleAddToCart}
          />
        )}
      />

      {/* Floating Cart */}
     

    </SafeAreaView>
  );
}

/* ---------------- COMPONENTS ---------------- */

function CategoryButton({ title }: { title: string }) {
  return (
    <View style={{ marginRight: 10 }}>
      <ButtonPrimary
        title={title}
        color="#5CB85C"
      />
    </View>
  );
}

function ProductCard({
  product,
  onPress,
  onAddToCart,
}: {
  product: Product;
  onPress?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}) {
  const formatPrice = (price: number) => {
    return `Rp ${Math.round(price * 15000).toLocaleString()}`;
  };

  return (
    <TouchableOpacity
      style={styles.cardWrapper}
      activeOpacity={0.9}
      onPress={() => onPress?.(product)}
    >
      <View style={styles.card}>
        <View style={{ width: '100%', height: 110, backgroundColor: '#f0f0f0' }}>
          <Image
            source={{ uri: product.thumbnail, cache: 'force-cache' }}
            style={{ width: '100%', height: 110 }}
            resizeMode="cover"
          />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={styles.title}>{product.title}</Text>

          <Text style={styles.desc} numberOfLines={2}>
            {product.description}
          </Text>

          <View style={styles.bottomRow}>
            <Text style={styles.price}>{formatPrice(product.price)}</Text>

            <TouchableOpacity
              style={styles.cartBtn}
              onPress={(e) => {
                e.stopPropagation();
                onAddToCart?.(product);
              }}
            >
              <ShoppingCart size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardWrapper: {
    width: '48%',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 110,
    resizeMode: 'cover',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  desc: {
    fontSize: 11,
    color: '#777',
    marginVertical: 6,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#5CB85C',
  },
  cartBtn: {
    backgroundColor: '#5CB85C',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  floatingBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#5CB85C',
    width: 56,
    height: 56,
    borderRadius: 28,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
