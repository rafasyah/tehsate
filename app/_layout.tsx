import BottomNavbar from '@/components/Bottomnav';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomNavbar {...props} />}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="informasi" />
      <Tabs.Screen name="notifikasi" />
      <Tabs.Screen name="akun" />
    </Tabs>
  );
}