import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderShown } from '@react-navigation/stack';
import Home from './Screens/Home/Home';
import About from './Screens/About/About';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="About" component={About} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}