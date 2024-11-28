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
import { Picker } from "@react-native-picker/picker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export default function AddItemPage() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [imageUri, setImageUri] = useState("");

  const handleSave = () => {
    if (!name || !description || !category || !condition || !imageUri) {
      alert("Please fill out all fields before saving.");
      return;
    }

    if (description.split(" ").length < 50) {
      alert("Description must be at least 50 words.");
      return;
    }

    // If all fields are filled, proceed to save
    alert("Item Uploaded!");
  };

  const handleUploadImage = () => {
    console.log("done");
    Alert.alert("Upload Image", "Choose an option", [
      {
        text: "Take Photo",
        onPress: () => {
          launchCamera(
            {
              mediaType: "photo",
              saveToPhotos: true,
            },
            (response) => {
              if (response.didCancel) {
                console.log("User canceled image picker");
              } else if (response.errorMessage) {
                console.error("Image picker error:", response.errorMessage);
              } else {
                setImageUri(response.assets[0].uri);
              }
            }
          );
        },
      },
      {
        text: "Choose Photo",
        onPress: () => {
          launchImageLibrary(
            {
              mediaType: "photo",
            },
            (response) => {
              if (response.didCancel) {
                console.log("User canceled image picker");
              } else if (response.errorMessage) {
                console.error("Image picker error:", response.errorMessage);
              } else {
                setImageUri(response.assets[0].uri);
              }
            }
          );
        },
      },
      {
        text: "Cancel",
        style: "cancel",
      },
      
      
    ]);
    console.log("finish");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Items</Text>
        </View>

        {/* Form Content */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter item name"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Item Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter item description (Minimum 50 words)"
            value={description}
            onChangeText={setDescription}
            multiline
          />

          <Text style={styles.label}>Category</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select a category" value="" />
              <Picker.Item label="Electronics" value="Electronics" />
              <Picker.Item label="Books" value="Books" />
              <Picker.Item label="Clothing" value="Clothing" />
              <Picker.Item label="Furniture" value="Furniture" />
              <Picker.Item label="Others" value="Others" />
            </Picker>
          </View>

          <Text style={styles.label}>Condition</Text>
          <TextInput
            style={styles.input}
            placeholder="NA/10"
            value={condition}
            onChangeText={setCondition}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Upload Image</Text>
          <TouchableOpacity style={styles.uploadButton} onPress={handleUploadImage}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.uploadedImage} />
            ) : (
              <Image
                source={require("../assets/upload.png")} // Replace with your asset path
                style={styles.uploadIcon}
              />
            )}
          </TouchableOpacity>
        </ScrollView>

        {/* Save Button */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
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
    justifyContent: "flex-start",
    padding: 15,
    backgroundColor: "#335c67",
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "#FFF8E1",
  },
  picker: {
    height: 50,
    width: "100%",
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
  footer: {
    padding: 15,
    backgroundColor: "#FFF8E1",
    borderTopWidth: 1,
    borderColor: "#CCC",
  },
  saveButton: {
    backgroundColor: "#FFB343",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
