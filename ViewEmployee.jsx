import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Custom_api from './Custom_api'
import DeleteEmployee from './DeleteEmployee'
import Header from './Header'




const ViewEmployee = () => {
  // const [Employee_Data, setEmployeeData] = useState([])
  const {responseData,fetchData}=Custom_api()

  const getData = async () => {
    // const response = await axios.get("http://localhost:3000/Employee_Data")
    // setEmployeeData(response.data)
    fetchData()
    // setEmployeeData(response.data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <Header/>
      <h1 className='text-primary text-center m-5 p-5'>Welcome to Employee Management Portal</h1>

      <table className='table table-hover table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Employee Contact Number</th>
            <th>Employee Contact Email</th>
            <th>Employee Destination</th>
            <th>Employee Reporting Manager</th>
            <th>Employee Joining Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {responseData.map((data) => (
            <tr className='text-center' key={data.employee_id}>
              <td>{data.employee_id}</td>
              <td>{data.employee_name}</td>
              <td>{data.employee_contact_number}</td>
              <td>{data.employee_contact_email}</td>
              <td>{data.employee_destination}</td>
              <td>{data.employee_reporting_manager}</td>
              <td>{data.employee_joing_data}</td>
              <td><Link to={`/UpdateEmployee/${data.id}`}><i className='fa fa-edit text-primary'></i></Link></td>
              <td><Link to={`/DeleteEmployee/${data.id}`}><i className='fa fa-trash text-danger' onClick={() => deleteData(data.employee_id)}></i></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ViewEmployee
