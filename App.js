import { useState } from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
// import { StatusBar } from 'expo-status-bar';

import MoodItem from "./components/MoodItem";
import MoodInput from "./components/MoodInput";

export default function App() {
  // Register a new state -> const [message, setMessage] = useState("");
  const [currentMoods, setCurrentMoods] = useState([]);
  const [modalIsVisable, setModalIsVisable] = useState(false);

  // Control modal visible and not-visible
  function startAddMoodHandler() {
    setModalIsVisable(true);
  }

  function endAddMoodHandler() {
    setModalIsVisable(false);
  }

  // When button is clicked action is fired
  function addMoodHandler(enteredMoodText) {
    setCurrentMoods((currentMoods) => [
      ...currentMoods,
      { text: enteredMoodText, id: Math.random().toString() },
    ]);
    endAddMoodHandler();
  }
  // Event listening props are used to connect to above functions

  function deleteMoodHandler(id) {
    console.log("delete");
    setCurrentMoods((currentMoods) => {
      // Call on array, return new array, old array - all items filtered out
      return currentMoods.filter((mood) => mood.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add Mood" color="#040404" onPress={startAddMoodHandler} />
      <MoodInput
        visible={modalIsVisable}
        onAddGoal={addMoodHandler}
        onCancel={endAddMoodHandler}
      />
      <View style={styles.moodsContainer}>
        <Text> All your past moods...</Text>
        <FlatList
          data={currentMoods}
          renderItem={(itemData) => {
            // How to use a custom component (imported above)
            return (
              <MoodItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteMoodHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 40,
    paddingHorizontal: 30,
    flex: 1,
    borderColor: "#AA0000",
    borderWidth: 0,
    backgroundColor: "#d5d5d5",
  },
  moodsContainer: {
    flex: 5,
    padding: 15,
    borderWidth: 0,
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 0,
  },
});
