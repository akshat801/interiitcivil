import React from 'react'
// import { Link } from 'react-router-dom'
import styles from './src/problems.module.css'
import Navbar from '../home/Navbar'
import Contact from '../home/Contact'
import image from './src/index.jpg'
import Problem from './src/Tinker the Wheel.pdf'
import StructureProblem from './src/Structural Design Dilemma.pdf'
import structureImage from './src/structure.png' 
export default class Problems extends React.Component{
    render(){
        const problems = [
            {
                title:'Tinker the Water Wheel',
                date:'21, March 2020',
                description:'Waterwheel, a mechanical device for tapping the energy of running or falling water by means of a set of paddles mounted around a wheel. The force of the moving water is exerted against the paddles, and the consequent rotation of the wheel is transmitted to machinery via the shaft of the wheel. Design innovative and most efficient water wheel both in terms of efficiency and feasibility.',
                image:image,
                problem:Problem
            },
            {
                title:'Structural Design Dilemma',
                date:'21, March 2020',
                description:'Economy and Stability are the most critical thing to keep in mind for any Structural Design. It is imperative for every structural engineer to learn how to incorporate the above two elements in the design of the structure. This problem is a step ahead in this direction and it requires for the participants to ensure the stability of a building by checking the adequacy of design as per IS Codes and estimate its behaviour in case of an occurrence of Earthquake. This also invites the suggestion of participants regarding changes to make the design economical. The last portion of the problem is an attempt to engage participants to come out with a new technology of material estimation which is user-friendly and viable in all aspects.',
                image:structureImage,
                problem:StructureProblem
            },
            // {
            //     title:'Case 3',
            //     date:'22, March 2020',
            //     description:'A problem statement will be given on which students will be supposed to create the model.',
            //     image:image
            // },
            // {
            //     title:'Case 4',
            //     date:'21 & 22, March 2020',
            //     description:' A series of 6 lectures each of half hour covering all disciplines of Civil Engineering ',
            //     image:image
            // }
        ]
        return(
            <div>
            <Navbar/>
            <div className={styles.problemHead}>
                <p className={styles.heading}>Case studies</p>
                <hr className={styles.problemHr}/>
            </div>
            <div className={styles.problemParent}>
                {problems?problems.map((list,index)=>{
                return(
                    <div className={styles.eventsChild}>
                            <div className={styles.subEvent}>
                                <p className={styles.eventTitle}>{list.title}</p>
                                <p className={styles.eventDescription}>{list.description}</p>
                                
                                <a href={list.problem} className={styles.readProblem} download="problem">DOWNLOAD PROBLEM</a>
                              
                            </div>
                            <div>
                                <img className={styles.eventsImage} src={list.image} alt=""/>
                            </div>
                        </div>
                    // <div className={styles.problemChild}>
                    //     <div className={styles.problemChild1}>
                    //         <div className={styles.problemTitle}>{list.title}</div>
                    //         <div className={styles.problemDescription}>{list.description} </div>
                    //          <a href={Problem} className={styles.downloadProblem} download="problem">DOWNLOAD PROBLEM</a>
                    //     </div>
                    //         <img src={list.image} alt="fgh" className={styles.problemImage}/>
                    // </div>
                )}) :null}
            </div>
            <Contact/>
            </div>
        )
    }
}