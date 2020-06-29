import React, { useState } from 'react';

// Import Router
import { Link } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';
// Import Styleds;
import { NavBar, NavContent, NavMenu } from './styles';

export default function Navbar() {

    const [ nav, SetNav ] = useState(false);

    return (
        <NavBar>
            <NavContent>
                <div className="brand">
                    <div className="logo">
                        Repository List
                        {/* <Link to="/"><img src={Logo} /></Link> */}
                    </div>
                </div>
                <div className="menu-expand" onClick={(e) => SetNav(true)}>
                    <FiMenu />
                </div>
                <NavMenu open={nav}>
                    <ul>
                        <li><Link onClick={() => SetNav(false) } to="/">Main</Link></li>
                        <li><Link onClick={() => SetNav(false) } to="/saves">Saved Repositories</Link></li>
                    </ul>
                    <button onClick={(e) => SetNav(false)} type="button">&times;</button>
                </NavMenu>
            </NavContent>
        </NavBar>
    );
}
