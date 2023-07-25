import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  return (
    <View>
      <Text style={styles.hedingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
         {}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{},
    container:{}
})