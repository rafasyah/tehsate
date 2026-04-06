import React from 'react';
import {
  DimensionValue,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ButtonPrimary({
  title,
  color,
  width,
  onPress,
  children,
}: {
  title?: string;
  color?: string;
  width?: DimensionValue;
  onPress?: () => void;
  children?: React.ReactNode; // ✅ ADD THIS
}) {
  return (
    <View style={{ marginVertical: 0 }}> {/* ✅ FIX spacing */}
      <TouchableOpacity
        onPress={onPress}
        style={{
          paddingVertical: 16,
          paddingHorizontal: 32,
          backgroundColor: color || '#5CB85C',
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
          width: width || '100%',
          alignSelf: 'center',
          minHeight: 54,
        }}
      >
        {/* ✅ SUPPORT ICON OR TEXT */}
        {children ? (
          children
        ) : (
          <Text style={{ fontWeight: '600', color: 'white' }}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}