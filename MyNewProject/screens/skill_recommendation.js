import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SkillRecommendationPage() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [highlightedItem, setHighlightedItem] = useState("");
  const tutors = [
    { name: "Ismail Khan", skills: "React", learn: "Guitar" },
    { name: "Maryam Khan", skills: "ReactNative", learn: "Photoshop" },
    { name: "Malik Khan", skills: "JavaScript", learn: "Photoshop" },
    { name: "Ismail Khan", skills: "React", learn: "Guitar" },
    { name: "Maryam Khan", skills: "ReactNative", learn: "Photoshop" },
    { name: "Malik Khan", skills: "JavaScript", learn: "Photoshop" },
    { name: "Maryam Khan", skills: "ReactNative", learn: "Photoshop" },
  ];
  const skills = [
    {
      name: "ReactNative",
      // icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // Replace with actual image URI
      icon: require("../assets/react.png"),
      color: "#61DBFB",
      description:
        "React Native is a popular React Native is a popular React Native is a popular React Native is a popular React Native is a popular React Native is a popular React Native is a popular open-source framework created by Facebook for building mobile applications using JavaScript and React.React React Native is a popular open-source framework created by Facebook for building mobile applications using JavaScript and React.React React Native is a popular open-source framework created by Facebook for building mobile applications using JavaScript and React.React,React Native is a popular open-source framework created by Facebook for building mobile applications using JavaScript and React.React React Native is a popular open-source framework created by Facebook for building mobile applications using JavaScript and React.React React Native is a popular open-source framework created by Facebook for building mobile applications using JavaScript and React.React",
      requirements: ["JavaScript Fundamentals", "React Basics (components, props, state)"],
      software: ["Node.js (latest version)", "Android Studio", "Xcode"],
    },
    {
      name: "HTML&CSS",
      icon: require("../assets/html.png"), // Replace with actual image URI
      color: "#E34F26",
      description:
        "HTML & CSS are the fundamental building blocks for creating web pages and defining their structure and style.",
      requirements: ["Basic HTML tags", "CSS selectors"],
      software: ["Code Editor (e.g., VSCode)", "Browser Developer Tools"],
    },
];

