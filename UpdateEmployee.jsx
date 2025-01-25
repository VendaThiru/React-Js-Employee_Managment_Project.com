import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './Header';

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    employee_name: '',
    employee_contact_number: '',
    employee_contact_email: '',
    employee_destination: '',
    employee_reporting_manager: '',
    employee_joing_data: '',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'employee_name':
        return { ...state, employee_name: action.payload };
      case 'employee_contact_number':
        return { ...state, employee_contact_number: action.payload };
      case 'employee_contact_email':
        return { ...state, employee_contact_email: action.payload };
      case 'employee_destination':
        return { ...state, employee_destination: action.payload };
      case 'employee_reporting_manager':
        return { ...state, employee_reporting_manager: action.payload };
      case 'employee_joing_data':
        return { ...state, employee_joing_data: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    employee_name,
    employee_contact_number,
    employee_contact_email,
    employee_destination,
    employee_reporting_manager,
    employee_joing_data,
  } = state;

  const getValues = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/Employee_Data/${id}`);
      const data = response.data;
      dispatch({ type: 'employee_name', payload: data.employee_name });
      dispatch({ type: 'employee_contact_number', payload: data.employee_contact_number });
      dispatch({ type: 'employee_contact_email', payload: data.employee_contact_email });
      dispatch({ type: 'employee_destination', payload: data.employee_destination });
      dispatch({ type: 'employee_reporting_manager', payload: data.employee_reporting_manager });
      dispatch({ type: 'employee_joing_data', payload: data.employee_joing_data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const changevalues = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const employee_details = { ...state };
    try {
      await axios.put(`http://localhost:3000/Employee_Data/${id}`, employee_details);
      Swal.fire('Congrats', 'Data Updated Successfully', 'success');
      navigate('/ViewEmployee');
    } catch {
      Swal.fire('Oops', 'Data update failed', 'error');
    }
  };

  useEffect(() => {
    getValues();
  }, [id]);

  return (
    <div>
      <Header/>
      <form onSubmit={onSubmit}>
        <p>Enter Employee Name:
          <input type="text" name="employee_name" value={employee_name} onChange={changevalues} />
        </p>
        <p>Enter Employee Contact Number:
          <input type="text"name="employee_contact_number"value={employee_contact_number}onChange={changevalues}/>
        </p>
        <p>Enter Employee Contact Email:
          <input type="email" name="employee_contact_email" value={employee_contact_email} onChange={changevalues}/>
        </p>
        <p>Enter Employee Destination:
          <input
            type="text"
            name="employee_destination"
            value={employee_destination}
            onChange={changevalues}
          />
        </p>
        <p>
          Enter Employee Reporting Manager:
          <input
            type="text"
            name="employee_reporting_manager"
            value={employee_reporting_manager}
            onChange={changevalues}
          />
        </p>
        <p> Enter Employee Joining Date:
          <input type="date" name="employee_joing_data" value={employee_joing_data}
            onChange={changevalues}
          />
        </p>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
