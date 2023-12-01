import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderShown } from '@react-navigation/stack';
import Home from './Screens/Home/Home';
import Profile from './Screens/Profile/Profile';
import Calendar from './Screens/Calendar/Calendar';
import History from './Screens/History/History';
import Courses from './Screens/Courses/Courses';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }}/>
        <Stack.Screen name="History" component={History} options={{ headerShown: false }}/>
        <Stack.Screen name="Courses" component={Courses} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}