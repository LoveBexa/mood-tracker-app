import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/thinking-woman.png")}
          style={styles.image}
        />
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
            style={styles.textInputBox}
            placeholder="How do you feel?"
            onChangeText={moodInputHandler}
            value={enteredMoodText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.addMoodButton}>
              <Button
                title="Add Mood"
                onPress={addMoodHandler}
                color="#000000"
              />
            </View>
            <View style={styles.cancelButton}>
              <Button title="Cancel" onPress={props.onCancel} color="#8d7f7f" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default MoodInput;

// Good practise to keep styles closer to JSX code
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column", // column is default anyways
    justifyContent: "center",
    backgroundColor: "#d7d4d0c2",
  },
  image: {
    width: 400,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 3,
    flexDirection: "column", // Display text input and button in a row
    justifyContent: "top",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 0,
    borderColor: "#c82929",
  },
  textInputBox: {
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#FFFFFF",
    width: "100%",
    padding: 8,
    borderRadius: 10,
  },
  emojiContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row", // Display emojis in a row
    borderWidth: 0,
    borderColor: "#000000",
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: "#d3cbcb",
    borderRadius: 15,
  },
  emoji: {
    fontSize: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  addMoodButton: {
    marginHorizontal: 5,
    width: "50%",
  },
  cancelButton: {
    width: "50%",
  },
});
