import React from 'react'
import { Avatar } from '../avatar'

function DropdownHover() {
  return (
    <div className="dropdown dropdown-hover dropdown-bottom">
      <div tabIndex={0} role="button" className="m-1">
        <Avatar props={''} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  )
}

export default DropdownHover
