import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecords } from '../Assets/records';
import './addNewOffer.css';

const AddNewOffer = () => {
    const {addRecord } = useRecords();
    const navigate = useNavigate();

    const [newRecord, setNewRecord] = useState({
        cityName: '',
        hotelName: '',
        stars: '',
        price: '',
        textSmall: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewRecord({ ...newRecord, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addRecord(newRecord);
        navigate('/');
    };

    return (
        <div className="add-new-offer">
            <h1>Add New Hotel Offer</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>City Name:</label>
                    <input type="text" name="cityName" value={newRecord.cityName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Hotel Name:</label>
                    <input type="text" name="hotelName" value={newRecord.hotelName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Stars:</label>
                    <input type="text" name="stars" value={newRecord.stars} onChange={handleChange} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" name="price" value={newRecord.price} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="textSmall" value={newRecord.textSmall} onChange={handleChange} required />
                </div>
                <button type="submit">Add Offer</button>
            </form>
        </div>
    );
};

export default AddNewOffer;
