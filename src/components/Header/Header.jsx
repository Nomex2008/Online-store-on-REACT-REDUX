import React from 'react'

import styles from '../../styles/Header.module.css'

import {ROUTERS} from'../../utils/routes.js'

import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg'
import avatar from '../../images/avatar.jpg'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="logo">
        <Link to={ROUTERS.HOME}>
          <img src={logo} alt=" " />
        </Link>

        <div className="info">
          <div className="user">
            <div className="avatar" style={{backgroundImage: `url(${avatar})`}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header