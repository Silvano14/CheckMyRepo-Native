import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { Done } from './src/Done';
import { BadConnection } from './src/errorView/BadConnection';
import { BadData } from './src/errorView/BadData';
import { Home } from './src/Home';
import { Repository } from './src/Repository';
import { Sender } from './src/Sender';
import { DataStore } from './src/shared/utils/context';
import { paths } from './src/shared/utils/router';
import { User } from './src/User';

// Started with _ for eslint rule
const _Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = React.useState('');
  const [repository, setRepository] = React.useState('');

  const [fontsLoaded] = useFonts({
    'OpenSans': require('./src/assets/fonts/OpenSans.ttf'),
    'OpenSans-Bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
  });

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <DataStore.Provider value={{
      user: {
        value: user,
        setUser,
      },
      repository: {
        value: repository,
        setRepository,
      },
    }}>
      <StatusBar barStyle={'default'} />
      <View onLayout={onLayoutRootView} />
      <NavigationContainer>
        <_Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>

          <_Stack.Screen name={paths.home} component={Home} />
          <_Stack.Screen name={paths.user} component={User} />
          <_Stack.Screen name={paths.repository} component={Repository} />
          <_Stack.Screen name={paths.badData} component={BadData} />
          <_Stack.Screen name={paths.badConnection} component={BadConnection} />
          <_Stack.Screen name={paths.sender} component={Sender} />
          <_Stack.Screen name={paths.done} component={Done} />

        </_Stack.Navigator>
      </NavigationContainer>
    </DataStore.Provider>
  );
}