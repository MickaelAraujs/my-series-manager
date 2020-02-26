import React from 'react';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{background: '#231F20'}}>
                <a className="navbar-brand" href="#">MySeries Manager</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">Início</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Todas as Séries</a>
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