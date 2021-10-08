import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Alert} from 'react-native';

export const AddTodo = ({onSubmit}) => {

  const [inputValue, setInputValue] = useState('');

  const pressHandler = () => {
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue('');
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
        <Button title='add' style={styles.button} onPress={pressHandler}/>
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
    borderBottomColor: '#3949ab',
    padding: 10
  },
  button: {}
})
