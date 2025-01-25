import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const Login = () => {
        const email=useRef()
        const password=useRef()
        const navigate = useNavigate()

        const Onlogin=()=>{
            sessionStorage.setItem("email",email.current.value)
            sessionStorage.setItem("email",email.current.value)
        
            Swal.fire("Congrats","Login Sucessfull !!","sucess")
            navigate('/');
        }
  return (
    <div>
      <form>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" ref={email}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="password"  ref={password}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={Onlogin}>Submit</button>
</form>
    </div>
  )
}

export default Login
