import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/components/header/modal-menu.css';

function ModalMenu(){
    return(
        <nav className="modal">
                <Link className="link" to="/festa-casamento">Casamento</Link>
                <Link className="link" to="/festa-meninas">Meninas</Link>
                <Link className="link" to="/festa-meninos">Meninos</Link>
        </nav>
    )
}
export default ModalMenu;