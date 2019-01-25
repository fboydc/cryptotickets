import React from 'react';
import {Link} from 'react-router-dom';

const TopLinks = ()=>{
    return (
        <nav className="nav_items">
            <Link to="/Browse" className="link">Browse Event</Link>
            <Link to="/Create" className="link">Create Event</Link>
            <Link to="/Me" className="link">Me</Link>
        </nav>
    )
}

export default TopLinks;