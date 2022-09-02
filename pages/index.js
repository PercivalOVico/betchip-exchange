import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import styles from '../styles/Home.module.css'
import Guest from './guest/guest'

export default function Home() {
  return (
    <Fragment >
     <Guest />
    </Fragment>
  )
}
