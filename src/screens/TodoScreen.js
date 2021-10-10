import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React, {useState} from 'react';
import {THEME} from "../theme";
import {AppCard} from "../components/ui/Card";
import {EditModal} from "../components/editModal";

export const TodoScreen = ({goBack, todo, onRemove, onSave}) => {

  const [modal, setModal] = useState(false);

  const saveHandler = (title) => {
    onSave(todo.id, title);
    setModal(false)
  }

  return (
      <View>
        <EditModal
            onSave={saveHandler}
            value={todo.title}
            visible={modal}
            onCancel={() => setModal(false)}/>
        <AppCard style={styles.card}>
          <Text style={styles.title}>{todo.title}</Text>
          <Button
              onPress={() => setModal(true)}
              title='edit'/>
        </AppCard>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title='back'
                    color={THEME.GREY_COLOR}
                    onPress={goBack}/>
          </View>
          <View style={styles.button}>
            <Button title='delete'

                    color={THEME.DANGER_COLOR}
                    onPress={() => onRemove(todo.id)}/>
          </View>
        </View>
      </View>
  );
};


const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    marginBottom: 20,
    padding: 15
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20
  }
})
