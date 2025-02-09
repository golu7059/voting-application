import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestScreen from './src/screens/TestScreen.js';
import SecureVotingScreen from './src/screens/SecureVotingScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="SecureVotingScreen" component={SecureVotingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}