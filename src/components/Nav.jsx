import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import {link} from '../data'


const Nav = () => {
    const [isNavshowing, setIsNavshowing] = useState(false)
    return (
        <div className="container">
           <div className="nav__container">
            <Link to="/" onClick={() => setIsNavshowing(prev => !prev)} className="nav__logo" ><h5>Rehoboth<span>Media</span></h5></Link>
                <ul className={`nav__links ${isNavshowing ? 'show__nav' : 'hide__nav'}`}>
                    {
                        link.map(({name, path}, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({isActive}) => isActive? 'active-nav' : ''}
                                    onClick={() => setIsNavshowing(prev => !prev)}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className='nav__toggle-button' onClick={() => setIsNavshowing (prev => !prev)}>
                    {
                        isNavshowing ? <MdOutlineClose /> : <GoThreeBars/>
                    }
                </button>
           </div>
        </div>
    )
}

export default Nav