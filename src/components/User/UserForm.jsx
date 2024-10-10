import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SignUpForm from './SignUpForm';
import { toggleForm } from '../../features/user/userSlice';

import styles from '../../styles/User.module.css'

const UserForm = () => {
  const dispatch = useDispatch()
  const { showForm } = useSelector(({user}) => user);

  const closeForm = () => dispatch(toggleForm(false))

  return (
    showForm ? ( <>
    <div className={styles.overlay} onClick={closeForm}></div>
    <SignUpForm closeForm={closeForm}/>
    </>
    ) : (
    <></>
    )
  )
}

export default UserForm