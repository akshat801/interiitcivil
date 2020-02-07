import React from 'react';
 import Main from './Main';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
class Home extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:'#FFFFFF',marginLeft:'8vw'}}>
                <Navbar/>
                <Main/>
                <div style={{background:'url(./src/img/aboutback.png)'}}>
                    <p>About Us</p>
                    <AboutUs/>
                </div>
            </div>
        )
    }
}
export default Home;