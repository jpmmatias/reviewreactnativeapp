import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

interface HeaderProps {
  navigation: any
  title: string
}

const Header: React.FC<HeaderProps> = ({ navigation, title }) => {
  const { header, headerText, icon } = styles

  return (
    <View style={header}>
      <MaterialIcons
        name='menu'
        size={28}
        style={icon}
        onPress={() => {
          navigation.openDrawer()
        }}
      />
      <View style={styles.headerMain}>
        <Image
          source={require('../../assets/heart_logo.png')}
          style={styles.image}
        />
        <Text style={headerText}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'nunito-bold',
    color: '#444',
    fontSize: 22,
    letterSpacing: 1,
    marginHorizontal: 20,
  },
  icon: {
    position: 'absolute',
    left: 5,
  },
  image: {
    width: 20,
    height: 20,
  },
})

export default Header
