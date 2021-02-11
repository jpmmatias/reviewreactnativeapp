import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { globalStyles } from '../../assets/styles/global'
import Card from '../../shared/Card/Card'

const ReviewDetails = ({ route }) => {
  const { title, body, rating } = route.params
  let imgsRating = []
  for (let i = 0; i < rating; i++) {
    imgsRating.push(
      <Image
        key={i}
        source={require('../../assets/rating-1.png')}
        style={styles.image}
      />
    )
  }
  return (
    <View>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.ratingContainer}>
          <Text>Rating:</Text>
          <View style={styles.ratingImgsContainer}>{imgsRating}</View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: 'rgba(0,0,0,.2)',
    borderTopWidth: 0.5,
    paddingTop: 10,
    marginVertical: 4,
  },
  image: {
    width: 16,
    height: 16,
  },
  ratingImgsContainer: {
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ReviewDetails
