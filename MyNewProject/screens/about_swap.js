import React from "react";
import {StyleSheet,Text,View,ScrollView,TouchableOpacity,Image} from "react-native";
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";





export default function AboutPage({ email = "SwapIt@gmail.com" }) {
  const navigation = useNavigation();
  const constantFromEmail = "aag11003@gmail.com"; // Constant "From" email

  const handleEmailPress = async () => {
    const subject = "Inquiry from SwapIt";
    const body = "Hello, I have a question about SwapIt.\n\n\n\nRegards Team SwapIt.";
    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      body
    )}&reply-to=${encodeURIComponent(constantFromEmail)}`;

    try {
      const supported = await Linking.canOpenURL(mailto);
      if (supported) {
        await Linking.openURL(mailto);
      } else {
        console.error("Email client is not supported on this device.");
      }
    } catch (error) {
      console.error("Failed to open email client. Error:", error);
    }
  };
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      {/* Sticky Navbar */}
      <View style={styles.navbar}>
        <Image
          source={require("../assets/logo.png")} // Replace with your logo
          style={styles.logo}
        />
        <Text style={styles.navbarTitle}>SwapIt</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* About Heading */}
        <View style={styles.headingContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image
              source={require("../assets/back-button.png")} // Replace with your back arrow icon path
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headingText}>About</Text>
        </View>

        {/* About Section */}
        <View style={styles.aboutSection}>
          <Text style={styles.description}>
            SwapIt is an innovative mobile platform tailored for university
            students, aiming to address financial and accessibility challenges
            in skill acquisition and resource sharing.
          </Text>
        </View>

        {/* Additional Sections */}
        <View style={styles.keyFeaturesSection}>
          <Text style={styles.subtitle}>Key Features</Text>
          <Text style={styles.feature}>➤ Skill Exchange</Text>
          <Text style={styles.feature}>➤ Item Bartering</Text>
          <Text style={styles.feature}>➤ Campus Based Community</Text>
          <Text style={styles.feature}>➤ Real-Time Chat</Text>
          <Text style={styles.feature}>➤ Personalized Recommendation</Text>
        </View>

        <View style={styles.purposeSection}>
          <Text style={styles.subtitle}>Purpose</Text>
          <Text style={styles.feature}>➤ Promote Resource Sharing</Text>
          <Text style={styles.feature}>➤ Create a Trusted Community</Text>
          <Text style={styles.feature}>➤ Reduce Financial Barriers</Text>
        </View>

        <TouchableOpacity style={styles.contactButton} onPress={handleEmailPress}>
          <Text style={styles.contactText}>Contact Us</Text>
          <Text style={styles.email}>{email}</Text>
          <Text style={styles.contactDetails}>Karachi, Pakistan</Text>
        </TouchableOpacity>
      </ScrollView>


      {/* Sticky Footer with 5 Icons */}
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
            source={require("../assets/items.png")} // Replace with favorites icon path
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
           onPress={() => navigation.navigate("chatPage")}
        >
          <Image
            source={require("../assets/messages.png")} // Replace with swap icon path
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
           onPress={() => navigation.navigate("SettingsPage")}
        >
          <Image
            source={require("../assets/settings.png")} // Replace with profile icon path
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
           onPress={() => navigation.navigate("ProfilePage")}
        >
          <Image
            source={require("../assets/profile.png")} // Replace with settings icon path
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
    backgroundColor: "#F5F5F5",
  },
  navbar: {
    height: 60,
    backgroundColor: "#007B7F",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    paddingHorizontal: 15,
  },
  logo: {
    width: 70,
    height: 70,
    position: "absolute",
    left: 18,
    top: 2,
  },
  navbarTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  scrollContent: {
    paddingTop: 80,
    paddingBottom: 100,
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 3, // Adjust based on your header position
    right: 227, // Adjust to match the spacing
    width: 35,
    height: 35,
    backgroundColor: "#FFF", // White background
    borderRadius: 20, // Circular button
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Shadow for Android
  },
  backIcon: {
    width: 15,
    height: 15,
    tintColor: "#007B7F", // Adjust to your app's theme color
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    paddingVertical: 8,
    marginHorizontal: 66,
    marginTop: 2,
    backgroundColor: "#F7E8AF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 3,
  },
  headingIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headingText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
  },
  aboutSection: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  description: {
    fontSize: 16,
    color: "#333333",
    lineHeight: 22,
  },
  keyFeaturesSection: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007B7F",
    marginBottom: 10,
  },
  feature: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 5,
  },
  purposeSection: {
    marginBottom: 20,
  },
  contactButton: {
    backgroundColor: "#007B7F",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  email: {
    textDecorationLine: "underline",
    color: "#FFFFFF", // Email color
    fontSize: 16,
  },
  contactText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  contactDetails: {
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: 5,
  },
  footer: {
    height: 70,
    backgroundColor: "#007B7F",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    top: 727,
    left: 0,
    right: 0,
  },
  footerButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcon: {
    width: 30,
    height: 30,
    tintColor: "#FFFFFF",
  },
});
