import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";
import { GlobalStyle } from "../../constants/style";

function ErrorOverLay({message, onConfirm}) {
  return <View style={styles.container}>
    <Text style={[styles.text, styles.title]}>An error occurred!</Text>
    <Text style={styles.text}>{message}</Text>
    <Button onPress={onConfirm} title="Okay"></Button>
  </View>
}

export default ErrorOverLay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyle.colors.primary700
  },
  text: {
    textAlign: 'center',
    marginBottom: 8,
    color: GlobalStyle.colors.primary100
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})