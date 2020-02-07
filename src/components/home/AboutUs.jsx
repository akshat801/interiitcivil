import React from 'react';
import styles from './src/css/aboutUs.module.css'
import line from './src/img/line.jpg'
import about from './src/img/aboutus.png'

export default class AboutUs extends React.Component{
    render(){
        const aboutUs =[
            {
                title:'our vision',
                description:'The Conclave is primarily aimed at boosting technical expertise of the students by serving as an interface to the current industrial scenario.'
            },
            {
                title:'our concept',
                description:'The Conclave is primarily aimed at boosting technical expertise of the students by serving as an interface to the current industrial scenario.'

            },
            {
                title:'our theme',
                description:'The Conclave is primarily aimed at boosting technical expertise of the students by serving as an interface to the current industrial scenario.'
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
                                    <div className={styles.more}>read more</div>
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