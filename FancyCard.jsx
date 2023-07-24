import { PlatformColor, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

export default function fancyCard() {
  return (
    <View>
      <Text style={styles.headingText}> Trending Place </Text>
      <View style={[styles.card,styles.cardElevated]}>
<Image
    source={{
        uri:'https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
    
    }}
    style={styles.cardImage}
/>
<View style={styles.cardBody}>
<Text style={styles.cardTitle}>hii</Text>
<Text style={styles.cardlable}>hello</Text>
<Text style={styles.cardDis}>hey</Text>
<Text style={styles.cardFoter}>hii</Text>

</View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{ 
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:10,
        marginHorizontal:16,
    },
    cardElevated:{
        backgroundColor:'#ffffff',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,

        }
    },

    cardImage:{
        height:190,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
    },
    cardDis:{
        color:'#000000',
        fontSize:12,
        marginBottom:14,
    },
    cardFoter:{
        color:'#000000'
    },
    cardlable:{
        color:'#000000' ,
        fontSize:12,
        marginBottom:4,
    },
})