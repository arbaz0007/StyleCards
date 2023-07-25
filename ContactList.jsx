import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Alice',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://images.unsplash.com/photo-1503001831666-8f3cf3a24544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
      uid: 2,
      name: 'Jane',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    },
    {
      uid: 3,
      name: 'Emily',
      status: 'Making your GPay smooth',
      imageUrl: 'https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
    },
    {
      uid: 4,
      name: 'Matte',
      status: 'Building secure Digital banks',
      imageUrl: 'https://images.unsplash.com/photo-1562806214-d0e469d47727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
         {contacts.map(({uid,name,status,imageUrl})=>(
          <View key={uid}style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl
              }}
              style={styles.userImage}
            />
            <View>
            <Text style={styles.username}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
         ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
      fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
    },
    container:{ 
      paddingHorizontal:16,
      
    },
      userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#8DAF',
        padding:8,
        borderRadius:14,

      },
      userImage:{
        width:60,
        height:60,
        borderRadius:30,
        margin:14,
      },
      username:{
        fontSize:16,
        fontWeight:'600',
      },
      userStatus:{
        fontSize:12,

      }
})