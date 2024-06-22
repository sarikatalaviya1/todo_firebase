import React, { useState } from 'react'
import { Header } from './Header'
import { auth, db } from '../Config/Config'
import { Todos } from './Todos';
import { Modal } from './Modal';

export const Home = ({ currentUser, todos, deleteTodo,
  editTodoValue, editModal, updateTodoHandler }) => {

  const [todo, setTodo] = useState('');
  const [todoError, setTodoError] = useState('');

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    auth.onAuthStateChanged(user => {
      if (user) {
        db.collection('todos of ' + user.uid).add({
          Todo: todo
        }).then(setTodo('')).catch(err => setTodoError(err.message))
      }
      else {
        console.log('User Not SignIn');
      }
    })
  }

  return (
    <div className='wrapper'>
      <Header currentUser={currentUser} />
      <div className='container mt-5'>
        <form autoComplete='off' className='form-group '
          onSubmit={handleTodoSubmit}>

          {currentUser && <div className=''>

            <input type="text" placeholder="Enter Name"
              className='form-control' required
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
            />

            <div className='d-flex justify-content-center mt-5'>
              <button type="submit" className='btn btn-success w-25 ' >
                ADD
              </button>
            </div>

          </div>}

          {!currentUser && <>
            <input type="text" placeholder="Enter"
              className='form-control' required disabled
            />
            <br></br>
            <div >
              <button type="submit" className='btn btn-success'
                disabled>
                ADD
              </button>
            </div>
            <div className='error-msg'>
              Please register your account 
            </div>
          </>}

        </form>
        {todoError && <div className='error-msg'>{todoError}</div>}
        <Todos todos={todos} deleteTodo={deleteTodo}
          editModal={editModal} />
      </div>

      {editTodoValue && <Modal editTodoValue={editTodoValue}
        editModal={editModal} updateTodoHandler={updateTodoHandler}
      />}

    </div>
  )
}
