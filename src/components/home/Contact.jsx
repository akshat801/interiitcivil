import React from 'react';
import fb from './src/img/fb.jpg';
// import web from './src/img/web.jpg';
import logo from './src/img/logo.jpg'
import styles from './src/css/contact.module.css'
import { Link } from 'react-router-dom';
import call from './src/img/telephone.png'
import mail from './src/img/mail.png'
import name from './src/img/name.png'

export default class Contact extends React.Component{
    render(){
        return(
            <div className={styles.contactParent}>
                <p className={styles.heading}>Contact Us</p>
                {/* <div>
                    <p className={styles.query}> Have any query? Write us now! </p>
                    <div className={styles.subject}>
                        <input type="text" placeholder="name"/>
                        <input type="text" name="" id="" placeholder="subject" style={{width: '486px',marginLeft: '2vw'}}/>
                    </div>
                    <div className={styles.message}>
                        <textarea type="text" name="" id="" placeholder="message"/>
                        <button className={styles.send}>send message</button>
                    </div>
                </div> */}
                <hr className={styles.hr}/>
                <div className={styles.contactChild}>
                    <div className={styles.contactChild1}>
                        <Link to='/'><img src={logo} alt="" className={styles.logo}/></Link>
                        <p className={styles.date}>21 - 22 March, 2020</p>
                        <div className={styles.icon}>
                            <a href="https://www.facebook.com/civilconclave.iitr/?modal=admin_todo_tour" target='new'><img src={fb} alt="ald"/></a>
                            {/* <a href=""><img src={web} alt="ald"/></a> */}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.contactName}>
                            <p> <img className={styles.contactImage} src={name} alt=""/>   Bhupesh Garg</p>
                            <p> <img className={styles.contactImage} src={call} alt=""/> 9216271000</p>
                            <p> <img className={styles.contactImage} src={mail} alt=""/> bgarg@ce.iitr.ac.in</p>
                        </div>
                        <div className={styles.contactName}>
                            <p> <img className={styles.contactImage} src={name} alt=""/> Aditya Upadhyay</p>
                            <p> <img className={styles.contactImage} src={call} alt=""/>  7409007097</p>
                            <p> <img className={styles.contactImage} src={mail} alt=""/> aupadhyay@ce.iitr.ac.in</p>
                        </div>
                    </div>
                    <hr className={styles.verticalHr}/>
                    <div className={styles.contactChild2}>
                        <div className={styles.contactGrandChild}>
                            <Link className={styles.text} to='/about'>About Us</Link>
                            <Link className={styles.text} to='/events'>Events</Link>                     
                            <Link className={styles.text} to='/sponsors'>Sponsors</Link>
                        </div>
                        <div className={styles.contactGrandChild}>
                            {/* <Link className={styles.text} to='/'>Contact</Link> */}
                            <Link className={styles.text} to='/'>cec@iitr.ac.in</Link>
                            <Link className={styles.text} to='/'>+917409007097 </Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}