import React from 'react';
import AppTheme from './app-theme';
import {Provider as PaperProvider } from 'react-native-paper';
import {ThemeProvider as EmoticonProvider} from '@emotion/react';

const ThemeProvider: React.FC = ({children}) => {
    return (
    <EmoticonProvider theme={AppTheme}>
        <PaperProvider theme={AppTheme}>
            {children}
        </PaperProvider>

    </EmoticonProvider>
    )
}

export default ThemeProvider;