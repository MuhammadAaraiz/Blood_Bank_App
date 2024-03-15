import React from 'react'
import { Navbar_Component } from '../components/Navbar_Component'
import { Home } from './Home'
import { Footer } from '../components/Footer'

const Main_Components = () => {
    return (
        <div style={{ backgroundColor: 'aliceblue' }}>
            <Navbar_Component />
            < Home />
            <br />
            <Footer />
        </div>
    )
}
export { Main_Components }
