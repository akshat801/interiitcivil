import React from 'react';
import  styles from './src/css/main.module.css'
// import arrow from './src/img/next.png'
import theme from './src/img/theme.jpg'
import { Link} from 'react-router-dom';
class Main extends React.Component{
    render(){
        return(
            <div className={styles.mainContainer}>
                <div className={styles.mainContainer1}>
                    <div className={styles.collage}>IIT Roorkee</div>
                    <div className={styles.heading}>Civil Conclave 2020</div>
                    <div className={styles.date}>
                        <div>7-8 November, 2020</div>
                        <div>
                            <hr className={styles.hr}/>
                        </div>
                    </div>
                    <div className={styles.description}>The very first and exclusive Inter IIT Meetup for Civil Engineering enthusiasts.</div>
                    {/* <div>
                        <button className={styles.more}>Learn More
                        <img src={arrow} alt="arrow" style={{width:'12px',height:'12px',marginLeft:'4px'}}/>
                        </button>
                    </div> */}
                    <div className={styles.note}>
                        Problem Statements are uploaded. <Link style={{color:'#FBBE4A',cursor:'pointer',textDecoration:'none'}} to='/problems'>Click to Download</Link>    
                    </div>
                </div>
                <div className={styles.mainContainer2}>
                   <img src={theme} alt="theme"/>
                </div>
            </div>
        )
    }
}
export default Main ;