import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyle } from "../../constants/style";

function LoadingOverLay() {
  return <View style={styles.container}>
    <ActivityIndicator size="large" color="white"/>
  </View>
}

export default LoadingOverLay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyle.colors.primary700
  }
})