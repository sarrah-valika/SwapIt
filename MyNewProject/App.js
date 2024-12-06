import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
<<<<<<< Updated upstream
import React, { useState } from 'react';

export default function App() {
  // State to hold the counter value
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => setCount(count + 1);
  
  // Function to decrement the counter (ensuring it doesn't go below 0)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
      </View>
      <StatusBar style="auto" />
    </View>
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsPage from "./screens/settings";
import AboutPage from "./screens/about_swap"; 
import RecommendationPage from "./screens/Item_recommendation"; 
import ItemDescriptionPage from "./screens/item-description";
import SkillRecommendationPage from "./screens/skill_recommendation";
import TutorProfilePage from './screens/profile_descriptin';
import SkillDescriptionPage from './screens/skill-description';
import SkillMatchingPage from './screens/skill-matching';
import AddItemPage from './screens/add_item';
import HistoryPage from './screens/history';
import UserReviewPage from './screens/User_review';
import GetStartedPage from './screens/main_screen';
import LoginPage from './screens/login';
import CreateAccountPage from './screens/sign-up';
import infoaddPage from './screens/sign-infoadd';
import Editprofile from './screens/edit_profile';
import Myprofile from './screens/my_profile';


const Stack = createStackNavigator();
    const API_URL = 'http://10.20.5.175:5000';; // Update this to your actual server URL

    export default function App() {
      const [loading, setLoading] = useState(true); // State for loading
    const [responseMessage, setResponseMessage] = useState(''); // State for response message
    // Function to call the API
    const testApiConnection = async () => {
    try {
    const response = await axios.get(`${API_URL}/api/test`); // Call the test API
    setResponseMessage(response.data.message); // Set the response message
    setLoading(false); // Update loading state
    } catch (error) {
    console.error('Error connecting to the API:', error);
    setResponseMessage('Error connecting to the API'); // Set error message
    setLoading(false); // Update loading state
    }
    };
    // Use effect to test API on component mount
    useEffect(() => {
    testApiConnection(); // Call the test API function
    }, []);

  return (
    <NavigationContainer>
      {loading ? ( // Show loading state
        <View>
        <Text>Loading...</Text> {/* This can be placed with a loading spinner if desired */}
        </View>
        ) : (
      <Stack.Navigator initialRouteName="GetStartedPage">
        <Stack.Screen name="GetStartedPage" component={GetStartedPage} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccountPage" component={CreateAccountPage} options={{ headerShown: false }} />
        <Stack.Screen name="infoaddPage" component={infoaddPage} options={{ headerShown: false }} />
        <Stack.Screen name="Myprofile" component={Myprofile} options={{ headerShown: false }} />
        <Stack.Screen name="Editprofile" component={Editprofile} options={{ headerShown: false }} />
        <Stack.Screen name="RecommendationPage" component={RecommendationPage} options={{ headerShown: false }} />
        <Stack.Screen name="ItemDescriptionPage" component={ItemDescriptionPage} options={{ headerShown: false }} />
        <Stack.Screen name="SkillRecommendationPage" component={SkillRecommendationPage} options={{ headerShown: false }} />
        <Stack.Screen name="TutorProfilePage" component={TutorProfilePage} options={{ headerShown: false }} />
        <Stack.Screen name="SkillDescriptionPage" component={SkillDescriptionPage} options={{ headerShown: false }} />
        <Stack.Screen name="SkillMatchingPage" component={SkillMatchingPage} options={{ headerShown: false }} />
        <Stack.Screen name="SettingsPage" component={SettingsPage} options={{ headerShown: false }} />
        <Stack.Screen name="AboutPage" component={AboutPage} options={{ headerShown: false }}/>
        <Stack.Screen name="AddItemPage" component={AddItemPage} options={{ headerShown: false }} />
        <Stack.Screen name="HistoryPage" component={HistoryPage} options={{ headerShown: false }} />
        <Stack.Screen name="UserReviewPage" component={UserReviewPage} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    )}
    {/* display message  */}
    <Text>{responseMessage}</Text>  
    </NavigationContainer>
>>>>>>> Stashed changes
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
