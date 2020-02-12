import React from 'react';
import  styles from './src/css/main.module.css'
import arrow from './src/img/next.png'
import theme from './src/img/theme.jpg'

class Main extends React.Component{
    render(){
        return(
            <div className={styles.mainContainer}>
                <div className={styles.mainContainer1}>
                    <div className={styles.collage}>IIT Roorkee</div>
                    <div className={styles.heading}>Civil Conclave 2020</div>
                    <div className={styles.date}>
                        <div>21-22 March, 2020</div>
                        <div>
                            <hr className={styles.hr}/>
                        </div>
                    </div>
                    <div className={styles.description}>A 3 day sprint to test your Civil Engineering skills. Also some 2 liner- description like this</div>
                    <div>
                        <button className={styles.more}>Learn More
                        <img src={arrow} alt="arrow" style={{width:'12px',height:'12px',marginLeft:'4px'}}/>
                        </button>
                    </div>
                    <div className={styles.note}>
                        Problem Statements are uploaded. <span style={{color:'#FBBE4A',cursor:'pointer'}}>Click to Download</span>    
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