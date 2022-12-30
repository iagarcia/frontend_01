import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import LoginScreen from '../screens/login.screen';
import RegisterScreen from '../screens/register.screen';
import RecoverScreen from '../screens/recover.screen';

function AuthStack() {
  return (
    <Stack.Navigator  initialRouteName="RegisterScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
      <Stack.Screen name='RecoverScreen' component={RecoverScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;