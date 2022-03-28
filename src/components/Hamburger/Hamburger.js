import React, { useState } from 'react';
import {
    NavHamburger,
    NavHamburgerLine,
    Ul,
    NavHamb
} from './HamburgerStyle';

const links = {
    Home: 'Home',
    Team: 'Team'
}

const Hamburger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <NavHamburger open={open} onClick={() => setOpen(!open)}>
                <NavHamburgerLine />
                <NavHamburgerLine />
                <NavHamburgerLine />
            </NavHamburger>
            <Ul open={open}>
                <NavHamb activeclassname="active" to="/" onClick={() => setOpen(!open)} >{links.Home}</NavHamb>
                <NavHamb activeclassname="active" to="/team" onClick={() => setOpen(!open)}>{links.Team}</NavHamb>
            </Ul>
        </>
    )
}

export default Hamburger;