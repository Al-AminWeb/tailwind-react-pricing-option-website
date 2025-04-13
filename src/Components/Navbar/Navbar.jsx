import React, {useState} from 'react';
import {Menu} from "lucide-react";
import {X} from 'lucide-react';

const navigationData = [{id: 1, name: 'Home', path: '/'}, {id: 2, name: 'About', path: '/about'}, {
    id: 3, name: 'Services', path: '/services'
}, {id: 4, name: 'Blog', path: '/blog'}, {id: 5, name: 'Contact', path: '/contact'},];


const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (<div>
        <nav className="flex items-center justify-between mx-10  text-black">
               <span className="flex" onClick={() => setOpen(!open)}>
            {open ? <X className='md:hidden'></X> : <Menu className="md:hidden"/>}
                   <ul className={`md:hidden absolute
             ${open ? 'top-8' : '-top-40'}
             bg-amber-200`}>
                {navigationData.map(route => <li><a href={route.path}>{route.name}</a></li>)}
            </ul>
            <h3 className="ml-4">My Navbar</h3>
            </span>
            <button className="btn">Sign In</button>
        </nav>
    </div>);
};

export default Navbar;
