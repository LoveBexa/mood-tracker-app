import { StyleSheet, Text, View, Pressable } from "react-native";

// Actual js code related to outputting single mood items
function MoodItem(props) {
  return (
    // Built in bind allows pre-configure function for future exec
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
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
    color: "#2e37b4",
  },
  moodItem: {
    borderColor: "#2e37b4",
    borderWidth: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    margin: 2,
    padding: 10,
  },
});
