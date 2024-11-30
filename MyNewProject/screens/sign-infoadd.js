import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as DocumentPicker from "expo-document-picker";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";

export default function infoaddPage() {
  const navigation = useNavigation();

  const [portfolioFileName, setPortfolioFileName] = useState("");
  // const [dropdown1Visible, setDropdown1Visible] = useState(false);
  // const [dropdown2Visible, setDropdown2Visible] = useState(false);
  // const [selectedCategory1, setSelectedCategory1] = useState("");
  // const [selectedCategory2, setSelectedCategory2] = useState("");
  const [isSkillsCategoryOpen, setIsSkillsCategoryOpen] = useState(false);
  const [isLearningCategoryOpen, setIsLearningCategoryOpen] = useState(false);
  const [skillsCategory, setSkillsCategory] = useState(null);
  const [learningCategory, setLearningCategory] = useState(null);

  // Dropdown items
  const categoryItems = [
    { label: "Programming", value: "Programming" },
    { label: "Design", value: "Design" },
    { label: "Marketing", value: "Marketing" },
  ];
  

  const handlePortfolioSelect = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf", // Limit to PDF files
      });

      if (result.type === "success") {
        setPortfolioFileName(result.name); // Store file name
      } else {
        Alert.alert("Cancelled", "File selection was cancelled.");
      }
    } catch (err) {
      Alert.alert("Error", "Failed to pick a file: " + err.message);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Skills</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.label}>Skills You Have:</Text>
          <TextInput style={styles.input} placeholder="Enter your skills" multiline />

          <Text style={styles.label}>Category:</Text>
          <DropDownPicker
            open={isSkillsCategoryOpen}
            value={skillsCategory}
            items={categoryItems}
            setOpen={setIsSkillsCategoryOpen}
            setValue={setSkillsCategory}
            setItems={() => {}}
            style={styles.dropdown}
            placeholder="Select a category"
          />
          

          <Text style={styles.label}>Skills You Want to Learn:</Text>
          <TextInput style={styles.input} placeholder="Enter skills you want to learn" multiline />

          <Text style={styles.label}>Category:</Text>
          <DropDownPicker
            open={isLearningCategoryOpen}
            value={learningCategory}
            items={categoryItems}
            setOpen={setIsLearningCategoryOpen}
            setValue={setLearningCategory}
            setItems={() => {}}
            style={styles.dropdown}
            placeholder="Select a category"
          />

          <View style={styles.portfolioContainer}>
            <TouchableOpacity
              onPress={handlePortfolioSelect}
              style={styles.uploadButton}
            >
              <Text style={styles.uploadButtonText}>Select PDF</Text>
            </TouchableOpacity>
            {portfolioFileName ? (
              <Text style={styles.selectedFileText}>Selected File: {portfolioFileName}</Text>
            ) : null}
          </View>
        </ScrollView>

        {/* Footer
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
        </View> */}
        {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 MyApp. All rights reserved.</Text>
      </View>
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
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#335c67",
  },
  dropdown: {
    marginBottom: 20,
    borderRadius: 5,
    borderColor: "#CCC",
    height: 50,
  },
  backArrow: {
    fontSize: 20,
    color: "#FFF",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  scrollContent: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 200,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007B7F",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 14,
    color: "#333",
  },
  dropdown: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 14,
    color: "#333",
  },
  dropdownList: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    marginTop: 5,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  dropdownItemText: {
    fontSize: 14,
    color: "#333",
  },
  portfolioContainer: {
    marginTop: 20,
  },
  uploadButton: {
    backgroundColor: "#FFB343",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  uploadButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedFileText: {
    fontSize: 14,
    color: "#333",
    marginTop: 10,
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
  footerText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
});
