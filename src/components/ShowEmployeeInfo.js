import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ShowEmployeeInfo = (props) => {
    const [loading, setLoading] = useState(true);
    const [employee, setEmployee] = useState();
    useEffect(() => {
        axios.get(`http://statenweb.mockable.io/employee/${props.employeeId}`)
            .then(res => {
                setEmployee(res.data);
                setLoading(false);
            })
    }, [])
    if(loading){
        return <p>Loading...</p>
    }
    return (
        <div className="mx-auto mt-3" style={{ width: "30%"}}>
            <div className="card container">
                <img className="img-thumbnail" src={employee.photo} alt="profilepic"/>
                <p className="card-title">Name: {employee.name}</p>
                <p className="card-text">Start Date: {employee.startDate}</p>
                <p className="card-text">Role: {employee.role}</p>
                <p className="card-text">Department: {employee.department}</p>
                <button className="btn btn-primary" onClick={props.goBack}>Go Back</button>
            </div>
            
        </div>
    );
}
export default ShowEmployeeInfo;