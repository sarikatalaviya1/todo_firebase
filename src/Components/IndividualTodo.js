import React from 'react'
import {Icon} from 'react-icons-kit'
import {edit2} from 'react-icons-kit/feather/edit2'
import {trash} from 'react-icons-kit/feather/trash'

export const IndividualTodo = ({individualTodo, deleteTodo,
editModal}) => {

    const handleDelete=()=>{
        deleteTodo(individualTodo.id);
    }

    const handleEditModal=()=>{
        editModal(individualTodo);
    }
    
    return (
        <div className='d-flex justify-content-between' style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
            <div>
                {individualTodo.Todo}
            </div>
            <div className='d-flex' style={{gap:'10px'}}>
                <div onClick={handleEditModal}>
                   <Icon size={18} icon={edit2}/>
                </div>
                <div className='delete-btn' onClick={handleDelete}>
                   <Icon size={18} icon={trash} className='text-dark'/>
                </div>
            </div>
        </div>
    )
}
