import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../Config/Config'

export const Header = ({currentUser}) => {

    const [date, setDate]=useState(null);
    const [month, setMonth]=useState(null);
    const [year, setYear]=useState(null);
    const [day, setDay]=useState(null);

    useEffect(()=>{
        const myDate = new Date();
        const myMonth = myDate.toLocaleString('default', { month: 'long' });
        const myDate2 = myDate.getDate();
        const myYear = myDate.getFullYear();
        const myDay = myDate.toLocaleDateString('default', { weekday: 'long' });

        setMonth(myMonth);
        setDate(myDate2);
        setYear(myYear);
        setDay(myDay);
    },[])

    const handleLogout=()=>{
        auth.signOut().then(()=>{
            window.location.reload();
        });
    }
   
    return (
        <div className='d-flex justify-content-around align-items-center bg-dark'>
            <div className='leftside'>
                    <p className='display-4 text-white'>Todo</p>
                
            </div>
            <div className=''>
                
            {!currentUser&&<>
                    <Link className='btn btn-primary btn-md' to="signup">
                     SignUp
                    </Link>
               
               
                  <Link className='btn btn-secondary btn-md' to="login">
                     Login
                  </Link>

                  <br></br>
                  <div className='date-section'>
                      <span>{date}</span>
                      <span>{month}</span>
                      <span>{year}</span>
                      <span>{day}</span>
                  </div>
                 
                </>}
                {currentUser&&<div className='welcome-div'>

                    <p className='h5'>Welcome <span className='h5'>{currentUser}</span></p>
                    <div className='date-section'>
                      <span>{date}</span>
                      <span>{month}</span>
                      <span>{year}</span>
                      <span>{day}</span>
                    </div>
                   
                </div>} 
              
             </div> <button className='btn btn-danger'
                    onClick={handleLogout}>LOGOUT</button>

        </div>
    )
}
