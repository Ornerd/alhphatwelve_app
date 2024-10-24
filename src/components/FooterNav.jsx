import React from 'react';
import HomeIcon from './IconsSVG/navIconsSVG/HomeIcon';
import EventsIcon from './IconsSVG/navIconsSVG/EventsIcon';
import SpeakersIcon from './IconsSVG/navIconsSVG/SpeakersIcon';
import ReportsIcon from './IconsSVG/navIconsSVG/ReportsIcon';
import NavLink from './NavLink';
import ProfileIcon from './IconsSVG/navIconsSVG/ProfileIcon';


const FooterNav = () => {
    const navItems = [
        {
            linkName: 'Home',
            linkPath: '/',
            iconSvg: <HomeIcon/>,
        }, 
        {
            linkName: 'Events',
            linkPath: '/events',
            iconSvg: <EventsIcon/>,
        }, 
        {
            linkName: 'Speakers',
            linkPath: '/speakers',
            iconSvg: <SpeakersIcon/>,
        }, 
        {
            linkName: 'Reports',
            linkPath: '/reports',
            iconSvg: <ReportsIcon/>,
        },       
        {
            linkName: 'Profile',
            linkPath: '/profile',
            iconSvg: <ProfileIcon/>,
        }       
    ]

  return (
    <footer className='footer-nav'>
        {
        navItems.map((item,index)=>
            index === 0?  
            <div className="active-link">
                <NavLink
                key={index}{...item}
                />
            </div>
        :
            <NavLink
            key={index}{...item}
            />)
        }
    </footer>
  )
}

export default FooterNav