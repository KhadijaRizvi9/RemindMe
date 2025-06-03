
import './ToDo.css';
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { TbFlowerFilled } from "react-icons/tb";
import { CiStickyNote } from "react-icons/ci";
 import { useEffect } from 'react';

const ToDo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [noteModal, setNoteModal] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([]);
 

useEffect(() => {
  const storedTasks = localStorage.getItem('tasks');
  const storedNotes = localStorage.getItem('notes');

  if (storedTasks) setTasks(JSON.parse(storedTasks));
  if (storedNotes) setNotes(JSON.parse(storedNotes));
}, []);


  const handleAddTask = () => {
  if (task.trim() === '') return;
  const updated = [...tasks, { text: task, completed: false }];
  setTasks(updated);
  localStorage.setItem('tasks', JSON.stringify(updated));
  setTask('');
};

const toggleTaskCompletion = (index) => {
  const updatedTasks = tasks.map((t, i) =>
    i === index ? { ...t, completed: !t.completed } : t
  );
  setTasks(updatedTasks);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};

const handleDeleteTask = (index) => {
  const updated = tasks.filter((_, i) => i !== index);
  setTasks(updated);
  localStorage.setItem('tasks', JSON.stringify(updated));
};
const handleAddNote = () => {
  if (noteText.trim()) {
    const updated = [...notes, noteText];
    setNotes(updated);
    localStorage.setItem('notes', JSON.stringify(updated));
    setNoteText('');
    setNoteModal(false);
  }
};

const handleDeleteNote = (index) => {
  const updated = notes.filter((_, i) => i !== index);
  setNotes(updated);
  localStorage.setItem('notes', JSON.stringify(updated));
};

  return (
    <div className='dashboard'>
    <div className='todo-card'>
      
      <div className="header">today's reminders</div>
      <div className="input-add">
      <input
        type="text"
        value={task}
        placeholder="Add your mission for today!"
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: '8px', width: '70%',border:'1px solid hotpink' }}
      />
      <button
  onClick={handleAddTask}
  style={{
    backgroundColor: 'hotpink',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  }}
>
  <FaHeart color="white" size={20} />
  
</button>
<button
  onClick={() => setNoteModal(true)}
  style={{
    backgroundColor: 'hotpink',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  }}
>
  <SlNote color="white" size={20} />
  
</button>

</div >
    <div  style={{ maxHeight: '200px', overflowY: 'auto', marginTop: '20px' }}>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {tasks.map((t, i) => (
          <li
            key={i}
            style={{
              background: 'white',
              marginBottom: '10px',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span
        onClick={() => toggleTaskCompletion(i) }
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          textDecoration: t.completed ? 'line-through' : 'none',
          color: t.completed ? '#888' : 'black',
        }}
      ><CiHeart color="hotpink" size={25} />
      <span
  style={{
    display: 'block',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'normal',
    maxWidth: '100%',
    
  }}
>{t.text}</span>
        
</span>
            
            <button onClick={() => handleDeleteTask(i)} style={{ marginLeft: '10px',  border:"none", background:"none"}}>
              <MdDelete   color="hotpink"  size={25} />
            </button>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
     <div className = 'notes-card' style={{ marginTop: '0px'}}>
          <div className="header">Notes</div>
         <div className='note-list'>
        {notes.map((note, idx) => (
          <div key={idx} style={{ border: '1px solid pink',
           borderRadius: '8px',
            padding: '10px',
            margin: '10px ',
            maxWidth: 300,
            background: '#fff5f7',
            display:'flex',
            justifyContent: 'space-between' }}>
            {note}
            <button onClick={() => handleDeleteNote(idx)} style={{marginLeft:'40px',  border:"none", background:"none"}}>
              <MdDelete  color="hotpink"  size={20} />
            </button>
          </div>
          
        ))}
        </div>
      </div>

      {/* Modal */}
      {noteModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%',
          height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex',
          alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ background: 'white', padding: 20, borderRadius: 8, width: '300px' }}>
            <h3 style={{ marginBottom: 10 }}>Write a note</h3>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Your note..."
              rows={4}
              style={{ width: '90%', padding: 10,borderColor: 'pink', borderRadius: 4 }}
            />
            <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={handleAddNote} style={{ backgroundColor: 'hotpink', color: 'white', padding: '5px 10px', borderRadius: 4, border: 'none' }}>
                Save
              </button>
              <button onClick={() => setNoteModal(false)} style={{ padding: '5px 10px', border: '1px solid gray', borderRadius: 4 }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDo;

