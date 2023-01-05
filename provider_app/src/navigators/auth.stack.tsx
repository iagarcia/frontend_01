import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import LoginScreen from '../screens/login.screen';
import RegisterScreen from '../screens/register.screen';

function AuthStack() {
  return (
    <Stack.Navigator  initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;