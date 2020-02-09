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
                subevents:[{name:'case studies'},
                {name:'case studies'},
                {name:'case studies'}],
                image:case_studies
            },
            {
                title:'PG Research Work Presentation',
                date:'23, March 2020',
                subevents:[
                    {name:'case studies'},
                    {name:'case studies'},
                    {name:'case studies'}],
                image:pg_research
            },
            {
                title:'Model Exhibition',
                date:'23, March 2020',
                subevents:[
                    {name:'case studies'},
                    {name:'case studies'},
                    {name:'case studies'}],
                image:model_exibition
            },
            {
                title:'Guest Lectures',
                date:'23, March 2020',
                subevents:[
                    {name:'case studies'},
                    {name:'case studies'},
                    {name:'case studies'}
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
                                <div className={styles.eventDate}>
                                <p className={styles.date}>{list.date}</p>
                                <p className={styles.learn}>LEARN MORE</p>
                            </div>
                        </div>
                        <div className={styles.eventChild2}>
                            <img src={list.image} alt="fgh"/>
                        </div>
                    </div>
                )}) :null}
            </div>
        )
    }
}