import React from "react"
import MainHeader from "../layout/MainHeader"
import Parallax from "../common/Parallax"
import HotelService from "../common/HotelSevice"
import RoomCarousel from "../common/RoomCarousel"
import RoomSearch from "../common/RoomSearch"
const Home = () => {
	

	
	return (
		<section>
			
			<MainHeader />
            <section className="contain">
                <RoomSearch/>
                <RoomCarousel/>
                <Parallax/>
                <RoomCarousel/>
                <HotelService/>
                <Parallax/>
                <RoomCarousel/>

            </section>
			
		</section>
	)
}

export default Home