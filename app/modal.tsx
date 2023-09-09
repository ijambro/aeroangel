import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About AeroAngel</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <View>
        <Text style={styles.normalText}>
          👼 AeroAngel is a non-profit that coordinates life-saving flights for
          children needing distant medical treatment.
        </Text>

        <Text style={styles.normalText}>
          🛫 flyExclusive is a North Carolina-based airline for private and
          charter jets.
        </Text>

        <Text style={styles.normalText}>
          📲 I'm creating this React Native App for HackDuke 2023 to help
          AeroAngel coordinate flight requests with flyExclusive and other
          charter jet providers.
        </Text>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
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
  normalText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
