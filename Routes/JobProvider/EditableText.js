import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const EditableText = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [companyName, setCompanyName] = useState('Your Company');
  const [jobRole, setJobRole] = useState('Job Role');
  const [description, setDescription] = useState('Job Description');

  const navigation = useNavigation();

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSavePress = () => {
    setIsEditing(false);
    // Here you might want to save the updated details to a backend or perform other actions
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Company Name:</Text>
        {isEditing ? (
          <TextInput
            style={styles.editInput}
            value={companyName}
            onChangeText={(text) => setCompanyName(text)}
          />
        ) : (
          <Text style={styles.detailText}>{companyName}</Text>
        )}
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Job Role:</Text>
        {isEditing ? (
          <TextInput
            style={styles.editInput}
            value={jobRole}
            onChangeText={(text) => setJobRole(text)}
          />
        ) : (
          <Text style={styles.detailText}>{jobRole}</Text>
        )}
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Description:</Text>
        {isEditing ? (
          <TextInput
            style={styles.editInput}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        ) : (
          <Text style={styles.detailText}>{description}</Text>
        )}
      </View>
      {isEditing ? (
        <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  detailContainer: {
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 18,
    marginBottom: 8,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  editInput: {
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EditableText;
