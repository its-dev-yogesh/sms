import React from 'react'
import { Avatar } from '../avatar'

function Dropdown() {
  return (
    <div className="dropdown dropdown-bottom">
      <div tabIndex={0} role="button">
        <Avatar props={''} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-32"
        style={{ position: 'absolute', right: 0 }}
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

export default Dropdown
