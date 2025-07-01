import React, { useState } from 'react'
import Button from './component/Button';

interface Lists {
  id: number,
  title: string,
  isEdit: boolean
}

const App: React.FC = () => {
  //title input
  const [title, setTitle] = useState<string>("");
  //new title input for edit
  const [newTitle, setNewTitle] = useState<string>("");

  //storing list
  const [lists, setLists] = useState<Lists[]>([]);

  //handle title for title iinput 
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  //add 
  const addList = () => {
    if (title.trim() === "") {
      alert("Please input field");
      return;
    }

    const newList: Lists = {
      id: lists.length + 1,
      title: title,
      isEdit: false
    };

    setLists((prevlists) => [...prevlists, newList]);
    setTitle("");
  }

  //delete
  const deleteList = (id: number) => {
    setLists((prevLists) => prevLists.filter(list => list.id !== id))
  }

  //edit
  const editList = (id: number) => {
    const editingItem = lists.find((l) => l.id === id);

    if (editingItem) {
      setNewTitle(editingItem.title);
    }

    setLists((prevLists) => prevLists.map((list) => (
      list.id === id ? { ...list, isEdit: true } : list
    )))
  }

  //save
  const saveList = (id: number) => {
    setLists((prevlists) => prevlists.map((list) => (
      list.id === id ? { ...list, title: newTitle, isEdit: false } : list
    )))
  }
  const cancelEdit = (id: number) => {
    setLists((prevLists) => prevLists.map((list) => (
      list.id === id ? { ...list, isEdit: false } : list
    )))
  }
  return (
    <>
      <h1>Todo List Application</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input value={title} onChange={(e) => handleTitle(e)} id='title' type="text" />
      </div>
      <button onClick={addList}>Add List</button>

      <div>
        {
          lists.map((list) => (
            <div key={list.id}>
              {list.isEdit ?
                <>
                  <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
                    id='title' type="text" />
                  <button onClick={() => cancelEdit(list.id)}>Cancel</button>
                  <button onClick={() => saveList(list.id)}>Save</button>

                </>
                :
                <>
                  <div>{list.title}</div>
                  <button onClick={() => editList(list.id)}>Edit</button>
                  <button onClick={() => deleteList(list.id)}>Delete</button>
                </>
              }
            </div>
          ))
        }
      </div>

      <Button title='Pindot' disabled={true} />
    </>
  )
}

export default App