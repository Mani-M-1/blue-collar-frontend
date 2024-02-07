import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Card } from 'react-native-elements';
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import AppliedList from '../JobSeeker/AppliedList';



const ViewAll = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [jobsArr, setJobsArr] = useState([]);
  const { params } = useRoute();
    const jobId = params?.jobId; 
    const [userEmail, setUserEmail] = useState('');


  const userId = localStorage.getItem('userId');

  const getAllJobsCreated = async () => {
    const url = `http://localhost:8080/jobprovider/jobsProvided/${userId}`;
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
    getAllJobsCreated();
  }, [isFocused])

  const JobItem = (props) => {
    const { job } = props;
    const { _id, jobTitle, jobImage } = job;

  

    const handleDeleteJob = async (jobId) => {
      const url = `http://localhost:8080/jobprovider/deleteJob/${jobId}`;
      const options = {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        }
      }
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        alert(data.err_msg);
      }
      else {
        alert(data.message);
        getAllJobsCreated();
      }

    }
  }

//   const getUsersAppliedList = async () => {
//     try {
       
//         const url = `http://localhost:8080/jobprovider/usersAppliedForJob/${jobId}`;
//         const response = await fetch(url);
//         const data = await response.json();

//         if (!response.ok) {
//             alert(data.err_msg);
//         } else {
//             setUserEmail(data.userEmail);
//         }
//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// };


// useEffect(() => {
//     getUsersAppliedList();
// }, [jobId]); 




    // const jobData = [
    //   { id: 1, imageSource: require('../../assets/children care.jpg'), jobTitle: 'Children Care' },
    //   { id: 2, imageSource: require('../../assets/electrician job.jpeg'), jobTitle: 'Electrician Job' },
    //   { id: 3, imageSource: require('../../assets/plumber job.jpeg'), jobTitle: 'Plumber Job' },
    //   { id: 4, imageSource: require('../../assets/driver pic.jpeg'), jobTitle: 'Driver Job' },
    // ];

    const viewCandidatesList = (jobId) => {
      navigation.navigate('AppliedList', { jobId });
    };
  
  return (
    <View style={styles.rowContainer}>
      {jobsArr.map((job) => (
        <Card key={job._id} containerStyle={styles.cardContainer}>
          <View style={styles.cardTemplate}>
            <Pressable onPress={() =>handleDeleteJob(job._id)}>
              <Image source={{ uri: job.jobImage }} style={styles.cardImage} />
            </Pressable>
            <View style={styles.buttonContainer}>
              {/* <Image source={{ uri: job.jobImage }} style={styles.cardImage} />
              <Text style={styles.jobTitle}>{job.jobTitle}</Text> */}
              <Pressable
                style={styles.viewButton}
                onPress={() =>  getUsersAppliedList(job._id)}
              >
                <Text style={styles.viewButtonText}>Applied Candidates List</Text>
              </Pressable>
            </View>
            {jobsArr.map(job => <JobItem key={job._id} job={job} />)}

            <Text style={styles.jobTitle}>{job.jobTitle}</Text>
          </View>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: 362,
    height: 162,
    margin: 10,
    borderRadius: 20,
  },
  cardTemplate: {
    position: 'relative',
  },
  cardImage: {
    width: '50%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  buttonContainer: {
    position: 'absolute',
    top: 30,
    right: 0,
  },
  viewButton: {
    backgroundColor: '#24BD7D',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  viewButtonText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    fontWeight: 'bold'
  },
  jobTitle: {
    textAlign: 'justify',
    fontSize: 18,
    marginTop: 10,
  },
});

export default ViewAll;

