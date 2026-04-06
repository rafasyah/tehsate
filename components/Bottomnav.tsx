import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { router, usePathname } from 'expo-router';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Bell,
  House,
  Info,
  ShoppingCart,
  User,
} from 'lucide-react-native';

export default function BottomNavbar({
  state,
  descriptors,
  navigation,
  insets,
}: BottomTabBarProps) {
  const pathname = usePathname();

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>

        {/* BERANDA */}
        <TabItem
          label="Beranda"
          active={pathname === '/main'}
          icon={House}
          onPress={() => router.push('/main')}
        />

        {/* INFORMASI */}
        <TabItem
          label="Informasi"
          active={pathname === '/informasi'}
          icon={Info}
          onPress={() => router.push('/informasi')}
        />

        {/* SPACE FOR FLOAT BUTTON */}
        <View style={{ width: 70 }} />

        {/* NOTIFIKASI */}
        <TabItem
          label="Notifikasi"
          active={pathname === '/notifikasi'}
          icon={Bell}
          onPress={() => router.push('/notifikasi')}
        />

        {/* AKUN */}
        <TabItem
          label="Akun"
          active={pathname === '/profile'}
          icon={User}
          onPress={() => router.push('/profile')}
        />
      </View>

      {/* FLOATING CART BUTTON */}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => console.log('Cart pressed')}
        activeOpacity={0.8}
      >
        <ShoppingCart size={26} color="white" />
      </TouchableOpacity>
    </View>
  );
}

function TabItem({
  label,
  active,
  onPress,
  icon: Icon,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
  icon: any;
}) {
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <Icon
        size={20}
        color={active ? '#5CB85C' : '#9E9E9E'}
        strokeWidth={2}
      />

      <Text style={[styles.label, active && styles.activeLabel]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    backgroundColor: '#fff',
  },

  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    elevation: 10,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  label: {
    fontSize: 12,
    color: '#9E9E9E',
    fontWeight: '500',
  },

  activeLabel: {
    color: '#5CB85C',
    fontWeight: '700',
  },

  cartButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 25,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#5CB85C',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 12,
  },
});