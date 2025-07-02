import React, { useState } from 'react'
import Button from './component/Button';

interface Lists {
  id: number,
  title: string,
  isEdit: boolean
}
type Status = | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error" };


const App: React.FC = () => {
  //title input
  const [title, setTitle] = useState<string>("");
  //new title input for edit
  const [newTitle, setNewTitle] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  //storing list
  const [lists, setLists] = useState<Lists[]>([]);

  //status
  const [status, setStatus] = useState<Status>({ status: "idle" });

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
      id: Date.now(),
      title: title,
      isEdit: false
    };

    setLists((prevLists) => [...prevLists, newList]);
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

  //cancel
  const cancelEdit = (id: number) => {
    setLists((prevLists) => prevLists.map((list) => (
      list.id === id ? { ...list, isEdit: false } : list
    )))
  }

  //toggling button
  const toggleButton = () => {
    setToggle(!toggle);
  }

  //changing status
  const handleStatus = () => {
    setStatus({ status: "success" });
  }
  return (

    <div className='min-h-screen grid place-items-center '>
      <div className='container max-w-1/2'>
        <h1 className='text-2xl font-bold'>Todo List Application</h1>
        <div>
          <label htmlFor="title">Title</label>
          <input value={title} onChange={(e) => handleTitle(e)} id='title' type="text" className='block border p-2 w-full mb-2 rounded-md' />
        </div>
        <button onClick={addList} className='w-full bg-blue-500 text-white font-bold p-2 rounded-md'>Add List</button>

        <div>
          {
            lists.map((list) => (
              <div key={list.id}>
                {list.isEdit ?
                  <div className='flex justify-between items-center p-5 ring-1 ring-inset ring-gray-300 mt-2 rounded-lg'>
                    <div>
                      <label htmlFor="newTitle">Enter New Title</label>
                      <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
                        id='title' type="text" placeholder='Enter title' className='border w-96 p-2 rounded-md block mt-1' />
                    </div>
                    <div className='flex gap-2'>
                      <button onClick={() => cancelEdit(list.id)} className='bg-red-500 px-4 py-2 rounded-md text-white font-bold'>Cancel</button>
                      <button onClick={() => saveList(list.id)} className='bg-blue-500 px-4 py-2 rounded-md text-white font-bold'>Save</button>

                    </div>
                  </div>
                  :
                  <div className='flex justify-between items-center p-5 ring-1 ring-inset ring-gray-300 mt-2 rounded-lg'>
                    <div>{list.title}</div>
                    <div className='flex items-center gap-2'>
                      <button onClick={() => editList(list.id)} className='bg-blue-500 px-4 py-2 rounded-md text-white font-bold'>Edit</button>
                      <button onClick={() => deleteList(list.id)} className='bg-red-500 px-4 py-2 rounded-md text-white font-bold'>Delete</button>
                    </div>
                  </div>
                }
              </div>
            ))
          }
        </div>


        {/**
         * Toggling Button
         *  <Button title='Pindot' disabled={true} />
        <button onClick={toggleButton}>{toggle ? "toggle" : "Not toggle"}</button>
         * 
        <p>{status.status}</p>
        <button onClick={handleStatus}>Change my status</button>
         */}

      </div>
    </div>
  )
}

export default App