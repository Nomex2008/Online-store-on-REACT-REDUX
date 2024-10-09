import React from 'react'
import { useSelector } from 'react-redux';
import SignUpForm from './SignUpForm';

import styles from '../../styles/User.module.css'

const UserForm = () => {
    const { showForm } = useSelector(({user}) => user);

  return (
    showForm ? ( <>
    <div className={styles.overlay}></div>
    <SignUpForm/>
    </>
    ) : (
    <></>
    )
  )
}

export default UserForm