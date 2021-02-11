import { createStackNavigator } from '@react-navigation/stack'
import Header from '../shared/Header/Header'
import React from 'react'
import About from '../screens/About/About'

const Stack = createStackNavigator()

const NavigatorAbout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation }) => {
          return {
            headerTitle: () => <Header title='About' navigation={navigation} />,
          }
        }}
        name='About'
        component={About}
      />
    </Stack.Navigator>
  )
}

export default NavigatorAbout
