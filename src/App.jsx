import React, { useState } from 'react';

import Task from './components/Task';
import Notes from './components/Notes';
import ToDo from './components/ToDo';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (index) => {
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div style={{ padding: '40px', background: '#fef2f8', minHeight: '100vh' }}>
       <h1 style={{ padding:'10px', color:'Pink' , textAlign:'center'}}>RemindMe</h1>
      <div style={{
        display: 'flex',
        gap: '60px',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
      
        <ToDo/>
      </div>
    </div>
  );
};

export default App;
