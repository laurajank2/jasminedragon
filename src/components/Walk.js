import '../styles/Walk.css';
import WalkImg from './../walk.svg';
import React from 'react';
export default function Walk() {
    return <div className='container'>
        <img className='walk' src={WalkImg} />
    </div>
}