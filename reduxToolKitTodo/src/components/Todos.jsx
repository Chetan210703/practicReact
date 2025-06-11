import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, updateTodo } from '../features/todo/todoSlice';


function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdateTodo = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }));
      setEditingId(null);
      setEditText('');
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  return (
    <>
      <div className="text-2xl font-bold mb-4">Todos</div>
      <ul className="space-y-2">
        {todos.map((todos) => (
          <li key={todos.id} className="flex items-center gap-2 p-2 bg-gray-100 rounded">
            {editingId === todos.id ? (
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 px-2 py-1 border rounded"
                />
                <button
                  onClick={() => handleUpdateTodo(todos.id)}
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <span className={`flex-1 ${todos.completed ? 'line-through text-gray-500' : ''}`}>
                  {todos.text}
                </span>
                <button 
                  onClick={() => handleRemoveTodo(todos.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
                <button 
                  onClick={() => handleToggleTodo(todos.id)}
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {todos.completed ? 'Uncomplete' : 'Complete'}
                </button>
                <button 
                  onClick={() => handleEditClick(todos)}
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos