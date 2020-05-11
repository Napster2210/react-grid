import React, { useState } from 'react';
import './Users.css';
import { API_URL } from '../../utils/constants';
import UserForm from './UserForm';
import { User } from '../../utils/constants';
import Loading from '../Loading';

interface Props {
  onSuccess: () => void;
}

const AddUser = (props: Props) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addUser = async (data: User) => {
    setIsLoading(true);
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
    })
      .then(res => res.json())
      .then(data => { return data; })
      .catch(error => {
        alert('Error while adding data!');
        console.error('Error', error);
      })
      .finally(() => setIsLoading(false));
    if (response) {
      alert('User created successfully!');
      props.onSuccess();
    } else {
      alert('Something went wrong! Please try again.');
    }
  }

  return (
    <>
      <UserForm
        buttonLabel={'ADD'}
        callbackFn={addUser}
      />
      {
        isLoading &&
        <Loading loadingText='Adding user...' />
      }
    </>
  );
}

export default AddUser;