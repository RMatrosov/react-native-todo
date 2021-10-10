import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import {StyleSheet, View, Alert} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/Main";
import {TodoScreen} from "./src/screens/TodoScreen";
import * as Font from 'expo-font';
import {THEME} from "./src/theme";


async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(null);

  if (!isReady) {
    return (
        <AppLoading
            startAsync={loadApplication}
            onError={err => console.log(err)}
            onFinish={() => setIsReady(true)}
        />
    )
  }

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
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20
  },
});
