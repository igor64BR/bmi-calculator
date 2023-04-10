import Title from "./src/components/title/title"
import Form from "./src/components/form/form"
import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
  },
});
