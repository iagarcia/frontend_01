import { useContext } from 'react';
import { View, Pressable, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { AuthContext } from '../contexts/auth.context';

import ProfileScreen from '../screens/profile.screen';
import CreateScreen from '../screens/create.screen';
import nativewind from '../../tailwind.config'

const DrawerContent = (props: DrawerContentComponentProps) => {
    const { Logout } = useContext(AuthContext);
    
    return (
        <View className='flex-1 bg-dark'>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <Pressable
                            className="bg-error opacity-50 m-2 pt-2 pb-2 rounded"
                            onPress={() => Logout()}
                        >
                            <Text className="text-left p-1 ml-1 font-bold">Cerrar Sesión</Text>
            </Pressable>
        </View>
    )
}

const Drawer = createDrawerNavigator();

function HomeDrawer() {

    return (
        <Drawer.Navigator
            initialRouteName='ProfileScreen'
            drawerContent={(props) => <DrawerContent {...props}/>}
            screenOptions={{ 
              headerShown: true,
              drawerActiveBackgroundColor: nativewind.theme.colors["light"],
              drawerActiveTintColor: nativewind.theme.colors["info"]
          }}
        >
            <Drawer.Screen name='ProfileScreen' component={ProfileScreen}/>
            <Drawer.Screen name='CreateScreen' component={CreateScreen}/>
        </Drawer.Navigator>
    )
}

export default HomeDrawer