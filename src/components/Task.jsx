const Task = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      padding: '20px',
      borderRadius: '10px',
      width: '300px'
    }}>
      {tasks.map((t, i) => (
        <div key={i} style={{
          backgroundColor: '#ffe4ec',
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: t.completed ? 'line-through' : 'none',
              cursor: 'pointer',
              color: t.completed ? '#999' : '#333',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            📝 {t.text}
          </span>
          <button onClick={() => deleteTask(i)}>🗑️</button>
        </div>
      ))}
    </div>
  );
};

export default Task;
