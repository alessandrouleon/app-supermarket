import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { Roboto_400Regular, Roboto_700Bold, useFonts} from "@expo-google-fonts/roboto"
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
 
  return (
    <ThemeProvider theme={theme}>
      {/* <StatusBar style="auto" /> */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

     {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}

