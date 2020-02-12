import React from 'react';
import case_studies from './src/img/case_studies.jpg';
import pg_research from './src/img/pg_research.jpg';
import model_exibition from './src/img/model_exibition.jpg';
import lectures from './src/img/lectures.jpg';
import styles from './src/css/events.module.css';
  

export default class Events extends React.Component{
    render(){
        const events = [
            {
                title:'Case Studies',
                date:'23, March 2020',
                subevents:[{name:'Presentation of Solutions to the Problem Statement given by the Industry.'},
                ],
                image:case_studies
            },
            {
                title:'PG Research Work Presentation',
                date:'23, March 2020',
                subevents:[
                    {name:'Presentation of Research Work to a committee of veterans from discipline of Civil Engineering.'},
                ],
                image:pg_research
            },
            {
                title:'Model Exhibition',
                date:'23, March 2020',
                subevents:[
                    {name:'A problem statement will be given on which students will be supposed to create the model.'},],
                image:model_exibition
            },
            {
                title:'Guest Lectures',
                date:'23, March 2020',
                subevents:[
                    {name:' A series of 6 lectures each of half hour covering all disciplines of Civil Engineering '},
                ],
                image:lectures
            }
        ]
        return(
            <div className={styles.eventParent}>
                {events?events.map((list,index)=>{
                return(
                    <div className={styles.eventChild}>
                        <div className={styles.eventChild1}>
                            <div className={styles.eventTitle}>{list.title}</div>
                            <div>
                                {list.subevents.map((obj,address)=>{
                                    return(
                                        <div className={styles.subEvents}>{obj.name}</div>
                                    )
                                })}
                            </div>
                            <div className={styles.eventDate}>
                                <p className={styles.date}>{list.date}</p>
                                <p className={styles.learn}>LEARN MORE</p>
                            </div>
                        </div>
                            <img src={list.image} alt="fgh" className={styles.eventChild2}/>
                    </div>
                )}) :null}
            </div>
        )
    }
}