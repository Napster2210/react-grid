import React, { useState, useEffect } from 'react';
import './Users.css';
import Button from '../Button';
import Modal from '../Modal';
import AddUser from './AddUser';
import Table from '../Table';
import { getFormattedDate, capitalize } from '../../utils/helper';
import { User, API_URL } from '../../utils/constants';
import EditUser from './EditUser';
import Loading from '../Loading';

interface Column {
  id: 'name' | 'role' | 'createdAt' | 'status' | 'action';
  label: string;
  format?: (value: any) => string;
}

const columns: Column[] = [
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'role',
    label: 'Role',
    format: (value: string) => capitalize(value)
  },
  {
    id: 'createdAt',
    label: 'Created',
    format: (value: Date) => getFormattedDate(value)
  },
  {
    id: 'status',
    label: 'Status',
    format: (value: string) => capitalize(value)
  },
  {
    id: 'action',
    label: 'Action'
  }
];

const Users = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [activeId, setActiveId] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setIsLoading(true);
    await fetch(`${API_URL}/users/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: "cors",
    })
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => {
        alert('Error while fetching data!');
        console.error('Error', error);
      })
      .finally(() => setIsLoading(false));
  }

  const handleEdit = (user: any) => {
    setActiveId(user._id);
    setSelectedUser({
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      email: user.email,
      status: user.status
    });
    setShowEditModal(true);
  }

  const handleDelete = async (userId: string) => {
    setActiveId(userId);
    if (window.confirm('Are you sure you want to delete this user?')) {
      setIsLoading(true);
      await fetch(`${API_URL}/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: "cors",
      })
        .then(response => response.json())
        .then(data => { return data; })
        .catch(error => {
          alert('Error while deleting data!');
          console.error('Error', error);
        })
        .finally(async () => {
          await getUsers();
          setIsLoading(false)
        });
    } else {
      setActiveId('');
    }
  }

  const onModalClose = async (modalType: string) => {
    await getUsers();
    if (modalType === 'Add') {
      setShowAddModal(false);
    }
    if (modalType === 'Edit') {
      setShowEditModal(false);
    }
  }

  return (
    <>
      <div className='Wrapper'>
        <div className='Header-container'>
          <h3>Users</h3>
          <div>
            <Button onClick={() => setShowAddModal(true)}>Add</Button>
            {/* <input placeholder='Search...' className='Text-input' /> */}
          </div>
        </div>
      </div>
      {
        showAddModal &&
        <Modal title='Add User' closeCallback={() => setShowAddModal(false)}>
          <AddUser onSuccess={() => onModalClose('Add')} />
        </Modal>
      }
      {
        showEditModal &&
        <Modal title='Edit User' closeCallback={() => setShowEditModal(false)}>
          <EditUser
            onSuccess={() => onModalClose('Edit')}
            userId={activeId}
            data={selectedUser}
          />
        </Modal>
      }
      {users && users.length > 0 &&
        <Table
          columns={columns}
          rows={users}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      }
      {
        isLoading &&
        <Loading loadingText={'Fetching users...'} />
      }
    </>
  );
}

export default Users;