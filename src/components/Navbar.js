import '../styles/navbar.css'
import {HashLink as Link} from 'react-router-hash-link'

export default function Navbar() {
    return <nav className="navbar">
        <a href="/" className="site-title">
            Home
        </a>
        <ul>
            <li>
                <a href="/About">About</a>
            </li>
            <li>
                <Link to='#events' >Events</Link>
            </li>
            <li>
                <a href="/Calendar">Calendar</a>
            </li>
            <li>
                <a href="/Contact">Contact</a>
            </li>
            <li>
                <a href="/Join">Join!</a>
            </li>
        </ul>
    </nav>
}