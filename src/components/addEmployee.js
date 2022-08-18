import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {postEmployee} from '../services/service';

const AddEmployee = () => {
    const [employee,setEmployee]= useState({
        id:"",
        firstName:"",
        lastName:"",
        email:""
    });
    const reset = (e)=>{
         e.preventDefault();
         setEmployee({
            id:"",
            firstName:"",
            lastName:"",
            email:""
         });
    }
    const navigeSave = useNavigate();

    const handleChange = (e)=>{
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]:value});
    };

    const saveEmployee = (e)=>{
        e.preventDefault();

        postEmployee(employee).then((response)=>{
                  console.log(response);
                  navigeSave("/employees");
        }).catch((err) => {
            console.log(err);
        })
    };

  return (
    <div className='flex max-w-xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>add new employee</h1>
                <br/>
            </div>
            <br/><br/><br/>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>first name</label>
                <input type="text" placeholder='' name="firstName" value={employee.firstName} onChange={(e)=>handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2 '/>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>last name</label>
                <input type="text" placeholder='' name="lastName" value={employee.lastName} onChange={(e)=>handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2 '/>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>email</label>
                <input type="email" name="email" value={employee.email} onChange={(e)=>handleChange(e)} placeholder='' className='h-10 w-96 border mt-2 px-2 py-2 '/>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-6 mt-10 '>
                <button onClick={saveEmployee} className='rounded text-white font-semibold bg-blue-500 py-2 px-6 hover:bg-orange-600'> save </button>
                <button onClick={reset} className='rounded text-white font-semibold bg-red-500 py-2 px-6 hover:bg-green-500'> clear </button>
            </div>
        </div>
    </div>
  )
}
 
export default AddEmployee