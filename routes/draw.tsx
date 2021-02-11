import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import NavigatorHome from './homeStack'
import NavigatorAbout from './aboutStack'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={NavigatorHome} />
        <Drawer.Screen name='About' component={NavigatorAbout} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigation
