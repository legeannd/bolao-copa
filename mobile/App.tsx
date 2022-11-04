import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { NativeBaseProvider, Center, Text } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} bgColor="black">
        <Text color="white" fontSize={24}>Hello React Native!</Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24
  }
});
