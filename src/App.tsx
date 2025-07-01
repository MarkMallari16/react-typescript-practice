import React, { useState } from 'react'

interface Lists {
  id: number,
  title: string,
}
const App: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [lists, setLists] = useState<Lists[]>([]);

  const handleTitle = (e: string) => {
    setTitle(e);
  }
  const addList = () => {
    const newList: Lists = {
      id: lists.length + 1,
      title: title
    };
    setLists((prevlists) => [...prevlists, newList]);
    setTitle("");

  }

  const deleteList = (id: number) => {
    setLists((prevLists) => prevLists.filter(list => list.id !== id))
  }

  return (
    <>
      <h1>Todo List Application</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input value={title} onChange={(e) => handleTitle(e.target.value)} id='title' type="text" />
      </div>
      <button onClick={addList}>Add List</button>

      <div>
        {
          lists.map((list) => (
            <>
              <div>{list.title}</div>
              <button onClick={() => deleteList(list.id)}>Delete</button>
            </>
          ))
        }
      </div>
    </>
  )
}

export default App