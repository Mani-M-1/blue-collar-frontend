import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../Routes/JobSeeker/Searchbar';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";



// import {createNativeStackNavigator} from '@react-navigation/native-stack';


const JobSeeker = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');
  const [clicked, setClicked] = useState(false);
 
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);


  const getAppliedJob = async () => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      alert("userId does not exist");
    }
    const url = `http://localhost:8080/jobseeker/jobsApplied/${userId}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.jobs);
    if (!response.ok) {
      alert(data.err_msg);
    }
    else {
      console.log(data.jobsApplied)
      setAppliedJobs(data.jobsApplied)
    }
  }



  const getAllJobs = async () => {
    const url = "http://localhost:8080/jobseeker/allJobs";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.jobs);
    if (!response.ok) {
      alert(data.err_msg);
    }
    else {
      console.log(data.jobs)
      setJobs(data.jobs);
    }
  }

  useEffect(() => {
    // for getting all jobs for recommondation
    getAllJobs();

    // for getting jobs applied by the user
    getAppliedJob();
  }, [])

    // Fetch applied jobs here and update the appliedJobs state
  //   const fetchAppliedJobs = async () => {
  //     try {
  //       // Fetch applied jobs logic here
       
  //       const url=`http://localhost:8080/jobseeker/jobsApplied/${userId}`;
  //       const data = await response.json();
  //       setAppliedJobs(data.appliedJobs);
  //     } catch (error) {
  //       console.error('Error while fetching applied jobs:', error.message);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchAppliedJobs();
  // }, [])

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
        <Pressable style={styles.viewbutton} onPress={submitHandler}>
          <Image style={styles.image} source={jobImage} />
          <Text style={styles.jobTitle}>{jobTitle}</Text>
        </Pressable>
      </View>
    )
  }



  const AppliedJobItem = (props) => {
    const { job } = props;
    const { jobTitle, jobImage } = job;



    return (
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={jobImage} />
        <Text style={styles.jobTitle}>{jobTitle}</Text>
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
          <TextInput style={styles.input} placeholder="Search"/>
          <Entypo
            name="cross"
            size={20}
            color="black"
            
          />
          {/* <SearchBar
            clicked={clicked}
            searchPhrase={searchQuery}
            setSearchPhrase={setSearchQuery}
            setClicked={setClicked}
          /> */}
        </View>
        <Pressable onPress={() => navigation.navigate('Messages')}>
          <AntDesign name="message1" size={24} color="black" />
        </Pressable>
      </View>


    


      {/*  this is about recommended for you  */}
      <Text style={styles.headers}>Recommended For You</Text>

      <View style={styles.jobsWrapper} >
        {jobs.map(job => <RecommendeJobItem key={job._id} job={job} />)}
      </View>
      
 
      {/* applied job list  */}
      <Text style={styles.headers}>Applied Jobs</Text>
      {
        appliedJobs.length > 0 
        &&
        <View>
          {appliedJobs.map(job => <AppliedJobItem key={job._id} job={job} />)}
        </View>
      }
        
    
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    padding: 20
  }, 
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBarContainer: {
    flex: 2, // Occupy remaining space
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "grey",
  },
  input: {
    outline: "none",
    border: 0,
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    padding: 5,
  },
  //   messageIcon: {
  //     marginLeft: 15,
  //   },
  explore: {
    
    fontWeight: 'bold',
    fontSize: 26,
  },

  image: {
    // 
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


  jobTitle: {
    fontWeight: "bold", 
    fontSize: 16,
    marginTop: 10
  }, 



  searchResultsContainer: {
    flex: 1, // Take up all available space
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 10, // Add vertical padding
  },
 
  jobsWrapper: {
    
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    flexWrap: "wrap",
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    marginBottom: 20,
  },

  headers: {
    marginBottom: 10, 
    fontWeight: 'bold',
    fontSize: 26,
  },

  applicatins: {
    
    fontWeight: 'bold',
    fontSize: 26,

  },
  applicationsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  }


})
export default JobSeeker;