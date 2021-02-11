import React from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { globalStyles } from '../../assets/styles/global'
import { Formik } from 'formik'
import * as yup from 'yup'

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is', 'Rating must be one number 1 - 5', (val) => {
      return parseInt(String(val)) < 6 && parseInt(String(val)) > 0
    }),
})

const ReviewForm = ({ addReview }) => {
  return (
    <View>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values) => {
          addReview(values)
        }}
        validationSchema={ReviewSchema}
      >
        {(formikProps) => {
          return (
            <View style={globalStyles.form}>
              <TextInput
                style={globalStyles.input}
                placeholder='Review title'
                onChangeText={formikProps.handleChange('title')}
                value={formikProps.values.title}
              />
              <TextInput
                style={globalStyles.input}
                placeholder='Review body'
                onChangeText={formikProps.handleChange('body')}
                value={formikProps.values.body}
              />
              <TextInput
                style={globalStyles.input}
                placeholder='Review rating 1-5'
                onChangeText={formikProps.handleChange('rating')}
                keyboardType='numeric'
                value={formikProps.values.rating}
              />
              <Button
                title='submit'
                color='maroon'
                onPress={() => formikProps.handleSubmit()}
              />
            </View>
          )
        }}
      </Formik>
    </View>
  )
}

export default ReviewForm
