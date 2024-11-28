import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function SignupPage({navigation}) {
  return (
    <View style={styles.container}>
      {/* Blue top background with images */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>{"<"}</Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Signup</Text>
      </View>
        
      </View>

      {/* White background for the form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput style={styles.input} placeholder="First Name:" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Last Name:" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Email:" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="University:" placeholderTextColor="#888" /> 
        <TextInput style={styles.input} placeholder="Age:" placeholderTextColor="#888" keyboardType="numeric"/>
        <TextInput style={styles.input} placeholder="Username:" placeholderTextColor="#888" />
        <TextInput
          style={styles.input}
          placeholder="Password:"
          placeholderTextColor="#BEBEBE"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Re-write Password:"
          placeholderTextColor="#BEBEBE"
          secureTextEntry
        />

      <TouchableOpacity
        style={styles.addSkillsButton}
        onPress={() => navigation.navigate('infoaddPage')}
        activeOpacity={0.5}
      >
        <Text style={styles.buttonText}>Add Skills</Text>
      </TouchableOpacity>
      </View>

      {/* Blue bottom background */}
      <View style={styles.bottomBackground} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
  },
  header: {
    backgroundColor: '#335c71',
    height: 68,
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center',  // Center the items vertically
    justifyContent: 'space-between', // Space between items
    paddingHorizontal: 10,
  },
  titleContainer: {
    flex: 1, // Allow title container to take up available space for left alignment
    alignItems: 'flex-start', // Align main axis to the start (left)
    marginLeft: 30, // Add some margin to the left
  },
  backArrow: {
    fontSize: 20,
    color: "#FFF",
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  formContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    backgroundColor: '#F8E8A2',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
    textAlign: 'center',
  },
  addSkillsButton: {
    backgroundColor: '#FFB343',
    width: '90%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 25,
    marginVertical: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F2F2F',
    textAlign: 'center',
  },
  bottomBackground: {
    backgroundColor: '#335c71',
    height: '8%',
    position: 'relative',
  },
});