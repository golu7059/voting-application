import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const SecureVotingScreen = () => {
  /*
    TODO :
    1. voting name 
    2. voting description
    3. voting options
    4. submit button 
    5. after submitting shows the thaks page and goes back to main screen after showing the thaks for voting annimation for 5 seconds
    that you will be redirected to main screen with countdown
    6. if user try to do anything other than voting then go back to main screen , now he/shew will the same link or qr again then show 
    error that voting already submitted
  */
  return (
    <SafeAreaView style={styles.container}>
        formate : 
        1. voting name 
        2. voting description
        3. voting options
        4. submit button 
        5. after submitting shows the thaks page and goes back to main screen
        6. 
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Secure Voting</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>Welcome to Secure Voting Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default SecureVotingScreen;
