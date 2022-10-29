import React from 'react'
import Header from './Header'
import "../styles/home.scss"
import MainContent from './MainContent'

function Home() {
  return (
    <div className='home'>
        <section className="wrapper">
            <Header />
            <MainContent />




       </section>


    </div>
  )
}

export default Home