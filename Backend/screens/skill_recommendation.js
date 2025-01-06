import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function SkillRecommendationPage() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [highlightedItem, setHighlightedItem] = useState("");
  const [recommendedTutors, setRecommendedTutors] = useState([]);
  const [recommendedSkills, setRecommendedSkills] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const tutorsResponse = await axios.get('http://192.168.0.109:5000/recommendedTutors');
        if (tutorsResponse.data.status === 'Ok') {
          setRecommendedTutors(tutorsResponse.data.data);
        }

        const skillsResponse = await axios.get('http://192.168.0.109:5000/recommendedSkills');
        if (skillsResponse.data.status === 'Ok') {
          setRecommendedSkills(skillsResponse.data.data);
        }
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);
  const getMenuItemStyle = (item) => {
    return highlightedItem === item
      ? { backgroundColor: "yellow", borderRadius: 5 }
      : {};
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setIsSearching(false);
      setSearchResults([]);
    } else {
      setIsSearching(true);
      const filtered = recommendedTutors.filter((tutor) =>
        tutor["Skills I Have"].toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    }
  };

  const renderTutorCard = (tutor, index) => (
    <TouchableOpacity
      key={index}
      style={styles.tutorCard}
      onPress={() => navigation.navigate('TutorProfilePage', { tutor })}
    >
      <Icon name="user-circle" size={50} color="#007B7F" />
      <View style={{ marginTop: 13 }}>
        <Text style={styles.tutorSkills}>
          <Text style={styles.boldText}>Skills:</Text>
          <Text style={styles.skillName}>{tutor["Skills I Have"]}</Text>
        </Text>
      </View>
      <Text style={styles.tutorName}>{tutor.Name}</Text>
      <Text style={styles.tutorLearn}>Learn: {tutor["Skills I Want"]}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => setMenuVisible(true)}
              style={styles.menuIconContainer}
            >
              <Icon name="bars" size={25} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Skill Dashboard</Text>
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchBar}
              value={searchQuery}
              onChangeText={handleSearch}
              placeholder="Search for Skills..."
              placeholderTextColor="#777"
            />
            <TouchableOpacity style={styles.searchButton}>
              <Image
                source={require("../assets/search.png")}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>
            {!isSearching ? (
              <>
                <Text style={styles.sectionTitle}>Recommended Tutors For You:</Text>
                <View style={styles.gridContainer}>
                  {recommendedTutors.map((tutor, index) => renderTutorCard(tutor, index))}
                </View>

                <Text style={styles.sectionTitle}>Recommended Skills For You:</Text>
                <View style={styles.gridContainer}>
                  {recommendedSkills.map((skill, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.skillCard}
                      onPress={() => navigation.navigate('SkillDescriptionPage', { skill })}
                    >
                      {skill.Image && (
                        <Image
                          source={{ uri: skill.Image }}
                          style={styles.skillImage}
                        />
                      )}
                      <Text style={styles.skillName}>{skill["Skills I Want"]}</Text>
                      <Text style={styles.skillCategory}>
                        Category: {skill["Category (Skills I Want)"]}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            ) : (
              <View style={styles.gridContainer}>
                {searchResults.length > 0 ? (
                  searchResults.map((tutor, index) => renderTutorCard(tutor, index))
                ) : (
                  <Text style={styles.noResults}>No tutors found for this skill</Text>
                )}
              </View>
            )}
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
            onPress={() => navigation.navigate("Myprofile")}
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
                onPress={() => setMenuVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
              {/* Menu Items */}
              <TouchableOpacity
                onPress={() => navigation.navigate("SettingsPage")}
                onPressIn={() => setHighlightedItem("Settings")}
                onPressOut={() => setHighlightedItem("")}
                style={[styles.menuItem, getMenuItemStyle("Settings")]}>
                <Text style={styles.menuItemText}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("HistoryPage")}
                onPressIn={() => setHighlightedItem("History")}
                onPressOut={() => setHighlightedItem("")}
                style={[styles.menuItem, getMenuItemStyle("History")]}>
                <Text style={styles.menuItemText}>History</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("HelpFeedbackPage")}
                onPressIn={() => setHighlightedItem("Help and Feedback")}
                onPressOut={() => setHighlightedItem("")}
                style={[styles.menuItem, getMenuItemStyle("Help and Feedback")]}>
                <Text style={styles.menuItemText}>Help and Feedback</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginPage")}
                onPressIn={() => setHighlightedItem("Log Out")}
                onPressOut={() => setHighlightedItem("")}
                style={[styles.menuItem, getMenuItemStyle("Log Out")]}>
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
  skillImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
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
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#CCC",
  },
  searchButton: {
    marginLeft: 10,
  },
  searchIcon: {
    width: 34,
    height: 34,
    tintColor: "#FFFFF",
  },
  
  contentContainer: {
    padding: 18,
    // flexDirection: 'column',

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
  padding: 15,
  borderRadius: 10,
  width: "100%",
  marginBottom: 12,
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
