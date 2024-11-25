import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function SkillDescriptionPage({ route }) {
  const { skill } = route.params; // Get the skill data from the route parameters
  const navigation = useNavigation(); // Added navigation to enable goBack()

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backArrow}>{"<"}</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Skill Description</Text>
            </View>

            {/* Skill Icon */}
            <View style={styles.imageContainer}>
              {typeof skill.icon === "number" ? ( // Check if the icon is a local asset
                <Image source={skill.icon} style={styles.skillIcon} />
              ) : (
                <Image source={{ uri: skill.icon }} style={styles.skillIcon} />
              )}
            </View>

            {/* Skill Description */}
            <View style={styles.descriptionContainer}>
              <Text style={styles.heading}>Skill Name:</Text>
              <Text style={styles.description}>{skill.name}</Text>

              <Text style={styles.heading}>Skill Description:</Text>
              <Text style={styles.description}>{skill.description}</Text>

              <Text style={styles.heading}>Basic Requirements:</Text>
              {skill.requirements.map((requirement, index) => (
                <Text style={styles.description} key={index}>
                  - {requirement}
                </Text>
              ))}

              <Text style={styles.heading}>Software Requirements:</Text>
              {skill.software.map((software, index) => (
                <Text style={styles.description} key={index}>
                  - {software}
                </Text>
              ))}
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.interestedButton}
                onPress={() =>
                  navigation.navigate("SkillMatchingPage", {
                    skill: skill.name,
                  })
                }
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1", // Light yellow background
  },
  wrapper: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80, // Ensure space for the footer
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#335c67", // Darker shade for the header
  },
  backArrow: {
    fontSize: 23,
    color: "#FFF",
    marginRight: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  skillIcon: {
    width: 230,
    height: 200,
  },
  descriptionContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#335c67",
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 15,
    backgroundColor: "#FFF8E1",
  },
  interestedButton: {
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
    top: 727,// make it dynamic
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
