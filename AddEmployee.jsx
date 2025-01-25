import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Custom_api from './Custom_api'



const AddEmployee = () => {

        const {responseData,fetchData}=Custom_api()

        const [employee_name, setEmployeeName]=useState('')
        const [employee_number, setEmployeeNumber]=useState('')
        const [employee_email, setEmployeeMail]=useState('')
        const [employee_destination, setEmployeeDestination]=useState('')
        const [employee_RM, setEmployeeReportingManager]=useState('')
        const [employee_JD, setEmployeejoindate]=useState('')
        let [employee_id, setEmployeeId]=useState(3)
     
        const navigate=useNavigate();

        const handleForm = async(e)=>{

          e.preventDefault();

          const employeeData = {
            employee_id: employee_id, 
            employee_name: employee_name, 
            employee_contact_number: employee_number, 
            employee_contact_email: employee_email, 
            employee_destination: employee_destination,
            employee_reporting_manager: employee_RM, 
            employee_joing_data: employee_JD,
          
          }
          
     
          // const response = axios.post("http://localhost:3000/Employee_Data", employeeData)
          
          // response
          //   .then(() => {
          //     console.log("Data added successfully")
          //     setEmployeeId(employee_id=>employee_id+1)
          
          //   })
          //   .catch((e) => {
          //     console.log("Failed to add data", e)
          //   });



          try{

            const apiurl='http://localhost:3000/Employee_Data/'
            fetchData(apiurl,'post',employeeData)

            // await axios.post("http://localhost:3000/Employee_Data",employeeData)
             .then((error)=>{
              console.log(error)
              //  Swal.fire("congrats","Employee Data Added Sucessfully !","sucess")
               new Swal("Congrats","Employee Data Added Sucessfully !","sucess")
               navigate('/view')
             })
             .catch((error)=>{
              console.log(error)
              //  Swal.fire("Oops","Somthing error from the Server !","Error")
               new Swal("Oops","Somthing error from the Server !","Error")
               navigate('/view')
             })
           }
           catch{

              //  Swal.fire("Oops","Somthing error Occured !","Error")
               new Swal("Oops","Somthing error Occured !","Error")
               navigate('/view')
           }



          // const response =axios.post("http://localhost:3000/Employee_Data", employee_contact_number)
          // response.then(()=>{console.log("Data added Sucessfully")})
          // response.catch((e)=>{console.log("Failed added data",e)})

          // console.log(employee_name)
          // console.log(employee_number)
          // console.log(employee_email)
          // console.log(employee_RM)
          // console.log(employee_JD)
          // console.log(employee_destination)
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
        <input type="button" value="Reset"/>

      </div>

      
    </div>
  )
}

export default AddEmployee
