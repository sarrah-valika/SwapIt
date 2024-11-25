import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";


export default function RecommendationPage() {
  const navigation = useNavigation();
  const recommendations = [
    {
      title: "Harry Potter Deathly Hallows",
      name: "Aqsa Godil",
      category: "Book",
      description:
        "Harry Potter and the Deathly Hallows follows Harry, Ron, and Hermione on their quest to find and destroy Voldemort's Horcruxes while uncovering the mystery of the Deathly Hallows. It’s an epic conclusion to the saga of the Boy Who Lived.",
      image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg", // Replace with a valid image URL
    },
    {
      title: "Casio Scientific Calculator",
      name: "Aliha Zehra",
      category: "Electronics",
      description:
        "The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations. The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations. The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations. The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations. The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations.",
      image: "https://www.shutterstock.com/shutterstock/photos/1044699274/display_1500/stock-photo-bangkok-thailand-march-casio-scientific-calculator-on-march-on-bangkok-thailand-1044699274.jpg", // Replace with a valid image URL
    },
    {
      title: "Casio Scientific Calculator",
      name: "Aliha Zehra",
      category: "Electronics",
      description:
        "The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations. The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations. The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations. The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations. The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations.",
      image: "https://www.shutterstock.com/shutterstock/photos/1044699274/display_1500/stock-photo-bangkok-thailand-march-casio-scientific-calculator-on-march-on-bangkok-thailand-1044699274.jpg", // Replace with a valid image URL
    },
    {
      title: "Casio Scientific Calculator",
      name: "Aliha Zehra",
      category: "Electronics",
      description:
        "The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations. The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations. The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations. The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations. The Casio calculator is a versatile and user-friendly device designed for quick calculations, featuring a range of functions from basic arithmetic to advanced scientific operations.",
      image: "https://www.shutterstock.com/shutterstock/photos/1044699274/display_1500/stock-photo-bangkok-thailand-march-casio-scientific-calculator-on-march-on-bangkok-thailand-1044699274.jpg", // Replace with a valid image URL
    },
    
  ];

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return description;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backArrow}>{"<"}</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Item Dashboard</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("MenuPage")}
              style={styles.menuIconContainer}
            >
              <Icon name="bars" size={25} color="#FFF" />
            </TouchableOpacity>
          </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search for items..."
            placeholderTextColor="#777"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Image
              source={require("../assets/search.png")} // Replace with your search icon path
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Recommendation Header */}
        <View style={styles.recommendationHeader}>
          <Text style={styles.recommendationText}>Recommended Items for you:</Text>
          {/* <TouchableOpacity
            style={styles.plusIconContainer}
            onPress={() => navigation.navigate("AddingItemPage")} // Navigate to the desired page
          >
            <Image
              source={require("../assets/plus.png")} // Replace with your plus icon path
              style={styles.plusIcon}
            />
          </TouchableOpacity> */}
        </View>

        {/* Recommendations */}
        <ScrollView style={styles.scrollContainer}>
          {recommendations.map((item, index) => (
            <View key={index} style={styles.itemCard}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemName}>Owner Name: {item.name}</Text>
                <Text style={styles.itemCategory}>Category: {item.category}</Text>
                <Text style={styles.itemDescription}>
                  {truncateDescription(item.description)}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ItemDescriptionPage", { item })}
                >
                  <Text style={styles.readMore}>Read More</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Sticky Footer */}
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
            onPress={() => navigation.navigate("chatPage")}
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
    marginLeft: 10, 
  },
  
  menuIconContainer: {
    marginLeft: 160,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
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
  plusIconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  plusIcon: {
    width: 20,
    height: 20,
    tintColor: "#007B7F",
  },
  recommendationHeader: {
    marginVertical: 10,
    padding: 7,
    // backgroundColor: "#F7E8AF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  recommendationText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  scrollContainer: {
    flex: 1,
    padding: 10,
    paddingBottom: 80, // Ensure space for the footer
  },
  itemCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007B7F",
  },
  itemCategory: {
    fontSize: 14,
    color: "#555555",
    marginVertical: 5,
    fontWeight: 'bold',
  },
  itemName:{
    fontSize: 14,
    color: "#555555",
    marginTop: 10,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 12,
    color: "#555555",
  },
  readMore: {
    color: "#007B7F",
    fontSize: 14,
    marginTop: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
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
