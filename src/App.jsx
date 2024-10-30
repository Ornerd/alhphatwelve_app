import React, { useEffect } from 'react';
import { useState } from 'react';

import './assets/App.css';
import Navbar from './components/Navbar';
import upwardArrow from './assets/icons/upward_arrow.svg';
import downwardArrow from './assets/icons/downward_arrow.svg';
import InfoIcon from './components/IconsSVG/otherIconsSVG/InfoIcon';
import FooterNav from './components/FooterNav';
import BarChart from './components/BarChart';
import Carousel from './components/Carousel';
import DropdownBar from './components/DropDownBar';
import VerticalDots from './components/IconsSVG/otherIconsSVG/VerticalDots';
import DownloadIcon from './components/IconsSVG/otherIconsSVG/DownloadIcon';
import SearchIcon from './components/IconsSVG/otherIconsSVG/SearchIcon';
import SingleChevron from './components/IconsSVG/SingleChevron';
import TableData from './components/Placeholder Data/TableData';
import TableAccordion from './components/TableAccordion';
import PopupModal from './components/PopupModal';



function App()  {
  const [collapsed, setCollapsed] = useState(false);
  const [inDarkMode, setInDarkMode] = useState(false)
  const toggleCollapseMenu = () => setCollapsed(collapsed => !collapsed);
  const [windowSize, setWindowSize] = useState (window.innerWidth);
  const [modalData, setModalData] = useState(null)
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

  const showModal = ({EventName, EventDate, speaker, attendees}) => {
    setModalData({EventName, EventDate, speaker, attendees});
  }

  useEffect(()=> {  
    const handleScreenResize= ()=> { //i'll be needing this here to render various table formats as per the sreen size
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleScreenResize)
    return ()=> {
      window.removeEventListener('resize', handleScreenResize)
    }
  }, [])

  return (
    <>

    {modalData && (
      <PopupModal
      {...modalData}
      onClick={()=>setModalData(null)}
      />
    )}
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
        <section className='data-table-module'>
          <h3>Events History</h3>
          <div className='query-area'>
            <div className='left-alignment'>

              <label className='search-bar'>
                <div>
                  <SearchIcon/>
                </div>
                <input 
                placeholder='search...'
                id='search'
                />
                
              </label>

            
              <DropdownBar
              defaultValue={"date"}
              selectFunc={"date"}
              />

              <DropdownBar
              defaultValue={"status"}
              selectFunc={"status"}
              />

              <DropdownBar
              defaultValue={"name"}
              selectFunc={"nameOf"}
              />

              <p><span>Displaying {TableData.length} results</span></p>
            </div>

            <div className='right-alignment'>
              <p>Sort:</p>

              <DropdownBar
                defaultValue={"most recent"}
                selectFunc={"activity"}
              />

              <button>
                <div>
                  <VerticalDots/>
                </div>
              </button>

              <button>
                <div>
                  <DownloadIcon/>
                </div>
                <p>Export</p>
              </button>

            </div>

           
          </div>

          <table>
            {
              windowSize > 895 ?
              (
                <>
                  <tr>
                    <th><div>Event name</div></th>
                    <th><div>date</div></th>
                    <th><div>speaker</div></th>
                    <th><div>status</div></th>
                  </tr>
                  {TableData.map(data=> (
                    <tr key={data.EventId} >
                      <td> 
                        <div onClick={()=>showModal({...data})}>{data.EventName}</div>
                      </td>
                      <td>
                        <div>{data.EventDate}</div>
                      </td>
                      <td>
                        <div>{data.speaker}</div>
                      </td>
                      <td>
                       <div>
                        <span className={ data.EventStatus.toLowerCase() ==='in progress'? 'event-status in-progress' : 'event-status'}>
                          <span></span><h5>{data.EventStatus}</h5>
                        </span>
                       </div>
                      </td>
                    </tr>
                  ))
                  }
                  
                </>
              )
              :
              (
                <>
                  <tr>
                    <th style={{width: '70%'}}><div className=''>Event name</div></th>
                    <th style={{width: '30%'}}><div>status</div></th>
                  </tr>
                  {
                    TableData.map(data=> (
                     <TableAccordion 
                     key={data.EventId}{...data}
                     onClick={()=>showModal({...data})}
                     />
                    ))
                  }
                
                </>
              )
            }
          </table>

          <div className='pagination-area'>
            <div className='left'>
              <button>
                <div><SingleChevron/></div>
              </button>
                <span>1</span>
                <span>2</span>
                <span>3</span>
              <button>
                <div><SingleChevron/></div>
              </button>
            </div>

            <div className='right'>
              <p>Show:</p>
              <DropdownBar
                defaultValue={"10 rows"}
                selectFunc={"activity"}
              />
            </div>
          </div>
        </section>
      </main>
      <FooterNav/>
    </>
  )
}

export default App
