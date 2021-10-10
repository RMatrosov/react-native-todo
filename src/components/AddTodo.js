import React, {useState} from 'react';
import {AntDesign} from '@expo/vector-icons'
import {StyleSheet, TextInput, View, Alert, Keyboard} from 'react-native';
import {THEME} from "../theme";

export const AddTodo = ({onSubmit}) => {

  const [inputValue, setInputValue] = useState('');

  const pressHandler = () => {
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue('');
      Keyboard.dismiss()
    } else {
      Alert.alert('Not valid value')
    }
  }

  return (
      <View style={styles.block}>
        <TextInput style={styles.textInput}
                   onChangeText={text => setInputValue(text)}
                   value={inputValue}
                   placeholder='Write something...'
                   autoCorrect={false}
                   autoCapitalize='none'
            /*keyboardType='number-pad'*/
        />
        <AntDesign.Button
            name='pluscircleo'
            onPress={pressHandler}>
          add
        </AntDesign.Button>
        {/*<Button title='add' style={styles.button} onPress={pressHandler}/>*/}
      </View>
  );
};


const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  textInput: {
    width: '70%',
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
    padding: 10
  },
  button: {}
})
