import React, {useState} from 'react';
import {Menu} from "lucide-react";
import { X } from 'lucide-react';

const navigationData = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Blog', path: '/blog' },
    { id: 5, name: 'Contact', path: '/contact' },
];


const Navbar = () => {
    const [open,setOpen]= useState(false)

    return (
        <div>
            <nav className="flex items-center justify-between mx-10">
               <span className="flex" onClick={()=>setOpen(!open)}>
        {open? <X></X> :  <Menu className="md:hidden"/>}

                <h3 className="ml-4">My Navbar</h3>
               </span>
                <ul className="flex gap-2">
                    {
                        navigationData.map(route => <li><a href={route.path}>{route.name}</a></li>)
                    }
                </ul>

                <button className="btn">Sign In</button>
            </nav>
            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li><a href="/">Home</a></li>*/}
            {/*        <li><a href="/about">About</a></li>*/}
            {/*        <li><a href="/blog">Blog</a></li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
        </div>
    );
};

export default Navbar;
