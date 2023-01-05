import { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext, AuthProvider } from './src/contexts/auth.context';

import AuthStack from './src/navigators/auth.stack';
import HomeDrawer from './src/navigators/home.drawer';

const Navigator = () => {
    const { jwt, Load } = useContext(AuthContext);

    useEffect(() => {
        AsyncStorage.getItem('JWT').then(jwtStored => {
            if (jwtStored != null && jwt == "") {
                Load();
            }
        })
        console.log("CURRENT JWT is", jwt)
    }, [jwt])

    return(
        <NavigationContainer>
            { !(jwt !== "") ? <AuthStack/> : <HomeDrawer/> }
        </NavigationContainer>
    );
}

const App = () => {
    return(
        <AuthProvider>
            <Navigator/>
        </AuthProvider>
    )
}

export default App;