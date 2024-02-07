import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import EditableText from "./EditableText";
import AppliedList from "../JobSeeker/AppliedList";

import { useIsFocused } from "@react-navigation/native";


const JobProvider = () => {
  const isFocused = useIsFocused();

  const navigation = useNavigation();

  const [jobsArr, setJobsArr] = useState([]);

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


  const handleNewJobPress = () => {
    navigation.navigate("ProviderDetails");
  };

  const handleEditPress = () => {
    navigation.navigate("EditableText");
  };
  const submitHandler = () => {
    navigation.navigate("EditableText");
  };



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
    const handleJobPress = () => {
      navigation.navigate('ProviderDetails', {
        jobDetails: job, // Pass the job details to ProviderDetails
      });
    }

    return (
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardTemplate}>

          <View style={styles.iconContainer}>

            <Pressable onPress={handleEditPress}>
              <Feather name="edit" size={24} color="black" />
            </Pressable>

            <Pressable onPress={() => handleDeleteJob(_id)}>
              <MaterialIcons name="delete" size={24} color="black" />
            </Pressable>

            <Pressable onPress={()=>{handleJobPress}}>
              <Image source={{ uri: jobImage }} style={styles.cardImage} />
            </Pressable>

          </View>
          <Image source={{ uri: jobImage }} style={styles.cardImage} />
          <Text style={styles.jobTitle}>{jobTitle}</Text>

          <Pressable style={styles.viewButton}  onPress={() => navigation.navigate('ViewButton', {jobId:_id})}>
            <Text style={styles.viewButtonText}>View</Text>
          </Pressable>

        </View>
      </Card>
    )
  }

  return (
    <View>


      <View style={styles.profile}>
        <Text style={styles.provider}>Job Provider</Text>
        <AntDesign name="user" size={24} color="black" marginLeft='Flex-end' justifyContent="space-between" padding={20} />
      </View>


      <View style={styles.newContainer}>
        <Text style={styles.new}>Post New Job</Text>
        <Pressable onPress={handleNewJobPress}>
          <AntDesign name="pluscircle" size={24} color="black" />
        </Pressable>
      </View>


      <View style={styles.rowContainer}>

        {jobsArr.map(job => <JobItem key={job._id} job={job} />)}

      </View>





      <Pressable style={styles.viewAllButton} onPress={() => navigation.navigate('ViewAll')}>
        <Text style={{ color: 'white', fontSize: 20 }}>View All</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  provider: {
    backgroundColor: "#47FF07",
    alignSelf: "center",
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    borderRadius: 20,
    width: 300,
    height: 50,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  newContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 175,
    padding: 20,
  },
  new: {
    fontWeight: "bold",
    fontSize: 24,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderColor: "grey",
  },
  cardContainer: {
    borderRadius: 20,
    elevation: 2,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowRadius: 2,
    // marginHorizontal: 4,
    // marginVertical: 6,
    padding: 10,
    width: 180,
  },
  cardTemplate: {
    width: "100%",
    height: 250,
  },
  cardImage: {
    flex: 1,
    resizeMode: "cover", // Ensure the image covers the entire space
    borderRadius: 20,
  },

  jobTitle: {
    fontSize: 24,
    color: "black",
    textAlign: 'center'
  },

  viewButton: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "#575EFF",
    height: 29,
    width: 58,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  viewButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  viewAllButton: {
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#575EFF',
    height: 60,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',

  }

});
export default JobProvider;
