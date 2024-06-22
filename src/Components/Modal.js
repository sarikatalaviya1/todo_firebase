import React, { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { xCircle } from 'react-icons-kit/feather/xCircle'
import { auth, db } from '../Config/Config';

export const Modal = ({ editTodoValue, editModal, updateTodoHandler }) => {

    const [editTodo, setEditTodo] = useState(editTodoValue.Todo);

    const handleClose = () => {
        editModal(null)
    }

    const handleEditTodoSubmit = (e) => {
        e.preventDefault();
        handleClose();
        updateTodoHandler(editTodo, editTodoValue.id);
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('todos of ' + user.uid).doc(editTodoValue.id).update({
                    Todo: editTodo
                })
            }
            else {
                console.log('Not Update')
            }
        })
    }

    return (
        <div className='modal-container'>
            <div className='modal ' style={{ height: '300px' }}>
                <div className='d-flex justify-content-center mt-5' style={{gap:'50%'}}>
                    <div className=''>
                        <h3 className="text-center">Update</h3>
                    </div>
                    <div className='close-btn'
                        onClick={handleClose}>
                        <Icon size={28} icon={xCircle}
                            className='text-dark'
                        />
                    </div>
                </div>
                
                <div className='container-fluid'>
                    <form autoComplete="off" className='form-group '
                        onSubmit={handleEditTodoSubmit}>

                        <input type="text" className='form-control w-75 m-auto'
                            required placeholder="Update your todo " style={{ height: '50px' }}
                            value={editTodo}
                            onChange={(e) => setEditTodo(e.target.value)}
                        />



                        <div className='d-flex justify-content-center mt-5'>
                            <button type="submit" className='btn btn-success btn-lg '>
                                Update
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
