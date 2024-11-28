import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

const Myprofile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>{"<"}</Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Profile</Text>
        </View>
        {/* <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Ionicons name="menu" size={32} color="white" />
        </TouchableOpacity> */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Icon name="user-circle" size={70} color="#000" style={styles.profileIcon} />
          <Text style={styles.profileTitle}>My Profile</Text>
          {/* hardcoded */}
          <Text style={styles.profileName}>Ahmed Zohaib</Text>  
          
        </View>

        {/* Input Fields */}
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Age:" placeholderTextColor="#000" />
          <TextInput style={styles.input} placeholder="Email:" placeholderTextColor="#000" />
          <TextInput style={styles.input} placeholder="University:" placeholderTextColor="#000" />
          <TextInput
            style={styles.inputLarge}
            placeholder="Skills You Have:"
            placeholderTextColor="#000"
            numberOfLines={4}
            multiline={true}
          />
          <TextInput
            style={styles.inputLarge}
            placeholder="Skills You Want To Learn:"
            placeholderTextColor="#000"
            numberOfLines={4}
            multiline={true}
          />
          <TextInput style={styles.input} placeholder="Username:" placeholderTextColor="#000" />
          <TextInput
            style={styles.input}
            placeholder="Password:"
            placeholderTextColor="#000"
            secureTextEntry={true}
          />
          <TextInput style={styles.input} placeholder="Availability:" placeholderTextColor="#000" />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      {/* Footer */}
      <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate("SkillRecommendationPage")}
          >
            <Image
              source={require("../assets/skills.png")}
              style={styles.footerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate("RecommendationPage")}
          >
            <Image
              source={require("../assets/items.png")}
              style={styles.footerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate("MessagingPage")}
          >
            <Image
              source={require("../assets/messages.png")}
              style={styles.footerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate("ProfilePage")}
          >
            <Image
              source={require("../assets/profile.png")}
              style={styles.footerIcon}
            />
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    backgroundColor: '#335c71',
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
  },
  backArrow: {
    fontSize: 20,
    color: "#FFF",
    marginRight: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileIcon: {
    marginBottom: 10,
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
    textAlign: 'center',
  },
  profileName: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5,
  },
  form: {
    width: '90%',
    marginTop: 20,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFF99',
    color: '#000',
    fontSize: 16,
  },
  inputLarge: {
    height: 80,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFF99',
    color: '#000',
    fontSize: 16,
    textAlignVertical: 'top',
  },
  saveButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#FFD700',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    alignSelf: 'center',
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  scrollContent: {
    paddingBottom: 100, // Prevent content from overlapping with footer
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#335c71',
    position: 'absolute',
    bottom: 0,
    height: 60,
  },
  footerIcon: {
    width: 30,
    height: 30,
    tintColor: '#FFFFFF',
  },
});

export default Myprofile;