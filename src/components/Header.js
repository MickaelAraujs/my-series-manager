import React from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{background: '#414042'}}>
                <Link className="navbar-brand" to='/'>MySeries Manager</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link className="nav-link" to='/'>Início</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/series'>Todas as Séries</Link>
                        </li>
                    </ul>
                    <Form />
                </div>
            </nav>
        </header>
    );
}

export default Header;