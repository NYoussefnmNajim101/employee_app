import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getEmployeeById } from '../services/service';
import { useNavigate } from 'react-router-dom';
import { updateEmployee$ } from '../services/service';

const UpdateEmployee = () => {
  


    const navigeRedirect = useNavigate(); 

    const { id } = useParams();
    const [employee,setEmployee] = useState({
        id:id,
        firstName:"",
        lastName:"",
        email:""
    });

    useEffect(() => {
      const fetchData = async() =>{
        try{
            const response = await getEmployeeById(id);
            setEmployee(response.data);
        }
        catch (error){
           console.log(error);
        }
      };
      fetchData();
    }, [])
    

    const handleChange = (e)=>{
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]:value});
    };

    const updateEmployee = (e)=>{
       e.preventDefault();
       updateEmployee$(employee, id).then((response)=>{
            navigeRedirect("/employees");
       })
       .catch((error)=>{
          console.log(error);
       });
    }

    const redirect = () =>{
       navigeRedirect("/employees");
    };

  return (
    <div className='flex max-w-xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider '>
                <h1>update employee</h1>
            </div>
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
                <button onClick={updateEmployee} className='rounded text-white font-semibold bg-blue-500 py-2 px-6 hover:bg-orange-600'> Update </button>
                <button onClick={redirect} className='rounded text-white font-semibold bg-red-500 py-2 px-6 hover:bg-green-500'> cancel </button>
            </div>
        </div>
    </div>
  )
}

export default UpdateEmployee;