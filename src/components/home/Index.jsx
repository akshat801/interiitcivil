import React from 'react';
 import Main from './Main';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Events from './Events';
import  './src/css/index.module.css'
import Contact from './Contact'
// import Participation from './ParticipatingIits';
class Home extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:'#FFFFFF',marginLeft:'8vw'}}>
                <Navbar/>
                <Main/>
                <div>
                    <p>About Us</p>
                    <AboutUs/>
                </div>
                <div>
                    <p>Events</p>
                    <Events/>
                </div>
                {/* <div>
                    <p>Participating IITs</p>
                    <Participation/>
                </div> */}
                <div>
                    <p>Contact Us</p>
                    <Contact/>
                </div>
            </div>
        )
    }
}
export default Home;