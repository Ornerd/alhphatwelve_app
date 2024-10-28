import React, { useState } from 'react';
import SingleChevron from './IconsSVG/SingleChevron';


const TableAccordion = ({EventName, EventDate, speaker, EventStatus}) => {
    const [accordionVisible, setAccordionVisible] = useState(false)
  return (
    <>
        <tr>
            <td> 
                <div>
                <span className={accordionVisible? 'chevron-container turned' : 'chevron-container'} onClick={()=>setAccordionVisible(visible=>!visible)}><SingleChevron/></span>
                {EventName}
                </div>
            </td>
            <td>
                <div>
                <span className={EventStatus.toLowerCase()==='in progress' ? 'event-status in-progress' : 'event-status'}>
                    <h6>{EventStatus}</h6>
                    </span>
                </div>
            </td>
        </tr>
        <tr className='collapsible-container'>
            <td> 
                <div className={accordionVisible? 'collapsible expanded' : 'collapsible'}>
                    {speaker}
                </div>
            </td>
            <td>
                <div className={accordionVisible? 'collapsible expanded' : 'collapsible'}>{EventDate}</div>
            </td>
        </tr>
    </>
   

  )
}

export default TableAccordion