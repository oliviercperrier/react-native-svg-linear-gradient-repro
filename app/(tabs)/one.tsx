import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import Chip from "@/components/Chip";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 50,
          borderWidth: 2,
          alignItems: "center",
          gap: 24
        }}
      >
        <Text>SVG is here:</Text>
        <Chip />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
