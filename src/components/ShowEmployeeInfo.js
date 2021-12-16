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
        <div className="card mx-auto m-5 item center p-4 flex-column align-items-center info">
            <span>Employee</span><h1 className='pt-2'>{employee.name}</h1>
            <div className="container center flex-column p-5">
                <img className="card-img pb-5" src={employee.photo} alt="profile pic"/>
                <p className="card-text"><span>Start Date:</span> {employee.startDate}</p>
                <p className="card-text"><span>Role:</span> {employee.role}</p>
                <p className="card-text"><span>Department:</span> {employee.department}</p>
                <button className="btn btn-primary" onClick={props.goBack}>Go Back</button>
            </div>
        </div>
    );
}
export default ShowEmployeeInfo;