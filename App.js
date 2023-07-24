import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import FlatCard from './FlatCard'
import Elevated from './Elevated'
import FancyCard from './fancyCard'
const App = () => {
  return (
    
    <SafeAreaView>
    <ScrollView>
    <FlatCard/>
      <Elevated/>
      <FancyCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App