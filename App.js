import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';


import Navbar from './src/Navbar';
import AddTodo from './src/AddTodo';
import Todo from './src/Todo';

export default function App() {

  const [ todos, setTodos ] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    }
    
    setTodos(prevTodos => [...prevTodos, newTodo])
  };

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => id !== todo.id))
  }
  const editTodo = (id, title) => {
    removeTodo(id)
    const newTodo = {
      id: id,
      title,
    } 
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  return (
    <View>
      <Navbar title={"Todo App"} />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList 
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo onRemove={removeTodo} todo={item} onEdit={editTodo}  />}
        />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
