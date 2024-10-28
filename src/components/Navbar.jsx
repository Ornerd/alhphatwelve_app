import React, { useEffect, useState } from 'react';
import HomeIcon from './IconsSVG/navIconsSVG/HomeIcon';
import EventsIcon from './IconsSVG/navIconsSVG/EventsIcon';
import SpeakersIcon from './IconsSVG/navIconsSVG/SpeakersIcon';
import ReportsIcon from './IconsSVG/navIconsSVG/ReportsIcon';
import NotificationsIcon from './IconsSVG/navIconsSVG/NotificationsIcon';
import MessageIcon from './IconsSVG/navIconsSVG/MessageIcon';
import SettingsIcon from './IconsSVG/navIconsSVG/SettingsIcon';
import CollapseIcon from './IconsSVG/navIconsSVG/CollapseIcon';
import fullLogo from '../assets/images/Logo.png';
import semiLogo from '../assets/images/Logo Box.png';
import NavLink from './NavLink';
import placeholderAvatar from '../assets/images/Avatar.png'
import HamSvg from './IconsSVG/otherIconsSVG/HamSvg';
import CloseSvg from './IconsSVG/otherIconsSVG/CloseSvg';

const Navbar = ({collapsed, handleCollapse, toggleDarkModeFunction}) => {

    const [windowSize, setWindowSize] = useState (window.innerWidth);
    const [clicked, setClicked] = useState(false);

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
            linkName: 'Notifications',
            linkPath: '/notifications',
            iconSvg: <NotificationsIcon/>,
        }, 
        {
            linkName: 'Messages',
            linkPath: '/messages',
            iconSvg: <MessageIcon/>,
        }, 
        {
            linkName: 'Settings',
            linkPath: '/settings',
            iconSvg: <SettingsIcon/>,
        }, 
       
    ]

    useEffect(()=> {  
        const handleScreenResize= ()=> { //the lengths I go to get responsive layouts ehh! shoutout to ksforgeeks.org though for this idea
          setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', handleScreenResize)
        return ()=> {
          window.removeEventListener('resize', handleScreenResize)
        }
      }, [])

    useEffect(()=>{
            document.body.classList.toggle('no-scroll');     
    }, [clicked])

    const toggleDarkMode =() => {
        document.body.classList.toggle('dark-mode');
        toggleDarkModeFunction();
    } 

  return (
    <>
    {windowSize > 700? 
    (<div className='nav-wrapper'>
        <img src={collapsed? semiLogo : fullLogo} alt="logo" className='logo' />     
        <nav>
            {
            navItems.map((item,index)=> 
                <NavLink
                key={index}{...item}
                />)
            }
        </nav>
        <button className={`collapse-button ${collapsed? 'collapsed' : ''}`} onClick={handleCollapse}>
            <div><CollapseIcon/></div>
            <p>Collapse</p>
        </button>
        <div className="toggler">
            <label>
                <input type="checkbox" name="toggler" onClick={toggleDarkMode}/>
                <span className="slider">
                    <span className='knob'></span>
                </span>
            </label>
            <h5>Dark mode</h5>
        </div>
        <div className='userProfile'>
            <img src={placeholderAvatar} alt="user avatar" />
            <span>
                <h5>Rudra Devi</h5>
                <h5>rudra.devi@gmail.com</h5>
            </span>
        </div> 
        </div>) 
        : 
        (<div className='nav-wrapper'>
        <div className='visible-nav'>
            <img src={fullLogo} alt="logo" className='logo' />
            <button className='ham-menu-container' onClick={()=>setClicked(clicked => !clicked)}>
            {clicked? <CloseSvg/> : <HamSvg/> }
            </button>
            
        </div>
       
        <div className={`${clicked?'nav-drawer': 'nav-drawer closed'}`}>
            <nav>
                {
                navItems.map((item,index)=> 
                    <NavLink
                    key={index}{...item}
                    />)
                }
            </nav>

            <div className="toggler">
                <label>
                    <input type="checkbox" name="toggler" onClick={toggleDarkMode}/>
                    <span className="slider">
                        <span className='knob'></span>
                    </span>
                </label>
                <h5>Dark mode</h5>
            </div>
            <div className='userProfile'>
                <img src={placeholderAvatar} alt="user avatar" />
                <span>
                    <h5>Rudra Devi</h5>
                    <h5>rudra.devi@gmail.com</h5>
                </span>
            </div>
            
        </div>     
       
        
    </div>)}
    
    </>
  )
}

export default Navbar