import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    const newTodo = {
      id: Date.now().toString(),
      title: value
    }
    setTodos([newTodo, ...todos])
  }

  const removeTodo = (id) => {
    setTodos(state => state.filter(item => item.id !== id))
  }

  return (
      <View>
        <Navbar/>
        <View style={styles.container}>
          <AddTodo onSubmit={addTodo}/>
        </View>
        <FlatList
            data={todos}
            renderItem={({item}) => <Todo todo={item} onRemove={removeTodo}/>}
            keyExtractor={item => item.id.toString()}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
