import axios, { Axios } from "axios";

const EMPLOYEE_BASE_URL="http://localhost:8075/api/v1/employees";

   const postEmployee = (employee)=>{
         return axios.post(EMPLOYEE_BASE_URL, employee);
    };
    const saveEmployees = (employee)=>{
         return axios.post(EMPLOYEE_BASE_URL, employee);
    };
    
    const getEmployees = ()=>{
     return axios.get(EMPLOYEE_BASE_URL);
    };
   const deleteEmployeeById = (id) => {
      return axios.delete(EMPLOYEE_BASE_URL+"/"+id);
    };
   const getEmployeeById = (id) =>{
      return axios.get(EMPLOYEE_BASE_URL+"/"+id);
   };
   const updateEmployee$ = (employee ,id ) =>{
     return axios.put(EMPLOYEE_BASE_URL+"/"+id,employee);
   };

export {postEmployee,saveEmployees,getEmployees,deleteEmployeeById,getEmployeeById,updateEmployee$};