import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { Home } from './src/Home';
import { User } from './src/User';

const Stack = createNativeStackNavigator();
export const DataStore = React.createContext()

export default function App() {
  const [user, setUser] = React.useState('');
  const [repository, setRepository] = React.useState('');

  const [fontsLoaded] = useFonts({
    'OpenSans': require('./src/assets/fonts/OpenSans.ttf'),
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
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>

          <Stack.Screen
            options={{ title: 'asd' }}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="User" component={User} />

        </Stack.Navigator>
      </NavigationContainer>
    </DataStore.Provider>
  );
}