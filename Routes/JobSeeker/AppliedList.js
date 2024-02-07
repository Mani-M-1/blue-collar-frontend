import React, { useState,  useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation , useRoute} from '@react-navigation/native';

const AppliedList = () => {
    const navigation = useNavigation();
    const { params } = useRoute();
    const jobId = params?.jobId; 
    const [userEmail, setUserEmail] = useState('');

    const getUsersAppliedList = async () => {
        try {
           
            const url = `http://localhost:8080/jobprovider/usersAppliedForJob/${jobId}`;
            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) {
                alert(data.err_msg);
            } else {
                setUserEmail(data.userEmail);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };


    useEffect(() => {
        getUsersAppliedList();
    }, [jobId]); 

    

    return (
        <View>
        <Text>User Email: {userEmail}</Text>
      </View>

    )

}


export default AppliedList;