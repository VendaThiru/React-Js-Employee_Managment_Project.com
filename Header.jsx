import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Header = () => {
    const navigate=useNavigate()
        const email=sessionStorage.getItem('email')
        const password=sessionStorage.getItem('password')

        const Onlogout=()=>{
            if(email && password){
                sessionStorage.removeItem('email')
                sessionStorage.removeItem('password')
                Swal.fire('Congrats',"sucessfully logout","Sucess")
                navigate('/')
            }
        }

  return (
    <div>
<div class="card">
  <div class="card-header">
    Employee Management
  </div>
  <div class="card-body">
    <a href="#" class="btn btn-primary">Add Employee</a>
    <a href="#" class="btn btn-primary">View Employee</a>
    <a href="#" class="btn btn-primary">Delete Employee</a>
    <a href="#" class="btn btn-primary">Update Employee</a>

  </div>

</div>

    </div>
  )
}

export default Header
