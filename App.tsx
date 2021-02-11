import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import DrawerNavigation from './routes/draw'

const App = () => {
  let [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })

  return fontsLoaded ? <DrawerNavigation /> : <AppLoading />
}

export default App
