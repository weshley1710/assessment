import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png'

const Sidebar = ({ handleLinkClick }) => {
  return (
    <div className="Sidebar">
      <ul>
        <img src={ Logo } className='logo'></img>
        <li><NavLink to='/' activeclassname="active" className='noUnderline' onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to='todo' activeclassname="active" className='noUnderline' onClick={handleLinkClick}>To Do List</NavLink></li>
        <li><NavLink to='cases' activeclassname="active" className='noUnderline' onClick={handleLinkClick}>Cases</NavLink></li>
        <li><NavLink to='events' activeclassname="active" className='noUnderline' onClick={handleLinkClick}>Events</NavLink></li>
        <li><NavLink to='dealers' activeclassname="active" className='noUnderline' onClick={handleLinkClick}>Dealers</NavLink></li>
        <li><NavLink to='backoffice' activeclassname="active" className='noUnderline' onClick={handleLinkClick}>Backoffice</NavLink></li>
        <li><NavLink to='remotesupport' activeclassname="active" className='noUnderline' onClick={handleLinkClick}>Remote Support</NavLink></li>
        <li><NavLink to='contact' activeclassname="active" className='noUnderline' onClick={handleLinkClick}>Contact</NavLink></li>
      </ul>
    </div>
  );
}

export default Sidebar;