import { Link } from 'react-router-dom';
import './Nav.css';

function NavTabs() {    
    return (
        <nav className="navbar">
            <h1 className="name"> zambrano </h1>
            <div className='navbar-links'>
                <Link to="/" className="link">aboutMe</Link>
                <Link to="/Contact" className="link">contact</Link>
                <Link to="/Portfolio" className="link">portfolio</Link>            
            </div>
        </nav>    
    )
}

export default NavTabs;