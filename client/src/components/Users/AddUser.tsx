import React from 'react';
import './Users.css';
import { API_URL } from '../../utils/constants';
import UserForm from './UserForm';
import { User } from '../../utils/constants';

interface Props {
  onSuccess: () => void;
}

const AddUser = (props: Props) => {

  const addUser = async (data: User) => {
    const response = await fetch(`${API_URL}/users/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.role,
        email: data.email,
        status: data.status,
      }),
      mode: "cors",
    }).then(data => {
      return data;
    }).catch(error => {
      return error;
    });

    if (response.status === 200) {
      alert('User created successfully!');
      props.onSuccess();
    } else {
      alert('Something went wrong! Please try again.');
    }
  }

  return (
    <UserForm
      buttonLabel={'ADD'}
      callbackFn={addUser}
    />
  );
}

export default AddUser;