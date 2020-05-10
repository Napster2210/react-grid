import React from 'react';
import './Users.css';
import Button from '../Button';
import useAddForm from '../../hooks/AddFormHook';

const AddUser = () => {

  const addUser = async () => {
    const response = await fetch('/users/add-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        role: inputs.role,
        email: inputs.email,
        status: inputs.status,
      }),
    });
    debugger
    const body = await response.json();
    // const response = await fetch('/api/world', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ post: 'test' }),
    // });
    // const body = await response.text();
    console.log('result', body);
  }
  const { inputs, handleInputChange, handleSubmit } = useAddForm(addUser);

  return (
    <form className='Form-container' onSubmit={handleSubmit}>
      <div className='Form-control'>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          className='Text-input Full-width'
          onChange={handleInputChange}
          value={inputs.firstName}
          required />
      </div>
      <div className='Form-control'>
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          className='Text-input Full-width'
          onChange={handleInputChange}
          value={inputs.lastName}
          required />
      </div>
      <div className='Form-control'>
        <select
          name='role'
          placeholder='Role'
          className='Select-box Full-width'
          onChange={handleInputChange}
          value={inputs.role}
          required>
          <option selected disabled>Choose Role</option>
          <option value='admin'>Admin</option>
          <option value='partner'>Partner</option>
        </select>
      </div>
      <div className='Form-control'>
        <input
          type='email'
          name='email'
          placeholder='Email'
          className='Text-input Full-width'
          onChange={handleInputChange}
          value={inputs.email}
          required />
      </div>
      <div className='Form-control'>
        <select
          name='status'
          placeholder='Status'
          className='Select-box Full-width'
          onChange={handleInputChange}
          value={inputs.status}
          required>
          <option selected disabled>Choose Status</option>
          <option value='active'>Active</option>
          <option value='inactive'>InActive</option>
        </select>
      </div>
      <div className='Form-control' style={{ marginLeft: 16 }}>
        <Button type='submit'>ADD</Button>
      </div>
    </form>
  );
}

export default AddUser;