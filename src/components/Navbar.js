import '../styles/navbar.css'
import {HashLink as Link} from 'react-router-hash-link'

export default function Navbar() {
    return <nav className="navbar">
       <Link to='#home' className='site-title' smooth><img src="https://i.ibb.co/zsb9M9m/Untitled-Artwork-3.png" alt="Boba cup" border="0" className='boba-cup'/></Link>
        <ul>
            <li>
                <Link to='#events' className='sub-title' smooth>About</Link>
            </li>
            <li>
                <Link to='#events' className='sub-title' smooth>Events</Link>
            </li>
            <li>
                <Link to='#events' className='sub-title' smooth>Calendar</Link>
            </li>
            <li>
                <Link to='#events' className='sub-title' smooth>Contact</Link>
            </li>
            <li>
                <Link to='#events' className='sub-title' smooth>Join!</Link>
            </li>
        </ul>
    </nav>
}