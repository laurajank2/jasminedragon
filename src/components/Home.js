import '../styles/App.css';
import '../styles/home.css';
import React from 'react'
export default function Events() {
    return <div className="container" id='home'>
        
        <header className='top-title'>
          The Jasmine 
        </header>
        <div className='column'>
          <header className='main-title'>
            Dragon 
          </header>
          <p className='small-title'>
            Boba @ Brown U
          </p>
          <button className='join-button'>Join Today!</button>
        </div>
        <div className='column'>
          <img className='main-logo' src="https://i.ibb.co/VmdfkSg/DALL-E-2023-01-26-20-04-31-Cute-dragon-drinking-milk-tea-with-boba-clip-art-4.png" alt="Cute dragon drinking boba tea" border="0"/>
        </div>
        
    </div>
}