import { createStackNavigator } from '@react-navigation/stack';
import Casita from '../screens/home/Casita';
import Animation101Screen from '../screens/animations/Animation101Screen';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Casita} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      
    </Stack.Navigator>
  );
}