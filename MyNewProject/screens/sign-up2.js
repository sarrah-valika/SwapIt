import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

export default function infoaddPage({ navigation }) {
  const [portfolioFileName, setPortfolioFileName] = useState('');

  const handlePortfolioSelect = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf', // Limit to PDF files
      });

      if (result.type === 'success') {
        setPortfolioFileName(result.name); // Store file name
      } else {
        Alert.alert('Cancelled', 'File selection was cancelled.');
      }
    } catch (err) {
      Alert.alert('Error', 'Failed to pick a file: ' + err.message);
    }
  };

  const handleSubmit = () => {
    if (!portfolioFileName) {
      Alert.alert('Error', 'Please select a PDF file for your portfolio.');
      return;
    }
    console.log('Uploading file:', portfolioFileName);
    navigation.navigate('itemreview');
  };

  return (
    <View style={styles.container}>
      {/* Top Blue Header with Images */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>{"<"}</Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Skills Details</Text>
        </View>
        {/* <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Ionicons name="menu" size={32} color="white" />
        </TouchableOpacity> */}
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Skills You Have:"
          placeholderTextColor="#BEBEBE"
        />
        <TextInput
          style={styles.input}
          placeholder="Skills You Want To Learn:"
          placeholderTextColor="#BEBEBE"
        />
        <View style={styles.portfolioContainer}>
          <TouchableOpacity onPress={handlePortfolioSelect} style={styles.portfolioButton}>
            <Text style={styles.portfolioButtonText}>Select Portfolio (PDF)</Text>
          </TouchableOpacity>
          {portfolioFileName ? <Text>Selected File: {portfolioFileName}</Text> : null}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign-Up</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Blue Background */}
      <View style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
    alignSelf: 'center',
    backgroundColor: '#e09f3e',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  input: {
    backgroundColor: '#FFFFE0', // Pale yellow
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  button: {
    backgroundColor: '#fcae1e', // Golden yellow
    paddingVertical: 12,
    borderRadius: 22,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000', 
  },
  footer: {
    backgroundColor: '#335c71',
    height: '8%',
    position: 'relative',
  },
  portfolioContainer: {
    marginBottom: 20,
  },
  portfolioButton: {
    backgroundColor: '#FFFFE0',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  portfolioButtonText: {
    fontSize: 16,
  },
});