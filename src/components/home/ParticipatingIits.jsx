import React from 'react';
import roorkee from './src/img/roorkee.jpeg' 
import styles from './src/css/participation.module.css'


export default class Participation extends React.Component{
    render(){
        const iits = [
            {name:'iit roorkee',
            image:roorkee},
            {name:'iit roorkee',
            image:roorkee},
            {name:'iit roorkee',
            image:roorkee},
            {name:'iit roorkee',
            image:roorkee},
            {name:'iit roorkee',
            image:roorkee},
            {name:'iit roorkee',
            image:roorkee},
            {name:'iit roorkee',
            image:roorkee},
            {name:'iit roorkee',
            image:roorkee}
        ]
        return(
            <div className={styles.participationParent}>
                {iits?iits.map((list,index)=>{
                    return(
                        <div className={styles.participationChild}>
                            <div className={styles.iitName}>{list.name}</div>
                            <div className={styles.iitImage}><img src={list.image} alt="af"/></div>
                        </div>
                    )
                }):null}
            </div>
        )
    }
}