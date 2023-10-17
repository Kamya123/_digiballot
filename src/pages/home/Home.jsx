import React from 'react'
import MainHeader from '../../components/mainHeader/MainHeader'
import './home.css'
import NavBar from '../../components/navBar/NavBar'
import Features from '../../components/features/Features'


const Home = () => {
  return (
    <div>
      <NavBar />
      <MainHeader />
      <Features />
    </div>
  )
}

export default Home
