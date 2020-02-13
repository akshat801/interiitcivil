import React from 'react'
import { Link } from 'react-router-dom'
import styles from './src/problems.module.css'
//  import Navbar from '../home/Navbar'

export default class Problem extends React.Component{
    render(){
        return(
            <div className={styles.parentDiv}>
                {/* <Navbar/> */}
                <div className={styles.mainDiv}>
                    coming soon 
                </div>
                <Link className={styles.gotoHome} to='/'>
                    go to home page 
                </Link>
            </div>
        )
    }
}