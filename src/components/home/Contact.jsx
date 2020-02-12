import React from 'react';
import fb from './src/img/fb.jpg';
import web from './src/img/web.jpg';
import logo from './src/img/logo.jpg'
import styles from './src/css/contact.module.css'

export default class Contact extends React.Component{
    render(){
        return(
            <div className={styles.contactParent}>
                <p className={styles.heading}>Contact Us</p>
                <div>
                    <p className={styles.query}> Have any query? Write us now! </p>
                    <div className={styles.subject}>
                        <input type="text" placeholder="name"/>
                        <input type="text" name="" id="" placeholder="subject" style={{width: '486px',marginLeft: '2vw'}}/>
                    </div>
                    <div className={styles.message}>
                        <textarea type="text" name="" id="" placeholder="message"/>
                        <button className={styles.send}>send message</button>
                    </div>
                </div>
                <hr className={styles.hr}/>
                <div className={styles.contactChild}>
                    <div className={styles.contactChild1}>
                        <img src={logo} alt=""/>
                        <p className={styles.date}>21 - 22 March, 2020</p>
                        <div className={styles.icon}>
                            <img src={fb} alt="ald"/>
                            <img src={web} alt="ald"/>
                        </div>
                    </div>
                    <div className={styles.description}>
                            <div>some description</div>
                            <div>some description</div>
                            <div>some description</div>
                            <div>some description</div>
                    </div>
                    <hr className={styles.verticalHr}/>
                    <div className={styles.contactChild2}>
                        <div>
                            <p className={styles.text}>About Us</p>
                            <p className={styles.text}>Events</p>
                            <p className={styles.text}>Sponsors</p>
                        </div>
                        <div>
                            <p className={styles.text}>Contact</p>
                            <p className={styles.text}>cec@iitr.ac.in</p>
                            <p className={styles.text}>+91 7409007097 </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}