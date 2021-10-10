import React, {useState} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity, Modal, Button, Alert} from 'react-native';
import {THEME} from "../theme";
import {AppButton} from "./ui/AppButton";

export const EditModal = ({visible, onCancel, value, onSave}) => {
  const [title, setTitle] = useState(value);
  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert('minimum 3 symbol')
    } else {
      onSave(title)
    }
  }
  return (
      <Modal
          animationType="slide"
          transparent={false}
          visible={visible}>
        <View style={styles.wrapper}>
          <TextInput
              value={title}
              onChangeText={setTitle}
              placeholder='send text'
              maxLength={64}
              style={styles.input}/>
          <View style={styles.buttons}>
            <AppButton
                color={THEME.DANGER_COLOR}
                onPress={onCancel}>cancel</AppButton>
            <AppButton
                onPress={saveHandler}
            >save</AppButton>
          </View>
        </View>
      </Modal>
  );
};


const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%'
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  }

})
