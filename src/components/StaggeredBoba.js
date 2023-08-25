import '../styles/StaggeredBoba.css';
import React from 'react';
export default function StaggeredBoba() {
    return <div className='big-container'>
        <div className="container-between">
            <img className='boba' src="https://i.ibb.co/vdGXbpR/boba.png" alt="boba" border="0" />
            <img className='boba' src="https://i.ibb.co/vdGXbpR/boba.png" alt="boba" border="0" />
            <img className='boba' src="https://i.ibb.co/vdGXbpR/boba.png" alt="boba" border="0" />
            <img className='boba' src="https://i.ibb.co/vdGXbpR/boba.png" alt="boba" border="0" />
         </div>
        <div className="container-even">
            <img className='boba' src="https://i.ibb.co/vdGXbpR/boba.png" alt="boba" border="0" />
            <img className='boba' src="https://i.ibb.co/vdGXbpR/boba.png" alt="boba" border="0" />
            <img className='boba' src="https://i.ibb.co/vdGXbpR/boba.png" alt="boba" border="0" />
        </div>
    </div>
}