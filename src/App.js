
import { BrowserRouter , Route , Routes } from 'react-router-dom';

import './App.css';
import AddEmployee from './components/addEmployee';
import Navbar from './components/navbar';
import EmployeeList from './components/employeeList';
import UpdateEmployee from './components/updateEmployee';




function App() {
  
  return (
    <>
    <BrowserRouter>
     <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<EmployeeList />}></Route>
      <Route index element={<EmployeeList />}></Route>
      <Route path="/employees" element={<EmployeeList />}></Route>
      <Route path="/addEmployee" element={<AddEmployee />}></Route>
      <Route path="/editEmployee/:id"  element={
        <UpdateEmployee/>
      }/>
     </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App;
