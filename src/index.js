import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `New project  ${Date.now()}`,
      owner: 'Roberto Góes'
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  async function handleRemoveProject(id) {
    await api.delete(`project/${id}`);
    
    setProjects(Projects.filter(
      project => project.id !== id
    ));
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='#7159c1' />

      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.container}
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}      
        />

        <TouchableOpacity
         activeOpacity={0.6}
         style={styles.button}
         onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>


      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    padding: 5
 //   justifyContent:'center', //vertical
 //   alignItems: 'center' // horizontal  Ambos não funcional com FlatList
  },

  project: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold'
  },
  
  button: {
    backgroundColor: '#FFF',
    margin: 10,
    height: 45,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});
