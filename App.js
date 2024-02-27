import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => navigation.navigate('Home')} // Changed 'navigation.navigation' to 'navigation.navigate'
        style={{ fontSize: 26, fontWeight: 'bold' }}
      >
        HomeScreen
      </Text>
    </View>
  );
}
