import React from 'react';
 import Main from './Main';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Events from './Events';
import  styles from './src/css/index.module.css'
import Contact from './Contact'
// import Participation from './ParticipatingIits';
class Home extends React.Component{
    render(){
        return(
            <div className={styles.indexParent}>
                <div>
                <Navbar/>
                </div>
                <div className={styles.main}>
                <Main/>
                </div>
                <div className={styles.about}>
                    <p className={styles.heading}>About Us</p>
                    <AboutUs/>
                </div>
                <div className={styles.events}>
                    <p className={styles.heading}>Events</p>
                    <Events/>
                </div>
                {/* <div>
                    <p>Participating IITs</p>
                    <Participation/>
                </div> */}
                <div>
                    <Contact/>
                </div>
            </div>
        )
    }
}
export default Home;