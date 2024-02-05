import React from 'react';
import "./RightSidebar.css";
import Maincard from './Maincard';
import SmallCards from './SmallCards';

const LeftSidebar = () => {
  return (
    <div className='col-lg-3 L-sidebar d-lg-block d-none'>
        <div className='left-innerbar'>
        <div className='leftbar-h ms-1 '>
           
           <p className='ms-3 pt-3 pb-0 mb-1'> LIVE CASINO GAMES
               

           </p>
     </div>
     <Maincard/>
     <div className='row'>
         <SmallCards/>

     </div>

        </div>
        
        

    </div>
  )
}

export default LeftSidebar