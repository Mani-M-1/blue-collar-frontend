import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Pressable, Image, ImageViewer } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import SekerDetails from '../JobSeeker/SekerDetails';
import * as ImagePicker from 'expo-image-picker';
import { Card } from "react-native-elements";


// // Import your image file from the assets folder
// import yourImage from '../../assets/your-image-file.jpg';


const ProviderDetails = () => {

  const navigation = useNavigation();
  // const route = useRoute();
  // const { jobDetails } = route.params;

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        // Extract URI from the first asset in the assets array
        const selectedImageUri = result.assets[0].uri;
        setSelectedImage(selectedImageUri);
      } else {
        alert('You did not select any image.');
      }
    } catch (error) {
      console.error('Error picking image:', error.message);
    }
  };

  const userId = localStorage.getItem('userId');

  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [workHours, setWorkHours] = useState('');
  const [salary, setSalary] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [postedOn, setPostedOn] = useState('');
  const [postedBy, setPostedBy] = useState('');

  


  const postJobProvider = async () => {
    // console.log(providerDetails)
    const providerDetails = {
      companyName,
      jobTitle,
      description,
      location,
      workHours,
      salary,
      contactDetails,
      postedBy: userId,
      jobImage: selectedImage,
    }
    try {
      const response = await fetch('http://localhost:8080/jobprovider/postJob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(providerDetails),

      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      else {
        const data = await response.json();
        console.log('Posted the data successfull', data);
        navigation.navigate('JobProvider');
      }

               
    } catch (error) {
      console.error('Error while posting  data:', error.message);
    }
  };
  return (
    <View style={styles.imageinput}>
      <Card containerStyle={styles.card}>
        <TouchableOpacity onPress={pickImageAsync} style={styles.imagePickerButton}>
          <Text style={styles.imagePickerButtonText}>Select Image</Text>
        </TouchableOpacity>

        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.imageStyle} resizeMode="cover" />
        )}
      </Card>
      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>Company Name:</Text>
      <TextInput
        style={styles.nameinput}
        placeholder=''
        value={companyName}
        onChangeText={(text) => setCompanyName(text)}
      />
      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>Job Title:</Text>
      <TextInput
        style={styles.roleinput}
        placeholder=''
        value={jobTitle}
        onChangeText={(text) => setJobTitle(text)}
      />
      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>Description:</Text>
      <TextInput
        style={styles.descriptioninput}
        placeholder=''
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>Location:</Text>
      <TextInput
        style={styles.locationinput}
        placeholder=''
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>Work Hours:</Text>
      <TextInput
        style={styles.workinput}
        placeholder=''
        value={workHours}
        onChangeText={(text) => setWorkHours(text)}
      />
      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>Salary:</Text>
      <TextInput
        style={styles.salaryinput}
        placeholder=''
        value={salary}
        onChangeText={(text) => setSalary(text)}
      />
      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>Contact Details:</Text>
      <TextInput
        style={styles.contactinput}
        placeholder=''
        value={contactDetails}
        onChangeText={(text) => setContactDetails(text)}
      />
      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>Note:</Text>
      <TextInput
        style={styles.noteinput}
        placeholder='Intersted candidates can apply here'
      //  onChangeText={changeHandler}
      />
      <Pressable style={styles.postjobbutton} onPress={postJobProvider}>
        <Text style={{ color: 'white', fontSize: 20 }}>Post Job</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    padding: 20,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 120,
    flex: 1,
    width: 384,
    height: 184,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    borderRadius: 20,
    elevation: 2,
    backgroundColor: 'white',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  imagePickerButton: {
    alignSelf: 'center',
    padding: 15,
    backgroundColor: '#575EFF',
    borderRadius: 10,
    marginTop: 20,
  },
  imagePickerButtonText: {
    color: 'white',
    fontSize: 16,
  },
  imageStyle: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },


  nameinput: {
    borderColor: 'grey',
    alignSelf: 'center',
    borderWidth: 2,
    height: 60,
    width: 300,
    //marginTop:50,
    borderRadius: 20,

    //borderBottomColor: '#ddd'
  },
  roleinput: {
    borderColor: 'grey',
    alignSelf: 'center',
    // marginBottom: 10,
    paddingHorizontal: 10,
    //marginHorizontal: 150,
    padding: 10,
    borderWidth: 2,
    // marginTop:30,
    height: 60,
    width: 300,
    borderRadius: 20,

    //borderBottomColor: '#ddd'
  },

  descriptioninput: {
    borderColor: 'grey',
    alignSelf: 'center',
    // marginBottom: 10,
    paddingHorizontal: 10,
    //marginHorizontal: 150,
    padding: 10,
    borderWidth: 2,
    // marginTop:30,
    height: 60,
    width: 300,
    borderRadius: 20,

    //borderBottomColor: '#ddd'
  },

  locationinput: {
    borderColor: 'grey',
    // marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    //marginHorizontal: 150,
    padding: 10,
    borderWidth: 2,
    // marginTop:30,
    height: 60,
    width: 300,
    borderRadius: 20,

    //borderBottomColor: '#ddd'
  },
  workinput: {
    borderColor: 'grey',
    // marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    //marginHorizontal: 150,
    padding: 10,
    borderWidth: 2,
    //marginTop:30,
    height: 60,
    width: 300,
    borderRadius: 20,

    //borderBottomColor: '#ddd'
  },
  salaryinput: {
    borderColor: 'grey',
    // marginBottom: 10,
    paddingHorizontal: 10,
    //marginHorizontal: 150,
    padding: 10,
    alignSelf: 'center',
    borderWidth: 2,
    // marginTop:30,
    height: 60,
    width: 300,
    borderRadius: 20,

    //borderBottomColor: '#ddd'
  },
  contactinput: {
    borderColor: 'grey',
    // marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    //marginHorizontal: 150,
    padding: 10,
    borderWidth: 2,
    // marginTop:30,
    height: 60,
    width: 300,
    borderRadius: 20,

    //borderBottomColor: '#ddd'
  },
  noteinput: {
    borderColor: 'grey',
    // marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    //marginHorizontal: 150,
    padding: 10,
    borderWidth: 2,
    // marginTop:30,
    height: 60,
    width: 300,
    borderRadius: 20,

    //borderBottomColor: '#ddd'
  },
  postjobbutton: {
    marginTop: 30,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#575EFF',
    height: 60,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },


})

export default ProviderDetails;
