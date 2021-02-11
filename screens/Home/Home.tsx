import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native'
import '../../assets/styles/global'
import { globalStyles } from '../../assets/styles/global'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import Card from '../../shared/Card/Card'

const Home = ({ navigation }) => {
  interface review {
    title: string
    body: string
    key: string
    rating: number
  }
  const addReview = (review: any) => {
    review.key = (Math.random() * 100).toString()
    setReviews([...reviews, review])
    setShowmodal(false)
  }
  const { container, titleText } = globalStyles
  const [showmodal, setShowmodal] = useState(false)
  const [reviews, setReviews] = useState<review[]>([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ])
  return (
    <View style={container}>
      <Modal
        style={{ ...styles.modalToggle, ...styles.modalClose }}
        visible={showmodal}
        animationType='slide'
      >
        <MaterialIcons
          name='close'
          size={24}
          onPress={() => {
            setShowmodal(false)
          }}
        />
        <View>
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>
      <MaterialIcons
        name='add'
        style={styles.modalToggle}
        size={24}
        onPress={() => {
          setShowmodal(true)
        }}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Review', item)
            }}
          >
            <Card>
              <Text style={titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
})
