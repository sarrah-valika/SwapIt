import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";
import * as DocumentPicker from "expo-document-picker";


export default function AddItemPage() {
  const navigation = useNavigation();
  const [portfolioFileName, setPortfolioFileName] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [imageUri, setImageUri] = useState("");
  const [isSkillsCategoryOpen, setIsSkillsCategoryOpen] = useState(false);
  const [isLearningCategoryOpen, setIsLearningCategoryOpen] = useState(false);
  const [skillsCategory, setSkillsCategory] = useState(null);
  const [LearningCategory, setLearningCategory] = useState(null);
  const categoryItems = [
    { label: "Programming", value: "Programming" },
    { label: "Design", value: "Design" },
    { label: "Marketing", value: "Marketing" },
  ];

  const handleSave = () => {
    if (!name || !description || !category || !condition || !imageUri) {
      alert("Please fill out all fields before saving.");
      return;
    }
    if (description.split(" ").length < 50) {
      alert("Description must be at least 50 words.");
      return;
    }
    alert("Item Uploaded!");
  };

  const handleUploadImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access camera roll is required!");
      return;
    }
    Alert.alert("Upload Image", "Choose an option", [
      {
        text: "Take Photo",
        onPress: async () => {
          const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
          });
          if (!result.canceled) {
            setImageUri(result.assets[0].uri);
          }
        },
      },
      {
        text: "Choose Photo",
        onPress: async () => {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
          });
          if (!result.canceled) {
            setImageUri(result.assets[0].uri);
          }
        },
      },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const removeImage = () => {
    setImageUri("");
  };
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
          <Text style={styles.headerTitle}>Add Skill</Text>
        </View>
        {/* Form Content */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.label}>Skills you have</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your skills"
            value={name}
            onChangeText={setName}
          />
          
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
            listMode="SCROLLVIEW"
          />
          <Text style={styles.label}>Skills you want to Learn</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Skills you want to learn"
            value={description}
            onChangeText={setDescription}
            multiline
          />
          <DropDownPicker
            open={isLearningCategoryOpen}
            value={LearningCategory}
            items={categoryItems}
            setOpen={setIsLearningCategoryOpen}
            setValue={setLearningCategory}
            setItems={() => {}}
            style={styles.dropdown}
            placeholder="Select a category"
            listMode="SCROLLVIEW"
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
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>©️ 2024 MyApp. All rights reserved.</Text>
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
  dropdown: {
    backgroundColor: "#FFF8E1",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 14,
    color: "#CCC",
  },
  dropdownList: {
    backgroundColor: "#FFF8E1",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    marginTop: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
    backgroundColor: "#335c67",
  },
  backArrow: {
    fontSize: 20,
    color: "#FFF",
    marginRight: 10,
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
    color: "#007B7F",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedFileText: {
    fontSize: 14,
    color: "#333",
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007B7F",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#FFF8E1",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: "#FFF8E1",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    marginBottom: 20,
  },
  uploadIcon: {
    width: 50,
    height: 50,
    tintColor: "#007B7F",
  },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  removeButton: {
    position: "absolute",
    top: -10,
    right: -10,
    // backgroundColor: "",
    borderRadius: 15,
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  removeText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#FFB343",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
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
  footerText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
});
