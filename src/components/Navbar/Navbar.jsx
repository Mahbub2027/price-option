import { useState } from "react";
import Link from "../Link/Link";
import {FiMenu} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' },
      ];

      const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="md:hidden text-2xl bg-gray-700 p-3  text-white" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <FiMenu className=""></FiMenu>
                }
            
            </div>
            <ul className={`md:flex bg-gray-700 text-white absolute md:static duration-1000 px-10 ${open ? 'top-12' : '-top-60'}`}>
              
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default Navbar;