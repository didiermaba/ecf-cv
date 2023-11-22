import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../../components/Navigation';

const NotFound = () => {
    return (
        <div className='notFound'>
            <Navigation />
            <div className="notFound-countent">
                <h2>Erreur 404</h2>
                <NavLink to="/">
                    <h3>Retour à l'accueil <i className='fas fa-home'></i></h3>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;