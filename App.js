import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/Main";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(null);

  const addTodo = (value) => {
    const newTodo = {
      id: Date.now().toString(),
      title: value
    }
    setTodos([newTodo, ...todos])
  }

  const removeTodo = (id) => {
    const todo = todos.find(t => t.id === id)
    Alert.alert(
        `Delete ${todo.title}?`,
        "you are sure?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "OK", onPress: () => {
              setTodoId(null)
              setTodos(state => state.filter(item => item.id !== id))
            }
          }
        ]
    );
  }
  const updateTodo = (id, title) => {
    setTodos(state => state.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  let content = (
      <MainScreen todos={todos}
                  onOpen={(id) => setTodoId(id)}
                  addTodo={addTodo}
                  removeTodo={removeTodo}/>
  )

  if (todoId) {
    const todo = todos.find(t => t.id === todoId)
    content = <TodoScreen
        onSave={updateTodo}
        onRemove={removeTodo}
        todo={todo}
        goBack={() => setTodoId(null)}/>
  }

  return (
      <View>
        <Navbar/>
        <View style={styles.container}>
          {content}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
