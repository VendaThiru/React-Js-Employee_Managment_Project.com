import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const EditEmployee = () => {

  const {id} =useParams()

          const [employee_name, setEmployeeName]=useState('')
          const [employee_number, setEmployeeNumber]=useState('')
          const [employee_email, setEmployeeMail]=useState('')
          const [employee_destination, setEmployeeDestination]=useState('')
          const [employee_RM, setEmployeeReportingManager]=useState('')
          const [employee_JD, setEmployeejoindate]=useState('')
          let [employee_id, setEmployeeId]=useState(3)
       
          const handleForm=()=>{
  
  
            const employeeData = {
              employee_id: employee_id, 
              employee_name: employee_name, 
              employee_contact_number: employee_number, 
              employee_contact_email: employee_email, 
              employee_destination: employee_destination,
              employee_reporting_manager: employee_RM, 
              employee_joing_data: employee_JD,
            
            }

            const response = axios.put(`http://localhost:3000/Employee_Data/${id}`, employeeData)
          
            response
              .then(() => {
                console.log("Data added successfully")
                setEmployeeId(employee_id=>employee_id+1)
            
              })
              .catch((e) => {
                console.log("Failed to add data", e)
              });
            }

  return (
    <div>
          <div>
        <p>Enter Employee Name:
        <input type="text" name="Employee Name" onChange={((e)=>{setEmployeeName(e.target.value)})} />
        </p>
      </div>
      <div>
        <p>Enter Employee Contact Numnber:
        <input type="text" name="Employee Contact Numnber" onChange={((e)=>{setEmployeeNumber(e.target.value)})} />
        </p>
      </div>
      <div>
      <p>Enter Employee contact email:
        <input type="text" name="Employee contact email" onChange={((e)=>{setEmployeeMail(e.target.value)})} />
        </p>
      </div>
      <div>
      <p>Enter Employee Destination:
        <input type="text" name="Employee Destination" onChange={((e)=>{setEmployeeDestination(e.target.value)})} />
        </p>
      </div>
      <div>
      <p>Enter Employee Reporting Manager:
        <input type="text" name="Employee Reporting Manager" onChange={((e)=>{setEmployeeReportingManager(e.target.value)})} />
        </p>
      </div>
      <div>
        <p>Enter Employee joining date:
        <input type="text" name="Employee joining date" onChange={((e)=>{setEmployeejoindate(e.target.value)})} />
        </p>
      </div>
      <div>
        <input type="button" value="Submit" onClick={handleForm} />
        <input type="button" value="Reset" />

      </div>


    </div>
  )
}

export default EditEmployee
