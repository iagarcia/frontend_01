import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Navigator = () => {
    return(
        <NavigationContainer>
            <View>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
        </NavigationContainer>
    );
}

const App = () => {
    return(
        <Navigator/>
    )
}

export default App;