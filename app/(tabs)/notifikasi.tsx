import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function InformationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.back}>{'←'}</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Notifikasi</Text>

        {/* spacer so title stays centered */}
        <View style={{ width: 24 }} />
      </View>

      {/* EMPTY STATE */}
      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <Text style={styles.icon}>!</Text>
        </View>

        <Text style={styles.emptyText}>
          Belum ada Informasi Bang
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
  },

  /* HEADER */
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  back: {
    fontSize: 22,
    color: '#444',
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },

  /* CONTENT */
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#BDBDBD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  icon: {
    fontSize: 42,
    color: '#9E9E9E',
    fontWeight: '700',
  },

  emptyText: {
    fontSize: 14,
    color: '#9E9E9E',
  },
});