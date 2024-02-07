import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../Routes/JobSeeker/Searchbar';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



// import {createNativeStackNavigator} from '@react-navigation/native-stack';


const JobSeeker = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');
  const [clicked, setClicked] = useState(false);
 
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);


   const filteredJobs = jobs.filter((job) =>
   job.jobTitle && job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
   );

  const getjobseeker = async () => {
    try {
      const response = await fetch('http://localhost:8080/jobDetails/jobseekerid', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      else {
        const data = await response.json();
        console.log('getting the data successful:', data);
        navigation.navigate('Signin')
      }


    } catch (error) {
      console.error('Error while getting data:', error.message);
    }
  };


  const getAllJobs = async () => {
    const url = "http://localhost:8080/jobseeker/allJobs";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.jobs);
    if (!response.ok) {
      alert(data.err_msg);
    }
    else {
      setJobs(data.jobs);
    }
  }

  useEffect(() => {
    getAllJobs();
  }, [])

    // Fetch applied jobs here and update the appliedJobs state
    const fetchAppliedJobs = async () => {
      try {
        // Fetch applied jobs logic here
       
        const url=`http://localhost:8080/jobseeker/jobsApplied/${userId}`;
        const data = await response.json();
        setAppliedJobs(data.appliedJobs);
      } catch (error) {
        console.error('Error while fetching applied jobs:', error.message);
      }
    };

    useEffect(() => {
      fetchAppliedJobs();
  }, [])

  const RecommendeJobItem = (props) => {
    const { job } = props;
    const { jobTitle, jobImage, _id } = job;
    const navigation = useNavigation();

    const submitHandler = () => {
      // Pass the job details to the submitHandler function
      navigation.navigate('SekerDetails',{jobId : _id});
    };



    return (
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={jobImage} />
        <Pressable style={styles.viewbutton} onPress={submitHandler}>
          <Text style={{ fontWeight: "bold" }}>{jobTitle}</Text>
        </Pressable>
      </View>
    )
  }


  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('ProfilePage')}>
          <AntDesign name="profile" size={24} color="black" />
        </Pressable>
        <View style={styles.searchBarContainer}>
          <SearchBar
            clicked={clicked}
            searchPhrase={searchQuery}
            setSearchPhrase={setSearchQuery}
            setClicked={setClicked}
          />
        </View>
        <Pressable onPress={() => navigation.navigate('Messages')}>
          <AntDesign name="message1" size={24} color="black" />
        </Pressable>
      </View>

      {clicked ? (
        <View style={styles.searchResultsContainer}>
          {filteredJobs.map(job => <RecommendeJobItem key={job._id} job={job} />)}
        </View>
      ) : (
        <>

      {/*  this is about recommended for you  */}
      <Text style={styles.Recommended}>Recommended For You</Text>

      <View style={styles.jobsWrapper} >


        {jobs.map(job => <RecommendeJobItem key={job._id} job={job} />)}
        {/* <View style={styles.itemContainer}>
                <Image style={styles.image} source={require('../../assets/driver pic.jpeg')} />
                <Pressable style={styles.viewbutton} onPress={() =>  submitHandler(text)}>
                  <Text style={{fontWeight:"bold"}}>Driver Jobs</Text>
                </Pressable>
              </View> */}
      </View>
      
 

      {appliedJobs.length > 0 && (
            <>
              <Text style={styles.applications}>Your Applications</Text>
              <View style={styles.applicationsContainer}>
                {appliedJobs.map(appliedJob => (
                  <View key={appliedJob.id}>
                    {/* Display applied job details */}
                    <Text>{appliedJob.jobTitle}</Text>
                  </View>
                ))}
              </View>
            </>
          )}
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  searchBarContainer: {
    flex: 2, // Occupy remaining space
    marginLeft: 5, // Adjust as needed
  },
  //   messageIcon: {
  //     marginLeft: 15,
  //   },
  explore: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 26,
  },

  image: {
    // padding: 20,
    // alignItems: 'center',
    // marginLeft: 10,
    // justifyContent: 'center',
    paddingTop: 120,
    // flex:1,
    width: 180,
    height: 200,
    // alignSelf: 'flex-start',
    borderRadius: 20,
  },
  searchResultsContainer: {
    flex: 1, // Take up all available space
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 10, // Add vertical padding
  },
 
  jobsWrapper: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    flexWrap: "wrap",
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    marginBottom: 20,
  },

  Recommended: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 26,
  },
  applicatins: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 26,

  },
  applicationsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  }


})
export default JobSeeker;