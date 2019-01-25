import React from 'react';
import Cryptotickets_logo from './Cryptotickets_logo';
import Search from './Search';
import TopLinks from './TopLinks';

const Navbar = ()=>{
    return(
        <header className="header">
            <Cryptotickets_logo />
            <Search />
            <TopLinks />
        </header>
    )
}

export default Navbar;