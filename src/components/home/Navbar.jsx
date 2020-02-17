import React from 'react';
import logo from './src/img/logo.png'
import styles from './src/css/navbar.module.css';
import {NavLink} from 'react-router-dom';


export default class Navbar extends React.Component{
    constructor(){
        super()
        this.state={
            navbar:false   
        }
    }
    toggleNavbar=()=>{
        this.setState({
            navbar : !this.state.navbar
        })
        // console.log('i am clicked')

    }
    render(){
        const nav = [{name:'home',url:'/'},{name:'about us',url:'/about'},{name:'events',url:'/events'},{name:'sponsors',url:'/sponsors'}]
        return(
            <div>
        <div className={styles.navParentDiv}>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={!this.state.navbar?`${styles.navParent} ${styles.showSidebar}`:`${styles.navParent} ${styles.hideSidebar}`}>
                {nav? nav.map((list,index)=>{
                return(
                    <NavLink className={styles.navChild} exact activeClassName={styles.active} to={list.url}>{list.name}</NavLink>
                )}) :null}
            </div>
            <div className={styles.amburger} onClick={this.toggleNavbar}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
            </div>
        </div>
        <div>
        <div className={this.state.navbar?`${styles.navMobileParent} ${styles.showSidebar}`:`${styles.navMobileParent} ${styles.hideSidebar}`}>
                {nav? nav.map((list,index)=>{
                return(
                    <NavLink className={styles.navChild} exact activeClassName={styles.active} to={list.url} onClick={this.toggleNavbar}>{list.name}</NavLink>
                )}) :null}
             {this.state.navbar ? <div onClick={this.toggleNavbar}>
                    <span  className={styles.close}></span> 
            </div>:null}
        </div>
        </div>
        </div>
        )
    }
}