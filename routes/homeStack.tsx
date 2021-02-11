import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/Home'
import ReviewDetails from '../screens/ReviewDetails/ReviewDetails'
import React from 'react'
import Header from '../shared/Header/Header'

const Stack = createStackNavigator()

const NavigatorHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation }) => {
          return {
            headerTitle: () => <Header title='Home' navigation={navigation} />,
          }
        }}
        name='Home'
        component={Home}
      />
      <Stack.Screen
        options={{
          title: 'Review App - Details',
          headerStyle: { backgroundColor: '#eee', height: 60 },
          headerTitleStyle: {
            fontFamily: 'nunito-bold',
            color: '#444',
            fontSize: 22,
          },
        }}
        name='Review'
        component={ReviewDetails}
      />
    </Stack.Navigator>
  )
}

export default NavigatorHome
