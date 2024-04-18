import React from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddRoom from './components/room/AddRoom'
/* import AddRoom from "./components/room/AddRoom" */
import ExistingRooms from './components/room/ExistingRooms'
import Home from "./components/home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import EditRoom from "./components/room/EditRoom"
import Footer from "./components/layout/Footer"
import NavBar from "./components/layout/NavBar"
import RoomListing from "./components/room/RoomListing"
import Admin from "./components/admin/Admin"
import Checkout from "./components/bookings/Checkout"
import BookingSuccess from "./components/bookings/BookingSuccess"
import Bookings from "./components/bookings/Bookings"
import FindBooking from "./components/bookings/FindBooking"


function App() {
  return<>


        <main>
        				<Router>
                    <NavBar />
        				    	<Routes>
        				    		<Route path="/" element={<Home />} />
        				    		<Route path="/edit-room/:roomId" element={<EditRoom />} />
        				    		<Route path="/existing-rooms" element={<ExistingRooms />} />
        				    		<Route path="/add-room" element={<AddRoom />} />

        				    		<Route path="/browse-all-rooms" element={<RoomListing />} />
        				    		<Route path="/admin" element={<Admin />} />
                        
        				    		<Route path="/book-room/:roomId" element={<Checkout />} />

        				    		<Route path="/booking-success" element={<BookingSuccess />} />

                        <Route path="/existing-bookings" element={<Bookings />} />

                        <Route path="/find-booking" element={<FindBooking />} />






                      </Routes>
                  </Router>
                <Footer/>
        </main>



  
    {/* <AddRoom/>
    <ExistingRooms /> */}
  </>




  /*const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
}

export default App
