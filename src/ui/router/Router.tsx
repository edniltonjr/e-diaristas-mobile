import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import { NavigationTheme } from '../themes/app-theme';
import {createStackNavigator} from '@react-navigation/stack';
import Index from 'pages';
import EncontrarDiaristas from 'pages/encontrarDiaristas';
import Logo from '@assets/img/logos/e-diaristas-logo.png';

const Stack = createStackNavigator();

export type RootStackParamList = {
    Index: undefined,
    EncontrarDiaristas: undefined;
}

const Router: React.FC = () => {
    return (
        <NavigationContainer theme={NavigationTheme}>
            <Stack.Navigator>

                <Stack.Screen name={'Index'} component={Index}
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => (
                        <Image style={{ width: 150, height: 50, resizeMode: 'contain' }} source={Logo} />
                    )
                }}
                />

                <Stack.Screen name={'EncontrarDiaristas'} options={{ title: 'Encontrar Diarista'  }} component={EncontrarDiaristas} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;