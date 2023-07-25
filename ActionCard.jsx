import { StyleSheet, Text, View,Linking,Image ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite (websiteLink:string){
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
      <Image
      source={{
        uri:'https://images.unsplash.com/photo-1690139217228-df437e22cf21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'
      ,
      }}
      style={styles.cardblog}
      />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.headerText} > whats new</Text>
      </View>
      <Image
      source={{
        uri:'https://images.unsplash.com/photo-1690139217228-df437e22cf21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'
      ,
      }}
      style={styles.cardImage}
      />
      < View style={styles.bodyContainer }>
      <Text numberOfLines={3}>
      JavaScript is the world's most popular programming language.

    JavaScript is the programming language of the Web.

    JavaScript is easy to learn.

    This tutorial will teach you JavaScript from basic to advanced.
      </Text>
      </View>
        < View style={styles.footerContainer }>
      <TouchableOpacity 
      onPress={()=> openWebsite('https://github.com')}>
        <Text style={styles.social}> Follow me</Text>
       
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> openWebsite('https://www.w3schools.com/js/DEFAULT.asp')}>
       <Text style={styles.social}> Readme</Text>
       </TouchableOpacity>
        </View>
        
        
        </View>
    
  )
}

const styles = StyleSheet.create({
  headingText:{ 
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8

  },
  card:{
    width:350,
    height:360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16,
  },
  elevatedCard:{
    elevation:3,

    backgroundColor:'#E07C24'
  },
  headingContainer:{
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  headerText:{
    color:'#000',
    fontSize:16, 
    fontWeight:'600',
  },
  cardImage:{
    height:190,
  },
  bodyContainer:{
    padding:10,
  },
  footerContainer:{
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'

  },
  social:{ 
    fontSize:16,
    color:'#000000',
    backgroundColor:'#EF5354',
    paddingHorizontal:20,
    paddingVertical:20,
    borderRadius:8,
  },
  cardblog:{
    height:340,
    borderRadius:8,
    backgroundColor:'#E07C24'
  }

})