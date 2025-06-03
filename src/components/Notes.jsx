const Notes = ({ onAdd, task, setTask }) => {
  return (
    <div style={{
      backgroundColor: '#ffe4ec',
      border: '2px solid pink',
      borderRadius: '10px',
      padding: '20px',
      width: '300px',
    }}>
      <div style={{
        background: 'pink',
        padding: '10px',
        borderRadius: '10px 10px 0 0',
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'white'
      }}>
        today's reminders
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={{ flex: 1, border: '1px solid pink', borderRadius: '4px', padding: '4px' }}
        />
        <button onClick={onAdd}>❤️</button>
      </div>
    </div>
  );
};

export default Notes;
