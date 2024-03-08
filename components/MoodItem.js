import { StyleSheet, Text, View, Pressable } from "react-native";

// Actual js code related to outputting single mood  items
function MoodItem(props) {
  return (
    // Built in bind allows pre-configure function for future exec
    <Pressable
      android_ripple={{ color: "#cc259c" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.moodItem}>
        <Text style={styles.moodText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default MoodItem;

// Good practise to keep styles closer to JSX code
const styles = StyleSheet.create({
  moodText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  moodItem: {
    borderColor: "#2e37b4",
    backgroundColor: "#a47e7e",
    borderWidth: 0,
    borderRadius: 5,
    padding: 15,
    marginVertical: 2,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
