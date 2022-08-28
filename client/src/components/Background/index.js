import React from 'react'
import './index.css'
import LeftBack from '../../assets/left_background.png'
import RightBack from '../../assets/right_background.png'

const Background = () => {
  return (
    <div className="background-upper-half">
        <img src={LeftBack} className="background-img" alt="technical background"/>
        <div className="middle-back"></div>
        <img src={RightBack} className="background-img" alt="technical background"/>
    </div>
  )
}

export default Background