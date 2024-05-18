import React from 'react';


const MapComponent = ({ text }) => (
  <div className='mapcontent'>
    <iframe style={{ height: '50vh', width: '100vw' }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13982.32830879452!2d78.7831742!3d28.8215256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbb02256b2c3%3A0x735c8a566007b885!2sJ.P.%20Tech%20Institute%20-%20Best%20Computer%20Institute%2FBest%20Tally%20Institute%2FO%20Level%2FFull%20Stack%20Development%2FHardware%20%26%20Networking!5e0!3m2!1sen!2sin!4v1715311597650!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
  </div>
);

export default MapComponent;
