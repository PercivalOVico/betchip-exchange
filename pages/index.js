import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useContext, useEffect, useState  } from 'react'
import styles from '../styles/Home.module.css'
import GuestLandingPage from './guest/guestLandingPage'


export default function Home() {

   
  return (
    <Fragment >
     <GuestLandingPage />
    </Fragment>
  )
}
