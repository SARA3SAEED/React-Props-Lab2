import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'


function App() {

  return (
    <>
      <Navbar></Navbar>



     <Card
       image = 'https://images.pexels.com/photos/21546873/pexels-photo-21546873/free-photo-of-florence.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
       info = "mosque"
       i1 = "400m"
       i2 = "white color"
       i3 = "can take 400 persons"
     ></Card>


     <Card
       image = 'https://images.pexels.com/photos/21546873/pexels-photo-21546873/free-photo-of-florence.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
       info = "mosque"
       i1 = "400m"
       i2 = "white color"
       i3 = "can take 400 persons"
     ></Card>

      <Footer></Footer>

    </>
  )
}

export default App
