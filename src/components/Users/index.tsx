import React from 'react';
import './Users.css';
import Button from '../Button';
import Modal from '../Modal';
import AddUser from './AddUser';

const Users = () => {
  return (
    <>
      <div className='Wrapper'>
        <div className='Header-container'>
          <h3>Users</h3>
          <div>
            <Button onClick={() => { console.log('Clicked!') }}>Add</Button>
            <input placeholder='Search...' className='Text-input' />
          </div>
        </div>

      </div>
      <Modal title='Add User'>
        <AddUser />
      </Modal>
    </>
  );
}

export default Users;