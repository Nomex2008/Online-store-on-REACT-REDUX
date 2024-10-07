import React from 'react'

import styles from '../../styles/User.module.css'

const SignUpForm = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.close}>
            <svg className={styles.icon}>
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}/>
            </svg>
        </div>
        
        <div className={styles.title}>Sign Up</div>

        <form className={styles.form}>
            <div className={styles.group}>
                <input
                type="email" 
                placeholder='Your email'
                name='email'
                value=''
                autoComplete='off'
                onChange={() => {}}
                required
                />
            </div>

            <div className={styles.group}>
                <input
                type="name" 
                placeholder='Your name'
                name='name'
                value=''
                autoComplete='off'
                onChange={() => {}}
                required
                />
            </div>

            <div className={styles.group}>
                <input
                type="password" 
                placeholder='Your password'
                name='password'
                value=''
                autoComplete='off'
                onChange={() => {}}
                required
                />
            </div>

            <div className={styles.group}>
                <input
                type="avatar" 
                placeholder='Your avatar'
                name='avatar'
                value=''
                autoComplete='off'
                onChange={() => {}}
                required
                />
            </div>

            <div className={styles.link}>I already have an account</div>

            <button type='submit' className={styles.submit}>
                Create an account
            </button>
        </form>
    </div>
  )
}

export default SignUpForm