import React from 'react'

const NavLink = ({linkPath, iconSvg, linkName}) => {
  return (
    <a href={`${linkPath}`}>
        <div>{iconSvg}</div>
        <p>{linkName}</p>
    </a>
  )
}

export default NavLink