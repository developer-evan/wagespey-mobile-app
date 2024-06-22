import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { HelloWave } from '@/components/HelloWave';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'#daf' }}>
      <Text>Home Screen</Text>
      <HelloWave />
    </View>    
  );
}


