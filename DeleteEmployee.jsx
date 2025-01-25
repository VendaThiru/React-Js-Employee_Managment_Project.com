import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import Custom_api from './Custom_api'



const DeleteEmployee = () => {
  const {responseData,fetchData}=Custom_api()
  const { id } = useParams()

  const navigate=useNavigate()

 

  // const deleteData = async () => {
  //   const response = await axios.delete(`http://localhost:3000/Employee_Data/${id}`)
  //     .then(() => { 
  //       console.log("Data Deleted Successfully") })
  //     navigate('/')

  //     .catch(() => { 
  //       console.log("Data Not Deleted Successfully") })
  // }


  const deleteData = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",


    }).then((result) => {
      if (result.isConfirmed) {
          const apiurl=`http://localhost:3000/Employee_Data/`
            fetchData(apiurl,'delete',null,id)
        // axios
        //   .delete(`http://localhost:3000/Employee_Data/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Employee has been deleted.",
              icon: "success",
            });
            navigate('/view');
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              text: "Failed to delete the data.",
              icon: "error",
            });
            navigate('/view');
          });
      }
    })
    // .catch((error) => {
    //   console.error("Something went wrong with Swal:", error);
    // });
  };
  

  useEffect(() => {
        deleteData()
    }, 
  [])

  return
   <div>Employee_Deleted</div>
}

export default DeleteEmployee
