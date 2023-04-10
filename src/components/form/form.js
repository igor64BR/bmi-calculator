import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./style";

export default function Form() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [buttonTitle, setButtonTitle] = useState("Calculate");
  const [imcMessage, setImcMessage] = useState("Insert your infos");

  const calculateIMC = () => {
    const imc = (weight / (height * height)).toFixed(2);

    setButtonTitle("Calculate Again");
    setImcMessage(`Your IMC is ${imc}. You are ${getImcStat(imc)}`);
    setHeight("");
    setWeight("");
  };

  return (
    <View style={styles.formBox}>
      <View style={styles.inputBox}>
        <Text>Height:</Text>
        <TextInput
          onChangeText={(value) => setHeight(value)}
          value={height}
          style={styles.input}
          placeholder="E.g.: 1.75"
          keyboardType="numeric"
        />

        <Text>Weight:</Text>
        <TextInput
          onChangeText={(value) => setWeight(value)}
          value={weight}
          style={styles.input}
          placeholder="E.g.: 85.55"
          keyboardType="numeric"
        />

        <Button title={buttonTitle} onPress={calculateIMC} />
      </View>
      <Text style={styles.message}>{imcMessage}</Text>
    </View>
  );
}

/**
 * @param {number} imc
 * @returns {string}
 */
const getImcStat = (imc) => {
  const bmiStat = {
    underweight: imc < 18.5,
    healthy: imc >= 18.5 && imc < 25,
    overweight: imc >= 25 && imc < 30,
    obese: imc >= 30,
  };

  return Object.keys(bmiStat).find((key) => bmiStat[key]);
};
