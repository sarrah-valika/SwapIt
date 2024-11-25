import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MenuPage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Icon name="arrow-left" size={20} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menu</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuItems}>
        <MenuItem icon="user" text="Personal Details" onPress={() => navigation.navigate("PersonalDetails")} />
        <MenuItem icon="users" text="Community" onPress={() => navigation.navigate("Community")} />
        <MenuItem icon="star" text="Premium" onPress={() => navigation.navigate("Premium")} />
        <MenuItem icon="calendar" text="Time Table" onPress={() => navigation.navigate("TimeTable")} />
        <MenuItem icon="history" text="History" onPress={() => navigation.navigate("History")} />
        <MenuItem icon="briefcase" text="Portfolio" onPress={() => navigation.navigate("Portfolio")} />
        <MenuItem icon="graduation-cap" text="Personalised Coaching" onPress={() => navigation.navigate("Coaching")} />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Help and Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const MenuItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Icon name={icon} size={20} color="#333" style={styles.menuIcon} />
    <Text style={styles.menuText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#333",
  },
  menuItems: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    padding: 15,
  },
  footerText: {
    fontSize: 14,
    color: "#007B7F",
    marginBottom: 10,
  },
});
