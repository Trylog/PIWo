import React, { useState } from 'react';
import './hotelPage.css'
import logoImage from '../Assets/logo.svg';
const HotelPage = () => {

    const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => {
      setDialogOpen(true);
    };
  
    const closeDialog = () => {
      setDialogOpen(false);
    };

    return(
        <>
        <nav className="top-fixed-navigation2">
          <img className="logo2" src={logoImage} alt="Logo" />
          <ul className="nav-links2">
            <li><b>Find Offers</b></li>
            <li>Add new offers</li>
            <li>My offers</li>
            <li>Favorites</li>
            <button className="button2 primary2">Log out</button>
          </ul>
        </nav>
  
        <p className="title-large2">Serene Retreat</p>
  
        <section className="grid2">
          <div className="card-image2"></div>
          <article className="text12">
            <p><b>Location: </b>Madrid</p>
            <p><b>Local category: </b>★★★★☆</p>
            <p><b>Price: </b>70€/room/night</p>
            <p><b>Description: </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec leo ligula. Etiam fermentum est in euismod egestas. Curabitur at condimentum ligula. Phasellus nunc velit, facilisis fermentum congue ac, cursus at leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam nec sapien vitae neque scelerisque tempus. Vestibulum hendrerit tellus ut pulvinar feugiat. Nullam iaculis vitae justo sit amet tempus. Nam nunc nunc, porttitor sed turpis quis, feugiat egestas leo. Phasellus consequat magna ante, ac aliquam felis convallis sit amet. Sed massa lorem, iaculis ac vestibulum ac, tempus a tortor. Ut posuere ipsum nec condimentum vehicula. Curabitur orci velit, aliquam vel arcu quis, semper congue ligula.</p>
            <div className="buttons2">
              {isDialogOpen && (
                <dialog className="dialog2" id="dialog" open>
                  <p className="title-large2">Edit</p>
                  <p className="text-small2">You are editing the [hotel name] hotel</p>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                      <div style={{ padding: '30px' }}>Hotel name</div>
                      <div style={{ margin: '30px', padding: '10px', border: '2px solid #50614A', borderRadius: '24px' }}>Serene Retreat</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                      <div style={{ padding: '30px' }}>Hotel name</div>
                      <div style={{ margin: '30px', padding: '10px', border: '2px solid #50614A', borderRadius: '24px' }}>Serene Retreat</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                      <div style={{ padding: '30px' }}>Hotel name</div>
                      <div style={{ margin: '30px', padding: '10px', border: '2px solid #50614A', borderRadius: '24px' }}>Serene Retreat</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', paddingRight: '40px' }}>
                      <button className="button2" id="cancel" onClick={closeDialog}>Cancel</button>
                      <button className="button2 primary2">Edit</button>
                    </div>
                  </div>
                </dialog>
              )}
              <button className="button2 primary2" id="edit" onClick={openDialog}>Edit</button>
              <button className="button2 primary2">Remove</button>
            </div>
            <div className="galery2">
              <div className="image2"></div>
              <div className="image2"></div>
            </div>
          </article>
        </section>
      </>
    )
}

export default HotelPage;