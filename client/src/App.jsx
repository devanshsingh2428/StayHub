import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelRegistration from './components/HotelRegistration'



const App = () => {

  const isownerPath = useLocation().pathname.includes("owner")

  return (
    <div>
      {!isownerPath &&  <Navbar/> }
      {false &&   <HotelRegistration/>}
      <div className='min-h-[70vh]' >
        <Routes>
          
          <Route path='/' element={<Home/>} />
          <Route path='/rooms' element={<AllRooms/>} />
          <Route path='/rooms/:id' element={<RoomDetails/>} />
          <Route path='/my-bookings' element={<MyBookings/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App