import React from 'react';
import Cryptotickets_logo from './Cryptotickets_logo';
import Search from './Search';
import TopLinks from './TopLinks';


const Navbar = ()=>{

    //console.log("window.location", window.location.pathname);
    if(window.location.pathname === '/'){
        return (
            <div className="home_logo">
                <Cryptotickets_logo />
            </div>
            );
    } else {
        return(
        <header className="header" id="main_header">
            <Cryptotickets_logo />
            <Search />
            <TopLinks />
        </header>
      )
    }
    
}

export default Navbar;