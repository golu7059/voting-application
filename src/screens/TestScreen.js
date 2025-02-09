import React from 'react';
import { SafeAreaView, View, Text, Pressable, StyleSheet } from 'react-native';

const TestScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Main Screen</Text>
      </View>
      <View style={styles.content}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('SecureVotingScreen')}
        >
          <Text style={styles.buttonText}>Voting Screen</Text>
        </Pressable>
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
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 28,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
  },
});

export default TestScreen;