import React from 'react';
import logo from './src/img/logo.png'
import styles from './src/css/navbar.module.css';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        const nav = [{name:'about us',url:'/about'},{name:'events',url:'/events'},{name:'sponsors',url:'/'},{name:'problem statement',url:'/'},{name:'contact',url:'/'}]
        return(
        <div className={styles.navParentDiv}>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.navParent}>
                {nav? nav.map((list,index)=>{
                return(
                    <Link className={styles.navChild} exact activeClassName={styles.active}>{list.name}</Link>
                )}) :null}
            </div>
        </div>
        )
    }
}