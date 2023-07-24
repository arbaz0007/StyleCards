import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import FlatCard from './FlatCard'

const App = () => {
  return (
    
    <SafeAreaView>
    <ScrollView>
    <FlatCard/>
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default App