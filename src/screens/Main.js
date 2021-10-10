import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

export const MainScreen = ({addTodo, todos, removeTodo, onOpen}) => {
  let content = (<FlatList
      data={todos}
      renderItem={({item}) => <Todo todo={item} onRemove={removeTodo}
                                    onOpen={onOpen}/>}
      keyExtractor={item => item.id.toString()}
  />)

  if (todos.length === 0) {
    content = <View style={styles.imageWrapper}>
      <Image
          style={styles.image}
          source={require('../../assets/no-items.png')}/>
    </View>
  }

  return (
      <View>
        <AddTodo onSubmit={addTodo}/>
        {content}
      </View>
  );
};


const styles = StyleSheet.create({
  imageWrapper:{
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "contain"
  }

})
