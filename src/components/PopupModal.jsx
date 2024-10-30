import React from 'react'
import CloseSvg from './IconsSVG/otherIconsSVG/CloseSvg';
import speakerAvatar from '../assets/images/Image-1.png'

const PopupModal = ({EventName, EventDate, speaker, attendees, onClick}) => {
  return (
    <div className='popup-background-overlay'>
      <div className='popup-modal'>
        <div className='close-button' onClick={onClick}>
          <CloseSvg/>
        </div>

        <div className='info-wrapper'>

          <div className='info-summary'>
            <h3>{EventName}</h3>
            <p>{EventDate}</p>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, optio incidunt recusandae quisquam molestiae quia quibusdam, rerum hic, tenetur dicta debitis possimus.</p>
          </div>
        
          <div className='speakers-info'> 
            <span>
              <img src={speakerAvatar} alt='speaker-avatar'/>
            </span>
            <p>
              {speaker.length} speaker: {speaker}
            </p>
            <p>{attendees} attendees</p>
          </div>
        </div>

        <div className='button-container'>
          <button>Edit</button>
          <button>Delete</button>
          <button>Mark as completed</button>
        </div>
      </div>
    </div>
    
  )
}

export default PopupModal;