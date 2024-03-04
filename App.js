import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

export default function App() {

  // Register a new state -> const [message, setMessage] = useState("");
  const [enteredMoodText, setEnteredMoodText] = useState(''); 
  const [currentMoods, setCurrentMoods] = useState([]);

  // Fetching user input as they type
  function moodInputHandler(enteredText) { 
    setEnteredMoodText(enteredText);
  };
  // When button is clicked action is fired
  function addMoodHandler() { 
    setCurrentMoods((currentMoods) => [...currentMoods, {text: enteredMoodText, key: Math.random().toString()}]);
    console.log(currentMoods)
  };
  // Event listening props are used to connect to above functions 

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="What's your mood?" onChangeText={moodInputHandler} />
        <Button title="Add Mood" onPress={addMoodHandler} />
      </View>
      <View style={styles.moodsContainer}>
      <Text> List of moods...</Text>
      <FlatList data={currentMoods} 
      renderItem={(itemData) => {
        return (
            <View style={styles.moodItem}>
            <Text style={styles.moodText}>{itemData.item.text}</Text>
            </View>
        )
      }}
      keyExtractor={(item, index) => {
        return item.id;
      }} 
      alwaysBounceVertical={false} />


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 40,
    paddingHorizontal: 30,
    flex: 1,
    borderColor: '#AA0000',
    borderWidth: 0,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#707070'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '70%',
    marginRight: 8,
    padding: 8,

  },
  moodsContainer: {
    flex: 5,
    padding: 5,
    borderWidth: 0,
  },
  moodText: {
    color:'white',
  },
  moodItem: {
    borderColor: '#420e21',
    borderWidth: 0,
    backgroundColor: '#b7416c',
    borderRadius: 5,
    margin:2,
    padding:10,
  }
});
