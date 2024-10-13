import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SignUpForm from './SignUpForm';
import { toggleForm, toggleFormType } from '../../features/user/userSlice';

import styles from '../../styles/User.module.css'
import UserLoginForm from './UserLoginForm';

const UserForm = () => {
  const dispatch = useDispatch()
  const { showForm, formType } = useSelector(({user}) => user);

  const closeForm = () => dispatch(toggleForm(false))
  const toggleCurrentFormType = (type) => dispatch(toggleFormType(type))

  return (
    showForm ? ( <>
    <div className={styles.overlay} onClick={closeForm}></div>
    {formType === 'signup' ? <SignUpForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm}/> 
    : <UserLoginForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm}/>}
    </>
    ) : (
    <></>
    )
  )
}

export default UserForm