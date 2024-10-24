import React from 'react';
import { useState } from 'react';

import './assets/App.css';
import Navbar from './components/Navbar';
import upwardArrow from './assets/icons/upward_arrow.svg';
import downwardArrow from './assets/icons/downward_arrow.svg';
import InfoIcon from './components/IconsSVG/otherIconsSVG/InfoIcon';
import FooterNav from './components/FooterNav';
import BarChart from './components/BarChart';
import Carousel from './components/Carousel';



function App()  {
  const [collapsed, setCollapsed] = useState(false);
  const [inDarkMode, setInDarkMode] = useState(false)
  const toggleCollapseMenu = () => setCollapsed(collapsed => !collapsed);
  const summaryStats = [
    {
      statLabel: 'Total Events',
      statCount: '100,000',
      statPercentage: '+5.0%',
      statProgress: true
    },
    {
      statLabel: 'Active Speakers',
      statCount: '25',
      statPercentage: '-5.0%',
      statProgress: false
    },
    {
      statLabel: 'Total Registrations',
      statCount: '300',
      statPercentage: '+5.0%',
      statProgress: true
    },
    {
      statLabel: 'Total Revenue',
      statCount: '$500,000',
      statPercentage: '+5.0%',
      statProgress: true
    }
  ]

  const toggleDarkMode = ()=> setInDarkMode(inDarkMode => !inDarkMode)
  return (
    <>
      <aside className={collapsed? 'collapsed' : ''}> {/*for larger screens */}
        <Navbar
        collapsed={collapsed}
        handleCollapse={toggleCollapseMenu}
        toggleDarkModeFunction={toggleDarkMode}
        />
      </aside>
       <nav> {/*for smaller screens */}
        <Navbar
        toggleDarkModeFunction={toggleDarkMode}/>
      </nav>
      <main>
        <section className='summary-stats'>
          <h1>Welcome! here's your summary</h1>
          <div className='stats-array'>
            {
              summaryStats.map((stat, index) => {
                return (
                  <section className='stat' key={index}>
                  <div className='stat-label'>
                    <h4>{stat.statLabel}</h4>
                    <InfoIcon/>
                  </div>
                  <div className='stat-value'>
                    <h2>{stat.statCount}</h2>
                    <span>
                      <img src={stat.statProgress? upwardArrow : downwardArrow} alt={stat.statProgress? "upward arrow": "downward arrow"} />
                      <h6 className={stat.statProgress? 'green' : 'red' }>{stat.statPercentage}</h6>
                    </span>
                  </div>
                </section>
                )
              })
            }
          </div>
        </section>
        <section className='graphical-stats-section'>
          <h3>Event Registrations per month</h3>
          <div className='graphical-stats-wrapper'>
            <div className='chart-container'>
              <BarChart
              inDarkMode={inDarkMode}/>
            </div>
            <div className='carousel-container'>
                <Carousel/>
            </div>
          </div>
         
        </section>
      </main>
      <FooterNav/>
    </>
  )
}

export default App
