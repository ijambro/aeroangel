import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import { Flight } from "../types/flight";

type Props = {
  flights: Array<Flight>;
};

export default function ({ flights }: Props) {
  console.log("FlightList showing flights", flights);

  return (
    <View style={styles.flightContainer}>
      {flights.map((flight) => (
        <View key={flight.id}>
          <Text
            style={styles.flightText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            {`${flight.from} -> ${flight.to}`}
          </Text>
          <Text
            style={styles.flightText}
            lightColor="rgba(0,0,0,1)"
            darkColor="rgba(255,255,255,0.8)"
          >
            {`${flight.departure}`}
          </Text>
          <Text
            style={styles.flightText}
            lightColor="orange"
            darkColor="rgba(255,255,255,0.8)"
          >
            {`Status: ${flight.status} | ${flight.provider ?? "No provider"}`}
          </Text>

          <View
            style={styles.flightSeparator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  flightText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  flightContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  flightSeparator: {
    marginVertical: 15,
    height: 2,
    width: 200,
  },
});
