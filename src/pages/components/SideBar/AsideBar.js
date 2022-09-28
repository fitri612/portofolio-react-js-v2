import React, { memo } from 'react'
import './AsideBar.css'
import '../../../App.css'
import { NavLink, Link, useLocation } from 'react-router-dom'
import '@fortawesome/free-brands-svg-icons'

export const AsideBar = () => {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')

  return (
    <div className='aside'>
      <div className='logo'>
        <NavLink to={{ pathname: '/' }}>
          <span>ByMe</span>
        </NavLink>
      </div>

      <div className='nav-toggler'>
        <span></span>
      </div>

      <ul className='nav'>
        <li>
          <Link
            to={{ pathname: '/' }}
            className={splitLocation[1] === '' ? 'active' : 'item-nav'}
          >
            <i className='fa fa-home'></i>Home
          </Link>
        </li>
        <li>
          <NavLink
            to={'about'}
            className='item-nav section-control'
            name='about'
            style={({ isActive }) => ({
              color: isActive ? '#44CFCB' : '#000',
            })}
          >
            <i className='fa fa-user'></i>About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'experience'}
            className='item-nav section-control'
            name='experience'
            style={({ isActive }) => ({
              color: isActive ? '#44CFCB' : '#000',
            })}
          >
            <i className='fa-solid fa-clipboard'></i>Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'skills'}
            className='item-nav section-control'
            name='skills'
            style={({ isActive }) => ({
              color: isActive ? '#44CFCB' : '#000',
            })}
          >
            <i className='fa-solid fa-sliders'></i>Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'service'}
            className='item-nav section-control'
            name='services'
            style={({ isActive }) => ({
              color: isActive ? '#44CFCB' : '#000',
            })}
          >
            <i className='fa fa-list'></i>Interest
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'awards'}
            className='item-nav section-control'
            name='services'
            style={({ isActive }) => ({
              color: isActive ? '#44CFCB' : '#000',
            })}
          >
            <i className='fa-solid fa-gift'></i>Awards
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'porto'}
            className='item-nav section-control'
            name='portfolio'
            style={({ isActive }) => ({
              color: isActive ? '#44CFCB' : '#000',
            })}
          >
            <i className='fa fa-briefcase'></i>Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'contact'}
            className='item-nav section-control'
            name='contact'
            style={({ isActive }) => ({
              color: isActive ? '#44CFCB' : '#000',
            })}
          >
            <i className='fa fa-comments'></i>Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export const Navigation = memo(AsideBar)
