import React from 'react';
import styles from './src/css/aboutUs.module.css'
import line from './src/img/line.jpg'
import about from './src/img/aboutus.png'
import { Link } from 'react-router-dom';

export default class AboutUs extends React.Component{
    render(){
        const aboutUs =[
            {
                title:'our vision',
                description:'The IIT Roorkee Civil Conclave aims to lighten the spark that lies within the heart of all feisty civil engineers by appetizing their will with a meetup which would incorporate "Innovation and Technical Soundness".'
            },
            {
                title:'our concept',
                description:'The basic concept behind this Conclave is to inculcate technical aspects amongst students by serving as an interface to the current industrial scenario.'

            },
            {
                title:'our theme',
                description:"'Unveiling The Flume to Future'.Future is an entity at the back of each person's mind "
            }
        ]
        return(
                 <div className={styles.aboutParent}>
                     <div className={styles.aboutChild1}>
                        {aboutUs ? aboutUs.map((list,index)=>{
                            return(
                                <div>
                                    <div className={styles.title}> <img src={line} alt="line"/> <p>{list.title}</p></div>
                                    <p className={styles.description}>{list.description}</p>
                                    <Link className={styles.more} to='/about'>read more</Link>
                                </div>
                            )
                        }):null}
                     </div>
                     <div className={styles.aboutChild2}>
                        <img src={about} alt="about"/>
                    </div>
                </div>                 
        )
    }
}