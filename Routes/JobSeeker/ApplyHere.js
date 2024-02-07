import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Pressable, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


const ApplyHere = ({ route }) => {
    const navigation = useNavigation();
    // const { userEmail } = route.params;

    
    // const [text, setText] = useState('');

    // const changeHandler = (val) => {
    //     setText(val);
    // }

    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('JobSeeker')
      }, 3000);
    }, [])
    

    return(
        <View style={styles.container}>
            <AntDesign name="checkcircleo" size={50} color="#1976D2" style={styles.icon} />
            <Text style={{fontWeight:'bold', fontSize:32, alignSelf:'center', justifyContent:'center', marginTop:20}}>Succesfull</Text>
            <Text style={{fontWeight:'bold',fontSize:28,padding: 30, alignSelf:'center', justifyContent:'center', marginLeft:45}}> You have successfully applied for the job</Text>

            <Pressable
        style={styles.postjobbutton}
        
      >
        <Text style={{ color: 'white', fontSize: 20 }}>View All</Text>
      </Pressable>
        </View>

        
    )

    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        marginBottom: 20,
      },
})

export default ApplyHere;