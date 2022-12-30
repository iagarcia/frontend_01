import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './src/navigators/auth.stack'

const Navigator = () => {
    return(
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    );
}

const App = () => {
    return(
        <Navigator/>
    )
}

export default App;