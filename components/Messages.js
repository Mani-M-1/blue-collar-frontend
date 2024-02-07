import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// import PushNotification from 'react-native-push-notification';

const messagesData = [
  { id: '1', sender: 'Prasanna', message: 'Hello ', timestamp: '12:30 PM' },
  { id: '2', sender: 'Sai', message: 'Hi ', timestamp: '12:32 PM' },
];

const Messages = () => {
  const renderMessageItem = ({ item }) => (
    <View style={styles.messageItem}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <FlatList
        data={messagesData}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  messageItem: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sender: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    fontSize: 18,
    marginBottom: 8,
  },
  timestamp: {
    color: '#777',
  },
});

export default Messages;
