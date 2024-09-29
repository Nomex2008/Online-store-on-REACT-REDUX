import React from 'react'
import styles from '../../styles/Footer.module.css'

import {ROUTERS} from'../../utils/routes.js'

import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg'

const Footer = () => {
  return (
    <div>
      <section className={styles.footer}>
        <div className={styles.logo}>
          <Link to={ROUTERS.HOME}>
            <img src={logo} alt="Stuff" />
          </Link>
        </div>

        <div className={styles.rights}>
          Developed by <a target='_blank' rel='noreferrer' href="https://github.com/Nomex2008">Nomex</a>
        </div>

        <div className={styles.socials}>
          <a 
          target='_blank' rel='noreferrer' 
          href="https://instagram.com">
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}></use>
            </svg>
          </a>

          <a 
          target='_blank' rel='noreferrer' 
          href="https://facebook.com">
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}></use>
            </svg>
          </a>

          <a 
          target='_blank' rel='noreferrer' 
          href="https://youtube.com">
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}></use>
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Footer