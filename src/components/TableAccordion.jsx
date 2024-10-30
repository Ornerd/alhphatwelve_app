import React, { useState } from 'react';
import SingleChevron from './IconsSVG/SingleChevron';


const TableAccordion = ({EventName, EventDate, speaker, EventStatus, onClick}) => {
    const [accordionVisible, setAccordionVisible] = useState(false)


  return (
    <>
        <tr onClick={()=>setAccordionVisible(visible=>!visible)}>
            <td> 
                <div>
                <span className={accordionVisible? 'chevron-container turned' : 'chevron-container'}><SingleChevron/></span>
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
        <tr className='collapsible-container' onClick={onClick}>
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