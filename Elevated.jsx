import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default function Elevated() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style ={[styles.card,styles.cardElevated]}>
            <Text>
                tap
            </Text>
        </View>
        <View style ={[styles.card,styles.cardElevated]}>
            <Text>
                me
            </Text>
        </View>
        <View style ={[styles.card,styles.cardElevated]}>
            <Text>
                to
            </Text>
        </View>
        <View style ={[styles.card,styles.cardElevated]}>
            <Text>
               scroll
            </Text>
        </View>
        <View style ={[styles.card,styles.cardElevated]}>
            <Text>
                more...
            </Text>
        </View>
        <View style ={[styles.card,styles.cardElevated]}>
            <Text>
                
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText :{
        fontsize:24,
        fontWeight: 'bold',
        paddingHorizontal:10,
    },
    container:{
        padding:8,
    },
    card:{
        flex:1,
        width:100,
        height:100,
        alignItems:'center',
        justifyContent:'center',
        bordeRadius: 4,
        margin :8,
        
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:5,
        shadowOffset:{
          width:1,
          height:1,
        }
    },
    shadowcolor: '#333',
    shadowOpacity:0.5,
    shadorRadius:2,

})