import { useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

export default function Index() {
  const [contador, setContador] = useState(0);

  function IncrementContador(reset = false) {
    if (reset) {
      setContador(0);
    } else {
      setContador(contador + 1);
    }
  }

  function DecrementContador(reset = false) {
    if (reset) {
      setContador(0);
    } else {
      setContador(contador - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {contador}</Text>

      <Pressable
        onPress={() => IncrementContador(false)}
        onLongPress={() => IncrementContador(true)}  
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#ddd" : "#ccc" },
        ]}
      >
        <Text style={styles.buttonText}>Sumar</Text>
      </Pressable>

      <Pressable
        onPress={() => DecrementContador(false)}
        onLongPress={() => DecrementContador(true)} 
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#ddd" : "#ccc" },
        ]}
      >
        <Text style={styles.buttonText}>Restar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
