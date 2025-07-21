import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Image } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="Adicionar"
        options={{
          title: 'Adicionar',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/add-contact.png')}
              style={{
                width: 24,
                height: 24,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Lista"
        options={{
          title: 'Lista',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/wishlist.png')}
              style={{
                width: 24,
                height: 24,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favoritos"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/heart.png')}
              style={{
                width: 24,
                height: 24,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
