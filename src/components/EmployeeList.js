import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
// import 'bootswatch/dist/slate/bootstrap.min.css';
import ShowEmployeeInfo from './ShowEmployeeInfo';
function EmployeeList() {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [show, setShow ] = useState(true);
  const [id, setId] = useState();
  function changeComponent(e){
      setShow(false);
      setId(e.target['id']);
  };
  function goBack(){
      setShow(true);
  }
  useEffect(() => {
    axios.get("https://statenweb.mockable.io/employees")
      .then(res => {
        setEmployees(res.data);
        setLoading(false);
      })
  }, [])
  if(loading){
    return <div>
      <p>Loading..</p>
    </div>
  }
  if(show){
    return (
        <div className="container center flex-wrap mt-2 p-5">
        <h1>Employees List</h1>
        <div className="container list center flex-wrap mt-2 p-4">
          
        {
          employees.map(employee => {
            return (
            <div onClick={changeComponent} className="card item col-12 m-3 p-4 text-center" key={employee.id} id={employee.id}>
              <p> <span>Name:</span>{employee.name}</p>
              <br />
              <p><span>Department:</span>{employee.department}</p>
            </div>
            )
          })
        }
      </div>
      </div>
  );
  } else {
    return <ShowEmployeeInfo employeeId={id} goBack={goBack}/>
  }
  
}

export default EmployeeList;
