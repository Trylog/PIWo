import React from 'react';
import './home.css';
import arrowImage from '../Assets/Arrow.svg';
import logoImage from '../Assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useRecords } from '../Assets/records.js';

const HotelCards = () => {
    const { records } = useRecords();

    const navigate = useNavigate();

    const goToSubpage = () => {
        navigate('/hotelPage');
    };

    return (
        <>
            {records && records.map((record, index) => (
                <article className="hotel-card" key={index}>
                    <div className="card-image">
                        <p className="chip">{record.cityName}</p>
                        <div className="chip-heart"><div id="heart"></div></div>
                    </div>
                    <p className="text-middle">{record.hotelName}</p>
                    <p className="text-small">{record.textSmall}</p>
                    <div className="hotel-card-footer">
                        <p className="text-middle">{record.stars}</p>
                        <p className="text-middle">{record.price}</p>
                    </div>
                    <button onClick={goToSubpage} className="view-offer-button">View offer<img src={arrowImage} alt="arrow"/></button>
                </article>
            ))}
        </>
    );
};

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="top-fixed-navigation">
                <img className="logo" src={logoImage} alt="Logo"/>
                <ul className="nav-links">
                    <li><b>Find Offers</b></li>
                    <li onClick={() => navigate('/addNewOffer')}>Add new offers</li>
                    <li>My offers</li>
                    <li>Favorites</li>
                    <button className="button primary" onClick={() => navigate('/login')}>Log in</button>
                </ul>
            </nav>

            <p className="title-large">Welcome, your tranquility oasis awaits</p>

            <section id="browse" className="browse-section">
                <p className="title-middle">Explore the hotels</p>
                <input className="searchbar" placeholder="Search by hotel name, place etc."/>
                <section className="grid hotel-cards">
                    <HotelCards />
                </section>
            </section>
        </>
    );
};

export default Home;
