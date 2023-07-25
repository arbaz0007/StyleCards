import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import FlatCard from './FlatCard'
import Elevated from './Elevated'
import FancyCard from './FancyCard'
import ActionCard from './ActionCard'
import ContactList from './ContactList'
const App = () => {
  return (
    
    <SafeAreaView>
    <ScrollView>
    <FlatCard/>
      <Elevated/>
      <FancyCard/>
      <ContactList/>
      <ActionCard/>
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default App