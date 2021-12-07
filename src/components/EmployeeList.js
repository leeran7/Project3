import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
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
    return (<div className="container  justify-content-center d-flex flex-wrap mt-2 p-5">
    {employees.map(employee => {
      return (
      <div onClick={changeComponent} className="card item col-3 m-3 p-4 text-center" key={employee.id} id={employee.id}>
        Name: {employee.name}
        <br />
        Department: {employee.department}
      </div>
      )
    })}
  </div>);
  } else {
    return <ShowEmployeeInfo employeeId={id} goBack={goBack}/>
  }
  
}

export default EmployeeList;
