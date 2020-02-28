import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{background: '#231F20'}}>
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
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Buscar Série" aria-label="Search" />
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;