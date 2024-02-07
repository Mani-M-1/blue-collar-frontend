import React, { useState,  useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation , useRoute} from '@react-navigation/native';

const AppliedList = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { params } = route;
    const {jobId} = params; 
    console.log(`jobId: ${jobId}`) 
    const [userArr, setUserArr] = useState([]);
    // const [userEmail, setUserEmail] = useState('');

    const getUsersAppliedList = async () => {
        console.log(`jobId in func: ${jobId}`)
        const url = `http://localhost:8080/jobprovider/usersAppliedForJob/${jobId}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            alert(data.err_msg);
        } else {
            console.log(data.usersApplied);
            setUserArr(data.usersApplied);
        }
    };


    useEffect(() => {
        getUsersAppliedList();
    }, []); 

    


    const UserItem = (props) => {
        const {user} = props;
        const {email} = user;


        return (
            <View style={styles.userCard}>
                <Text>{email}</Text>
                <View style={styles.profile}>
                    {email[0].toUpperCase()}
                </View>
            </View>
        )
    }




    return (
        <View style={styles.mainCard}>
            {userArr.map(user => <UserItem key={user._id} user={user}/>)}
        </View>

    )

}




const styles = StyleSheet.create({
    mainCard: {
        padding: 10,
    }, 
    userCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '15px',
        paddingVertical: '10px',
        borderColor: 'grey',
        borderWidth: '2px',
        borderRadius: '10px'
    }, 
    profile: {
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: "50%",
        backgroundColor: 'teal'
    }
})



export default AppliedList;