import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsPage from "./screens/settings";
import AboutPage from "./screens/about_swap"; 
import RecommendationPage from "./screens/Item_recommendation"; 
import ItemDescriptionPage from "./screens/item-description";


// export default function App() {
//   // State to hold the counter value
//   const [count, setCount] = useState(0);   

//   // Function to increment the counter
//   const increment = () => setCount(count + 1);

//   // Function to decrement the counter (ensuring it doesn't go below 0)
//   const decrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Display the counter */}
//       <Text style={styles.title}>Counter: {count}</Text>

//       {/* Increment and Decrement Buttons */}
//       <View style={styles.buttonContainer}>
//         <Button title="Increment" onPress={increment} />
//         <Button title="Decrement" onPress={decrement} />
//       </View>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// // Styles for the app
// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // Fills the entire screen
//     backgroundColor: "#fff",
//     alignItems: "center", // Center horizontally
//     justifyContent: "center", // Center vertically
//   },
//   title: {
//     fontSize: 32, // Large font for visibility
//     marginBottom: 20, // Space between the counter and buttons
//   },
//   buttonContainer: {
//     flexDirection: "row", // Buttons aligned horizontally
//     justifyContent: "space-between",
//     width: "60%", // Width of the button container
//   },
// });

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SettingsPage">
        <Stack.Screen name="SettingsPage" component={SettingsPage} options={{ headerShown: false }} />
        <Stack.Screen name="AboutPage" component={AboutPage} options={{ headerShown: false }}/>
        <Stack.Screen name="RecommendationPage" component={RecommendationPage} options={{ headerShown: false }} />
        <Stack.Screen name="ItemDescriptionPage" component={ItemDescriptionPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

