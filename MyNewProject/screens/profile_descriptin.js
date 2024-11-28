import React from "react";
import { StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView, } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TutorProfilePage({ route, navigation }) {
  const { tutor } = route.params; // Receive the tutor object passed during navigation

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>{"<"}</Text>
          </TouchableOpacity>
          {/* <Text style={styles.headerTitle}>Skill Dashboard</Text> */}
          <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchIconContainer}>
            <Image
              source={require("../assets/search.png")}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.searchBar}
            placeholder="Search here!"
            placeholderTextColor="#888"
          />
        </View>
        </View>

        {/* Search Bar */}
        {/* <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchIconContainer}>
            <Image
              source={require("../assets/search.png")}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.searchBar}
            placeholder="Search here!"
            placeholderTextColor="#888"
          />
        </View> */}

      <View style={styles.profileContainer}>
        <Icon name="user-circle" size={100} color="#007B7F" />
        <Text style={styles.tutorName}>{tutor.name}</Text>
        <Text style={styles.tutorDetails}>Habib University</Text>
        <Text style={styles.tutorDetails}>Availability: Friday, Saturday</Text>
        <View style={styles.rating}>
          {/* <Text>★★★★★</Text> */}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Skills:</Text>
        {tutor.skills.split(", ").map((skill, index) => (
          <Text key={index} style={styles.skillItem}>
            • {skill}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Looking to Learn:</Text>
        {tutor.learn.split(", ").map((learnItem, index) => (
          <Text key={index} style={styles.skillItem}>
            • {learnItem}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reviews:</Text>
        <Text style={styles.reviewItem}>1. Good teacher. Very helpful.</Text>
        <Text style={styles.reviewItem}>2. Very punctual.</Text>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity 
              style={styles.InterestedButton}
              onPress={() => navigation.navigate("searchmessagingPage")}
            >
              <Text style={styles.buttonText}>Interested</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.notInterestedButton}
              onPress={() => navigation.navigate("SkillRecommendationPage")}
            >
              <Text style={styles.buttonText}>Not Interested</Text>
            </TouchableOpacity>
      </View>
    </ScrollView>
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
            onPress={() => navigation.navigate("")}
          >
            <Image
              source={require("../assets/messages.png")}
              style={styles.footerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate("Myprofile")}
          >
            <Image
              source={require("../assets/profile.png")}
              style={styles.footerIcon}
            />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1", // Light yellow background
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#335c67", // Gold color
  },
  backArrow: {
    fontSize: 23,
    color: "#FFF",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 21,
    marginTop: 2,
    padding: 7,
    backgroundColor: "#FFF",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIconContainer: {
    paddingHorizontal: 5,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "#888",
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    color: "#333",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  profileContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  tutorName: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
  tutorDetails: {
    fontSize: 16,
    color: "#555",
  },
  rating: {
    marginVertical: 10,
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  skillItem: {
    fontSize: 16,
    marginBottom: 3,
  },
  reviewItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  InterestedButton: {
    backgroundColor: "#007B7F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  notInterestedButton: {
    backgroundColor: "#FFB343",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  footer: {
    height: 70,
    backgroundColor: "#335c67",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerButton: {
    alignItems: "center",
  },
  footerIcon: {
    width: 30,
    height: 30,
    tintColor: "#FFFFFF",
  },
});
