import axios from 'axios'
import React, { useState } from 'react'


const Custom_api = () => {

    const apiurl='http://localhost:3000/Employee_Data'
    const[responseData,setResponseData]=useState([])
    const fetchData=async(url=apiurl,method='get',body=null,id=NaN)=>{

    if(id){
        url=url+id
            const res=await axios[method](url,body)
            setResponseData(res.data)
    }else{
      const res=await axios[method](url,body)
        setResponseData(res.data)
    }
}
  return {responseData,fetchData}
}

export default Custom_api
