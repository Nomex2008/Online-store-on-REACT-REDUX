import React from 'react'
import { useSelector } from 'react-redux';
import SignUpForm from './SignUpForm';

const UserForm = () => {
    const { showForm } = useSelector(({user}) => user);

  return (
    showForm ? <SignUpForm/> : <></>
  )
}

export default UserForm