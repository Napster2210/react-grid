import React from 'react';
import './Users.css';
import Button from '../Button';
import useManageForm from '../../hooks/UserFormHook';
import { User } from '../../utils/constants';

interface Props {
  buttonLabel: string;
  callbackFn: (data: User) => void;
  userData?: User;
}
const UserForm = (props: Props) => {
  const { callbackFn = () => { }, userData = {}, buttonLabel } = props;
  const { inputs, handleInputChange, handleSubmit } = useManageForm(callbackFn, userData);
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
          <option value='select'>Select an option</option>
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
          <option value='select'>Select an option</option>
          <option value='active'>Active</option>
          <option value='inactive'>InActive</option>
        </select>
      </div>
      <div className='Form-control' style={{ marginLeft: 16 }}>
        <Button type='submit'>{buttonLabel}</Button>
      </div>
    </form>
  );
}

export default UserForm;
