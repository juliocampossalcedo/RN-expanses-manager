import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyle } from "../../constants/style";

function Input({label, invalid, style, textInputConfig}) {

  const inputStyles = [styles.input];

  if(textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline)
  }

  if(invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel ]}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer:  {
    marginHorizontal: 4,
    marginVertical: 16
  },
  label: {
    fontSize: 12,
    color: GlobalStyle.colors.primary100,
    marginBottom: 4
  },
  input: {
    backgroundColor: GlobalStyle.colors.primary100,
    color: GlobalStyle.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  invalidLabel: {
    color: GlobalStyle.colors.error500
  },
  invalidInput: {
    backgroundColor: GlobalStyle.colors.error50
  }
});
