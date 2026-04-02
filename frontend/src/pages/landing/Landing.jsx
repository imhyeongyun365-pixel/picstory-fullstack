import React from 'react'
import './Landing.scss'
import Button from '@/components/ui/Button'
import { NavLink } from 'react-router-dom'
const bgImages =[
  // './images/landing-sl-1.png',
  // './images/landing-sl-2.png',
  // './images/landing-sl-3.png',
]
const Landing = () => {
  return (
    <section className='landing'>
      <div className="landing-bg">
        <img src="\images\landing-bg.png" alt="landing-bg" />
      </div>
      <div className="inner">
        <div className="t-wrap">
          <img src="/images/landing-Traveler.png" alt="img" />
          <h2>
            <img src="/images/MOMENTRY.png" alt="logo" />
          </h2>
          <p>
            나의 여행지를 일기장 처럼 기록해 보세요! - momentry
          </p>
        </div>
        <NavLink to="/login">
          <Button text='시작하기' className='intro'/>
        </NavLink>
     
      </div>
    </section>
  )
}

export default Landing