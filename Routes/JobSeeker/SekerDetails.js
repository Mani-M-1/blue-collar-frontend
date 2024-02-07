import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useIsFocused } from "@react-navigation/native";


const SekerDetails = () => {
  const navigation = useNavigation();

  const isFocused = useIsFocused();
  const [jobDetails, setJobDetails]= useState({
    companyName:'', 
    contactDetails: '',
    description:'', 
    jobImage : '',
    jobTitle:'', 
    location: '',
    salary: '',
    workHours:'' 
  })


  const route = useRoute();
  const { params } = route;
  const {jobId}= params;
  console.log(jobId)
  console.log(params)
  // const jobDetails = params?.jobDetails || {}; // Use an empty object as a default value
  // console.log('Job Details:', jobDetails);

  const getJobDetails = async () => {
    console.log(jobId)

    const url = `http://localhost:8080/jobseeker/jobDetails/${jobId}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      alert(data.err_msg);
    }
    else {
      const {  companyName, 
      contactDetails,
      description, 
      jobImage ,
      jobTitle, 
      location,
      salary,
      workHours }= data.jobDetails
      
      setJobDetails({  companyName, 
        contactDetails,
        description, 
        jobImage ,
        jobTitle, 
        location,
        salary,
        workHours })

      console.log(data.jobDetails)
    }
  }

  useEffect(() => {
    getJobDetails();
  }, [isFocused])

  const getJobApplied = async () => {
    const url = `http://localhost:8080/jobseeker/applyJob/${userId}/${jobId}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      alert(data.err_msg);
    }
    else {
      setJobsArr(data.jobs)

      console.log(data.jobs)
    }
  }



  useEffect(() => {
    getJobApplied();
  }, [isFocused])


return (
    <View style={styles.imageinput}>

      {/* <Text style={{ fontWeight: 'Semibold', fontSize: 20, padding: 20 }} >{jobDetails.jobImage}</Text> */}
      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>Image : </Text>

      <Image style={styles.image}  source={jobDetails.jobImage}/>
       {/* {jobDetails.jobImage && (
        <>
          <Text style={{ fontWeight: 'Semibold', fontSize: 20, padding: 20 }}>{jobDetails.jobImage}</Text>
          <Image style={styles.image} source={{ uri: jobDetails.jobImage }} />
        </>
      )} */}
      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>CompanyName : {jobDetails.companyName}</Text>

      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>Job Title : {jobDetails.jobTitle}</Text>

      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>Description : {jobDetails.description}</Text>

      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>Location : {jobDetails.location}</Text>

      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>WorkHours : {jobDetails.workHours}</Text>

      <Text style={{ padding: 20, fontWeight: 'Semibold' }}> Salary : {jobDetails.salary}</Text>

      <Text style={{ padding: 20, fontWeight: 'Semibold' }}>Contact Details : {jobDetails.contactDetails}</Text>

      <Text style={{ padding: 20, fontWeight: 'bold', alignSelf: 'center' }}>Intersted Candidates Can ApplyHere</Text>

      <Pressable style={styles.postjobbutton} onPress={() => navigation.navigate('ApplyHere', { userEmail: 'user@example.com' })}>
        <Text style={{ color: 'white', fontSize: 20 }}>Apply Here {getJobApplied}</Text>
      </Pressable>


    </View>
  )

}

const styles = StyleSheet.create({
  image: {
    padding: 20,
    alignItems: 'center',
    paddingTop: 120,
    flex: 1,
    width: 384,
    height: 184,
    alignSelf: 'center'
  },

  nameinput: {
    borderColor: 'grey',
    alignSelf: 'center',
    borderWidth: 2,
    height: 60,
    width: 300,
    borderRadius: 20,

  },
  roleinput: {
    borderColor: 'grey',
    alignSelf: 'center',
    paddingHorizontal: 10,
    padding: 10,
    borderWidth: 2,
    height: 60,
    width: 300,
    borderRadius: 20,

  },
  descriptioninput: {
    borderColor: 'grey',
    alignSelf: 'center',
    paddingHorizontal: 10,
    padding: 10,
    borderWidth: 2,
    height: 60,
    width: 300,
    borderRadius: 20,

  },
  locationinput: {
    borderColor: 'grey',
    paddingHorizontal: 10,
    alignSelf: 'center',
    padding: 10,
    borderWidth: 2,
    height: 60,
    width: 300,
    borderRadius: 20,

  },
  workinput: {
    borderColor: 'grey',
    paddingHorizontal: 10,
    alignSelf: 'center',
    padding: 10,
    borderWidth: 2,
    height: 60,
    width: 300,
    borderRadius: 20,

  },
  salaryinput: {
    borderColor: 'grey',
    paddingHorizontal: 10,
    padding: 10,
    alignSelf: 'center',
    borderWidth: 2,
    height: 60,
    width: 300,
    borderRadius: 20,

  },
  contactinput: {
    borderColor: 'grey',
    paddingHorizontal: 10,
    alignSelf: 'center',
    padding: 10,
    borderWidth: 2,
    height: 60,
    width: 300,
    borderRadius: 20,

  },
  noteinput: {
    borderColor: 'grey',
    paddingHorizontal: 10,
    alignSelf: 'center',
    padding: 10,
    borderWidth: 2,
    height: 60,
    width: 300,
    borderRadius: 20,

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

export default SekerDetails;