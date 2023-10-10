import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [inputData, setInputData] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');

  const taskAdd = () => {
    if (!inputData) {
      return;
    } else {
      setItems([...items, inputData]);
      setInputData('');
    }
  };

  const Delete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const Edit = (index) => {
    setEditIndex(index);
    setEditValue(items[index]);
  };

  const handleUpdate = () => {
    if (editIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[editIndex] = editValue;
      setItems(updatedItems);
      setEditIndex(-1);
      setEditValue('');
    }
  };

  const deleteData = () => {
    setItems([]);
  };

  return (
    <>
      <div className="container">
        <div className="TodoList">
          <h1>TodoList</h1>
          <div className="row">
            <input
              type="text"
              id="input-box"
              placeholder="Text Message"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
          <button className='btn' onClick={taskAdd}>ADD</button>
        
          </div>
          <ul>
            {items.map((item, index) => (
              <div className="xmark" key={index}>
                {editIndex === index ? (
                  <div>
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                     <button className='btns' onClick={handleUpdate}>
                      <CheckBoxIcon/>
                    </button>
                   
                  </div>
                ) : (
                  <>
                    <li>{item}</li>
                    <button className='btns' onClick={() => Delete(index)}>
                      <DeleteForeverIcon/>
                    </button>
                    <button className='btns' onClick={() => Edit(index)}>
                      <EditIcon/>
                    </button>
                   
                  </>
                )}
              </div>
            ))}
          </ul>
          <button className='btn'
            style={{
              display: 'flex',
              margin: 'auto',
              justifyContent: 'center',
            }}
            onClick={deleteData}
          >
            Delete All Item
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
