import { useState } from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import FlightList from "../../components/FlightList";
import { Flight, FlightStatus } from "../../types/flight";

export default function TabOneScreen() {
  const [flights, setFlights] = useState<Array<Flight>>([]);

  // const addFlight = () => {
  function addFlight() {
    console.log("Adding flight...");
    const newFlight: Flight = {
      id: Math.trunc(Math.random() * 100000), // Random number from 0 to 100,000
      from: "RDU",
      to: "DCA",
      departure: new Date(),
      provider: "flyExclusive",
      status: FlightStatus.requested,
    };

    setFlights((currentFlights) => [...currentFlights, newFlight]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Flights</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <FlightList flights={flights}></FlightList>

      <Button title="Add Flight" onPress={addFlight} color={"blue"} />
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
    height: 2,
    width: "80%",
  },
});
