import React, { useState } from 'react';
import './Users.css';
import { API_URL } from '../../utils/constants';
import UserForm from './UserForm';
import { User } from '../../utils/constants';
import Loading from '../Loading';
/**
 * Interface for EditUser
 *
 * @interface Props
 */
interface Props {
  onSuccess: () => void;
  userId: string;
  data?: User;
}
/**
 * EditUser component
 *
 * @param {Props} props EditUser Props
 * @returns EditUser
 */
const EditUser = (props: Props) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  /**
   * To update a user details into DB
   *
   * @param {User} data User data to be updated
   */
  const updateUser = async (data: User) => {
    setIsLoading(true);
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
    })
      .then(res => res.json())
      .then(data => { return data; })
      .catch(error => {
        alert('Error while updating data!');
        console.error('Error', error);
      })
      .finally(() => setIsLoading(false));

    if (response) {
      alert('User updated successfully!');
      props.onSuccess();
    } else {
      alert('Something went wrong! Please try again.');
    }
  }

  return (
    <>
      <UserForm
        buttonLabel={'UPDATE'}
        callbackFn={updateUser}
        userData={props.data}
      />
      {
        isLoading &&
        <Loading loadingText='Updating user...' />
      }
    </>
  );
}

export default EditUser;