import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/components/header/nav.css';

function Nav(){
    return(
        <nav>
                <Link className="link" to="/">Sobre</Link>
                <Link className="link" to="/">Temas</Link>
                <Link className="link" to="/">Contato</Link>
        </nav>
    )
}
export default Nav;
