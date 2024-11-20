import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function ItemDescriptionPage({ route }) {
  const navigation = useNavigation();
  const { item } = route.params; // Retrieve the item data

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require("../assets/logo.png")} // Replace with your logo path
            style={styles.logo}
          />
          <Text style={styles.title}>SwapIt</Text>
        </View>

        {/* Content inside a ScrollView */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemCategory}>Category: {item.category}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </ScrollView>

        {/* Sticky Footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate("swap-Page")}
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
            onPress={() => navigation.navigate("chatPage")}
          >
            <Image
              source={require("../assets/messages.png")}
              style={styles.footerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate("SettingsPage")}
          >
            <Image
              source={require("../assets/settings.png")}
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    height: 60,
    backgroundColor: "#007B7F",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  logo: {
    width: 70,
    height: 70,
    position: "absolute",
    left: 18,
    top: 2,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  scrollContent: {
    padding: 20,
  },
  itemImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007B7F",
    marginBottom: 10,
  },
  itemCategory: {
    fontSize: 18,
    color: "#555555",
    marginBottom: 10,
  },
  itemDescription: {
    fontSize: 16,
    color: "#333333",
    lineHeight: 24,
  },
  footer: {
    height: 70,
    backgroundColor: "#007B7F",
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
