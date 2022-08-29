import React, { Fragment } from 'react'
import Image from 'next/image'

const ClientRecieveCryptoModal = ({ setAction, selectedToken, walletAddress }) => {
  return (
    <Fragment>
      
          <img src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${0xF91A11Db037162Eaa1A27B52F707d2DA7E486DE4}`} />
    </Fragment>
  )
}

export default ClientRecieveCryptoModal