import React from 'react';
import './Users.css';
import Button from '../Button';

const AddUser = () => {

  return (
    <form className='Form-container'>
      <div className='Form-control'>
        <input type='text' placeholder='First Name' className='Text-input Full-width' />
      </div>
      <div className='Form-control'>
        <input type='text' placeholder='Last Name' className='Text-input Full-width' />
      </div>
      <div className='Form-control'>
        <select placeholder='Role' className='Select-box Full-width'>
          <option value='admin'>Admin</option>
          <option value='partner'>Partner</option>
        </select>
      </div>
      <div className='Form-control'>
        <input type='email' placeholder='Email' className='Text-input Full-width' />
      </div>
      <div className='Form-control'>
        <select placeholder='Status' className='Select-box Full-width'>
          <option value='active'>Active</option>
          <option value='inactive'>InActive</option>
        </select>
      </div>
      <div className='Form-control' style={{ marginLeft: 16 }}>
        <Button onClick={() => { }}>ADD</Button>
      </div>
    </form>
  );
}

export default AddUser;