import React from 'react';

function Form() {

    const handleSubmit = event => event.preventDefault();
    
    return (
        <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar Série" aria-label="Search" />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
        </form>
    );
}

export default Form;