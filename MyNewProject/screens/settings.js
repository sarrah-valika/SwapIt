import React, { useState } from "react";
import {StyleSheet,Text,View,TouchableOpacity,Image,ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SettingsPage() {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);
  const [isSecurityOpen, setSecurityOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <View >
      {/* Sticky Navbar */}
      <View style={styles.navbar}>
        <Image
          source={require("../assets/logo.png")} // Replace with your logo path
          style={styles.logo}
        />
        <Text style={styles.navbarTitle}>SwapIt</Text>
      </View>
       {/* Settings Heading Section */}
       <View style={styles.settingsHeader}>
        <Image
          source={require("../assets/settings.png")} // Replace with your gear logo path
          style={styles.settingsLogo}
        />
        <Text style={styles.settingsTitle}>Settings</Text>
      </View>
      

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACCOUNT INFORMATION</Text>
          <TouchableOpacity
            style={styles.row}
            onPress={() => setNotificationsOpen(!isNotificationsOpen)}
          >
            <Text style={styles.rowText}>Notifications</Text>
            <Text style={styles.arrow}>
              {isNotificationsOpen ? "▲" : "▼"}
            </Text>
          </TouchableOpacity>
          {isNotificationsOpen && (
            <View style={styles.dropdownContent}>
              <Text style={styles.dropdownText}>
                loream dndjjmffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmekofnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.row}
            onPress={() => setPrivacyOpen(!isPrivacyOpen)}
          >
            <Text style={styles.rowText}>Privacy and Data</Text>
            <Text style={styles.arrow}>
              {isPrivacyOpen ? "▲" : "▼"}
            </Text>
          </TouchableOpacity>
          {isPrivacyOpen && (
            <View style={styles.dropdownContent}>
              <Text style={styles.dropdownText}>
                kdjfvncnwjdc reindjciuefnvjk cwenosowaklncbewiojshddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              </Text>
              <Text style={styles.dropdownText}>
                kdjfvncnwjdc reindjciuefnvjk cwenosowaklncbewiojshddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              </Text>
              <Text style={styles.dropdownText}>
                kdjfvncnwjdc reindjciuefnvjk cwenosowaklncbewiojshddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              </Text>
              <Text style={styles.dropdownText}>
                kdjfvncnwjdc reindjciuefnvjk cwenosowaklncbewiojshddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              </Text>
              <Text style={styles.dropdownText}>
                kdjfvncnwjdc reindjciuefnvjk cwenosowaklncbewiojshddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.row}
            onPress={() => setSecurityOpen(!isSecurityOpen)}
          >
            <Text style={styles.rowText}>Security and Logins</Text>
            <Text style={styles.arrow}>
              {isSecurityOpen ? "▲" : "▼"}
            </Text>
          </TouchableOpacity>
          {isSecurityOpen && (
            <View style={styles.dropdownContent}>
              <Text style={styles.dropdownText}>
                Manage security and login options here.
              </Text>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACTIONS</Text>
          <TouchableOpacity
            style={styles.row}
            onPress={() => navigation.navigate("AboutPage")}
          >
            <Text style={styles.rowText}>About</Text>
            <Text style={styles.arrow}>▶</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
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
    // paddingBottom: 70,
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
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  settingsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7E8AF",
    paddingVertical: 5,
    marginTop: 80, // Space between navbar and heading
    borderRadius: 5,
    marginHorizontal: 66,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Shadow for Android
  },
  settingsLogo: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
  settingsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
  },
  scrollContent: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 200,
    borderColor: "#ff",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007B7F",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginBottom: 5,
    elevation: 2,
  },
  rowText: {
    fontSize: 16,
    color: "#333333",
  },
  arrow: {
    fontSize: 16,
    color: "#007B7F",
  },
  dropdownContent: {
    backgroundColor: "#E8F6F7",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  logoutButton: {
    backgroundColor: "#F7E8AF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  logoutText: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    height: 70,
    backgroundColor: "#007B7F",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,  //do this
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
