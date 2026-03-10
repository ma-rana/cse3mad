import { Button, StyleSheet, View } from "react-native";
import "../global.css";

export default function HomeScreen() {
  return (
    <>
      <View style={styles.containerColumn}>
        <View style={styles.containerRow}>
          <Button
            title="Click me"
            style={styles.btnStyle}
            onPress={() => alert("Stop Pressing my button.")}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  containerColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 40,
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 40,
  },
  butStyle: {
    backgroundColor: "red",
  },
});
