import './index.scss';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';

const Navigation = () => {

  const createLinkClass=({isActive}) => classNames ('navigation__link', isActive && '-active');

    return (
      <>
      <div className='navigation'>
        <ul className='navigation__links'>
          <li><NavLink to='/' className={createLinkClass} >Home</NavLink></li>
          <li><NavLink to='/about' className={createLinkClass} >About</NavLink></li>
        </ul>
      </div>
      </>
    )
}

export default Navigation;