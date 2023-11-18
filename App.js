import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaViewComponent, StyleSheet, Text, View } from 'react-native';
import Task from './components/task';
import { SafeAreaView } from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';


const XpContainer = ({ platform, children }) => {
  return platform === "web" ? (
    <View style={styles.container}>
      <Text> Web </Text>
      {children}
    </View>
  ) : (
    <SafeAreaView style={[styles.container, styles.containerMobile]}>
      <Text> Mobile </Text>
      {children}
    </SafeAreaView>
  );
};



export default function App() {
  const [tasks, setTasks] = useState([])
  
  const addTask = (text) => {
    setTasks(
      [
        ...tasks, 
        { text }
      ]
    )
  }

  return (
    <XpContainer platform={Platform.OS}>
      <View style={styles.tasksWrapper}> 
        <Text style={styles.sectionTitle}> Today's Tasks </Text>
      </View>
      <View style={styles.itemsContainer}>
        {
          tasks.length == 0 ? (
            <Text>
              No Notes Yet
            </Text>
          ) : (
              tasks.map((task, index) => (
                <Task key={index} text={task.text} />
              ))
          ) 
        }
      </View>
    </XpContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "E8EAED",
    alignItems: 'center'
  },
  containerMobile: {
    marginTop: 50,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  sectionTitleContainer: {
    backgroundColor: 'white'
  },
  itemsContainer: {
    flex:1,
    justifyContent: 'center'
  }
});