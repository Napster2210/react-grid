import React, { useState } from 'react';
import './Users.css';
import Button from '../Button';
import Modal from '../Modal';
import AddUser from './AddUser';

const Users = () => {

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className='Wrapper'>
        <div className='Header-container'>
          <h3>Users</h3>
          <div>
            <Button onClick={() => setShowModal(true)}>Add</Button>
            <input placeholder='Search...' className='Text-input' />
          </div>
        </div>

      </div>
      {
        showModal &&
        <Modal title='Add User' closeCallback={() => setShowModal(false)}>
          <AddUser />
        </Modal>
      }
    </>
  );
}

export default Users;