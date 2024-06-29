import React from 'react'
interface props {
  props: any
}
const Avatar: React.FC<props> = ({ props }) => {
  return (
    <div className="avatar">
      <div className="w-8 rounded-full">
        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
  )
}

export default Avatar
