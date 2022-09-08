import React, { Fragment, useContext, useEffect, useState } from 'react'
import GuestLandingPageCarusoleHeader from '../../components/guest/guestLandingPageCarusoleHeader'
import GuestLandingPageCarusoleSlider from '../../components/guest/guestLandingPageCarusoleSlider'
import GuestFooter from '../../components/guest/guestLayout/guestFooter'
import GuestNewsBanner from '../../components/guest/guestNewsBanner'
import GuestP2PSteps from '../../components/guest/guestP2PSteps'
import P2PTradingTable from '../../components/sharedComponents/P2PTradingTable'
import GuestTopFiveCrypto from '../../components/guest/guestTopFiveCrypto'
import Guest from './guest'



function GuestLandingPage() {



  return (
    <Fragment>
    <Guest>
            <GuestLandingPageCarusoleHeader />
            <GuestLandingPageCarusoleSlider />
            <GuestTopFiveCrypto />
            <P2PTradingTable />
            <GuestNewsBanner />
            <GuestP2PSteps />
            <GuestFooter />
    </Guest>
    </Fragment>

  )
}

export default GuestLandingPage