import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 



const AccountPage = () => {
  const navigation = useNavigation();

  const changeHandler = (val) => {
    setText(val);
  };

  const handleNewJobPress = () => {
    navigation.navigate('ProviderDetails');
   }

  return(
    <View>
      <View style={styles.profile}>
            <Text style={{fontSize: 30, fontWeight:'bold', alignItems:'center'}} >Educational Details</Text>
            {/* <AntDesign name="user" size={24} color="black" marginRight={10} flexDirection='row' /> */}

            </View>
            <View style={styles.newContainer}>
            <Text style={styles.new}>Add</Text>
            <Pressable onPress={handleNewJobPress}>
               <AntDesign name="pluscircle" size={24} color="black"  />
            </Pressable>
            </View> 

            <View>
            <Text style={styles.new}>Add School:</Text>
            <TextInput
                 style={styles.emailinput}
                 placeholder='Ex: Victory High School'
                 onChangeText={changeHandler}
                   />
            </View>
            <View>
            <Text style={styles.new}>Field of Study:</Text>
            <TextInput
                 style={styles.emailinput}
                 placeholder='Ex:B.Tech'
                 onChangeText={changeHandler}
                   />
            </View>
            <Text style={styles.new}>Year:</Text>
            <View style={styles.passwordContainer}>
             <TextInput
                style={styles.passwordinput}
                 placeholder='PassedOut'
          // secureTextEntry={!showPassword}
                 onChangeText={changeHandler}
                />
        {/* <Pressable>
        <AntDesign name="calendar" size={24} color="black" marginRight={20}/>
        </Pressable> */}
      </View>
      <Text style={styles.new}>CGPA:</Text>
            <View style={styles.passwordContainer}>
             <TextInput
                style={styles.passwordinput}
                 placeholder=''
          // secureTextEntry={!showPassword}
                 onChangeText={changeHandler}
                />
           
           </View>
           <Pressable style={styles.registerbutton} onPress={() => navigation.navigate('Welcome')}>
        <Text style={{ color: 'white', fontSize: 20 }}>Save</Text>
      </Pressable>
    </View>
     )
};

const styles = StyleSheet.create({
  emailinput: {
    borderColor: 'grey',
    paddingHorizontal: 10,
    borderWidth: 2,
    height: 60,
    width: 300,
    marginTop: 20,
    borderRadius: 20,
    alignItems:'center',
    alignSelf:'center'
  },
     profile: {
       flexDirection: 'row', // Align items horizontally
       alignItems: 'center', // Align items vertically
       justifyContent: 'center', // Center items horizontally
       padding: 20,
     },
     newContainer: {
       flexDirection: 'row',
       alignItems: 'flex-start',
       justifyContent: 'center',
       marginLeft: 20,
       padding: 20,
     },
     new: {
       fontWeight: 'bold',
       fontSize: 24,
       padding: 10
     },
     passwordContainer: {
       borderColor: 'grey',
       paddingHorizontal: 10,
       borderWidth: 2,
       height: 60,
       width: 300,
       marginTop: 20,
       borderRadius: 20,
       alignItems:'center',
       alignSelf:'center'
    },
    passwordinput: {
      flex: 1,
    },
     iconContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       padding: 10,
       borderColor: 'grey',
       // borderWidth: 2,
       // borderRadius: 10, 
       // borderHeight:100
       // borderEndWidth:50
     },
     deleteIcon:{
       marginLeft: 100,
     },
     registerbutton: {
      marginTop: 40,
      borderRadius: 20,
      backgroundColor: '#575EFF',
      height: 60,
      width: 300,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:'center'
    },
     // cardContainer: {
     //   borderRadius: 20,
     //   elevation: 3,
     //   backgroundColor: 'white',
     //   shadowOffset: { width: 1, height: 1},
     //   shadowColor: 'grey',
     //   shadowOpacity: 1,
     //   shadowRadius: 2,
     //   marginHorizontal: 4,
     //   marginVertical: 6,
     //   padding: 10
   //},
   card_template:{
     flex: 1,
     width: 250,
     height: 250
   },
     card_image:{
           padding: 20,
           alignItems: 'center',
           marginLeft: 10,
          // justifyContent: 'center',
           paddingTop: 120,
           flex:1,
           width:162,
           height:108,
           alignSelf: 'flex-start',
           borderRadius: 20,
        },
        card_title: {
         position: 'absolute',
         left: 0,
         top: 250
       },
        viewbutton:{
           marginTop:20,
           marginRight: 40,
           borderRadius: 20,
           backgroundColor: '#575EFF',
           height: 29,
           width:58,
           marginLeft: 50,
           alignItems: 'center',
           justifyContent: 'center',
     },
     
  
})


export default AccountPage;