import React, { createContext, useState, useContext } from 'react';

const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
    const [records, setRecords] = useState([
        { cityName: 'Florence', hotelName: 'Harmony Hideaway Hotel', stars: '★★★★★', price: '100€/room', 
          textSmall: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.' },
        { cityName: 'Madrid', hotelName: 'Serene Retreat', stars: '★★★★☆', price: '70€/room', 
          textSmall: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.' },
        { cityName: 'Sintra', hotelName: 'Palm Springs', stars: '★★★★☆', price: '65€/room', 
          textSmall: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.' },
    ]);

    const addRecord = (newRecord) => {
        setRecords([...records, newRecord]);
    };

    return (
        <RecordContext.Provider value={{ records, addRecord }}>
            {children}
        </RecordContext.Provider>
    );
};

export const useRecords = () => {
    return useContext(RecordContext);
};

export default RecordContext;