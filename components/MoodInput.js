import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

// Actual js code related to outputting single mood items
function MoodInput(props) {
  const [enteredMoodText, setEnteredMoodText] = useState("");

  // Fetching user input as they type
  function moodInputHandler(enteredText) {
    setEnteredMoodText(enteredText);
  }

  // Adds input when button clicks

  function addMoodHandler() {
    props.onAddGoal(enteredMoodText);
    // Empties the input on click as well
    setEnteredMoodText("");
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.emojiContainer}>
        <Text style={styles.emoji} onPress={() => handleEmojiClick("😊")}>
          😊
        </Text>
        <Text style={styles.emoji} onPress={() => handleEmojiClick("😢")}>
          😢
        </Text>
        <Text style={styles.emoji} onPress={() => handleEmojiClick("😡")}>
          😡
        </Text>
        <Text style={styles.emoji} onPress={() => handleEmojiClick("😄")}>
          😄
        </Text>
        <Text style={styles.emoji} onPress={() => handleEmojiClick("😭")}>
          😭
        </Text>
        <Text style={styles.emoji} onPress={() => handleEmojiClick("😎")}>
          😎
        </Text>
        <Text style={styles.emoji} onPress={() => handleEmojiClick("🥳")}>
          🥳
        </Text>
        <Text style={styles.emoji} onPress={() => handleEmojiClick("😋")}>
          😋
        </Text>
        <Text style={styles.emoji} onPress={() => handleEmojiClick("😴")}>
          😴
        </Text>
        <Text style={styles.emoji} onPress={() => handleEmojiClick("😅")}>
          😅
        </Text>
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Why do you feel this way?"
          onChangeText={moodInputHandler}
          value={enteredMoodText}
        />
        <Button
          title="Add Mood"
          onPress={addMoodHandler}
          style={styles.button}
        />
      </View>
    </View>
  );
}

export default MoodInput;

// Good practise to keep styles closer to JSX code
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column", // Display components in columns
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#707070",
  },
  textContainer: {
    flexDirection: "row", // Display text input and button in a row
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    marginBottom: 25,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "70%",
    padding: 8,
  },
  button: {
    width: "30%", // Set button width to take up 30% of the row
  },
  emojiContainer: {
    flexDirection: "row", // Display emojis in a row
    justifyContent: "space-between",
    alignItems: "center",
    margin: 25,
  },
  emoji: {
    fontSize: 20,
  },
});