const getMenuItemStyle = (item) => {
  return highlightedItem === item
    ? { backgroundColor: "yellow",  borderRadius: 5 }
    : {};
};

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => setMenuVisible(true)}
              style={styles.menuIconContainer}
            >
              <Icon name="bars" size={25} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Skill Dashboard</Text>
          </View>


          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search here!"
              placeholderTextColor="#888"
            />
          </View>
          {/* Main Content Area */}
          <View style={styles.contentContainer}>
            {/* Recommended Tutors */}
            <Text style={styles.sectionTitle}>Recommended Tutors For You:</Text>
            <View style={styles.gridContainer}>
                {tutors.map((tutor, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.tutorCard}
                    onPress={() => navigation.navigate("TutorProfilePage", { tutor })}
                  >
                    <Icon name="user-circle" size={50} color="#007B7F" />
                    <View style={{ marginTop: 13 }}>
                    <Text style={styles.tutorSkills}>
                      <Text style={styles.boldText}>Skills:</Text>
                      <Text style={styles.skillName}>{tutor.skills}</Text>
                    </Text>
                    </View>
                    <View > {/* Add space between skills and name */}
                      <Text style={styles.tutorName}>{tutor.name}</Text>
                    </View>
                    <Text style={styles.tutorLearn}>Learn: {tutor.learn}</Text>
                  </TouchableOpacity>
                ))}
              </View>

            {/* Recommended Skills */}
            <Text style={styles.sectionTitle}>Recommended Skills For You:</Text>
            <View style={styles.gridContainer}>
              {skills.map((skill, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.skillCard}
                  onPress={() =>
                    navigation.navigate("SkillDescriptionPage", { skill })
                  }
                >
                  <Image
                    source={skill.icon}
                    style={styles.skillIcon} // Add a style for the image
                  />
                  <Text style={styles.skillName}>{skill.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
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

        {/* Menu Modal */}
        <Modal
          visible={menuVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setMenuVisible(false)}
        >
          <View style={styles.menuOverlay}>
            <View style={styles.menuContainer}>
              <TouchableOpacity
                onPress={() => setMenuVisible(false)} // Close the menu
                style={styles.closeButton}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
              {/* Menu Items */}
              <TouchableOpacity
                onPress={() => navigation.navigate("SettingsPage")}
                onPressIn={() => setHighlightedItem("Settings")}
                onPressOut={() => setHighlightedItem("")}
                style={[styles.menuItem, getMenuItemStyle("Settings")]}
              >
                <Text style={styles.menuItemText}>Settings</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => navigation.navigate("HistoryPage")}
                onPressIn={() => setHighlightedItem("History")}
                onPressOut={() => setHighlightedItem("")}
                style={[styles.menuItem, getMenuItemStyle("History")]}
              >
                <Text style={styles.menuItemText}>History</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("HelpFeedbackPage")}
                onPressIn={() => setHighlightedItem("Help and Feedback")}
                onPressOut={() => setHighlightedItem("")}
                style={[styles.menuItem, getMenuItemStyle("Help and Feedback")]}
              >
                <Text style={styles.menuItemText}>Help and Feedback</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("GetStartedPage")}
                onPressIn={() => setHighlightedItem("Log Out")}
                onPressOut={() => setHighlightedItem("")}
                style={[styles.menuItem, getMenuItemStyle("Log Out")]}
              >
                <Text style={styles.menuItemText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
  },
  header: {
  flexDirection: "row", // Align items horizontally
  alignItems: "center", // Center items vertically
  justifyContent: "flex-start", // Align items to the start (left)
  padding: 15,
  backgroundColor: "#335c67",
},
menuIconContainer: {
  marginRight: 15, // Add some space between the icon and the heading
},
headerTitle: {
  fontSize: 18,
  color: "#FFF",
  fontWeight: "bold",
},
  boldText: {
  fontWeight: "bold",
  fontSize: 15,
},

  backArrow: {
    fontSize: 20,
    color: "#FFF",
    marginRight: 10,
  },
  
  skillIcon: {
  width: 50, // Adjust size as needed
  height: 50,
  marginBottom: 10, // Space between the icon and the skill name
  resizeMode: "contain", // Ensures the image fits within the defined size
},
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 25,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  // footer: {
  //   height: 70,
  //   backgroundColor: "#335c67",
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   alignItems: "center",
  // },
  // footerButton: {
  //   alignItems: "center",
  // },
  // footerIcon: {
  //   width: 30,
  //   height: 30,
  // },
  contentContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  LogoutItem:{
    fontSize: 18,
    color: "#333",
    fontWeight: 'bold',
    marginVertical: 10,
  },
  skillName: {
    fontWeight: "bold", // Make skill names bold
    fontSize: 14, // Match size with "Skills:"
    color: "#333", // Slightly darker color for distinction
  },
  tutorCard: {
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  padding: 30,
  borderRadius: 10,
  width: "46%",
  marginBottom: 20,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
},
tutorSkills: {
  fontSize: 12,
  color: "#555",
  textAlign: "center",
},
tutorName: {
  fontSize: 14,
  fontWeight: "bold",
  color: "#333",
  textAlign: "center",
},
tutorLearn: {
  fontSize: 15,
  color: "#555",
  textAlign: "center",
},

  skillCard: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    width: "46%",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  skillName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
  },
  menuContainer: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    marginTop: 50, // Adjust as needed for better visibility
    marginHorizontal: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 20,
    padding: 5,
  },
  closeText: {
    fontSize: 16,
    color: "#007B7F",
    fontWeight: "bold",
  },
  menuItem: {
    fontSize: 18,
    color: "#333",
    marginVertical: 10,
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
