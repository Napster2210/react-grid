import React from 'react';
import './Users.css';
import { API_URL } from '../../utils/constants';
import UserForm from './UserForm';
import { User } from '../../utils/constants';

interface Props {
  onSuccess: () => void;
  userId: string;
  data: User;
}

const EditUser = (props: Props) => {

  const updateUser = async (data: User) => {
    const response = await fetch(`${API_URL}/users/${props.userId}`, {
      method: 'PUT',
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
      alert('User updated successfully!');
      props.onSuccess();
    } else {
      alert('Something went wrong! Please try again.');
    }
  }

  return (
    <UserForm
      buttonLabel={'UPDATE'}
      callbackFn={updateUser}
      userData={props.data}
    />
  );
}

export default EditUser;