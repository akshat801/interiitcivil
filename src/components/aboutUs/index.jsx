import React from 'react';
import vision from './src/vision.jpg'
import line from './src/line.jpg'
import theme from './src/theme.jpg'
import concept from './src/concept.jpg'
import styles from './src/aboutus.module.css'
import Navbar from '../home/Navbar';
import Contact from '../home/Contact';
import headImage from './src/head.jpg'
 class About extends React.Component{
    render(){
        const aboutUs =[
            {
                title:'our vision',
                description:'The IIT Roorkee Civil Conclave aims to lighten the spark that lies within the heart of all feisty civil engineers by appetizing their will with a meetup which would incorporate "Innovation and Technical Soundness". The objective is to engender ingenuity and come up with legitimate solutions to problems persisting across the industry.',
                image:vision
            },
            {
                title:'our concept',
                description:'The basic concept behind this Conclave is to inculcate technical aspects amongst students by serving as an interface to the current industrial scenario. This meetup of students presenting their Innovative and Feasible solutions to the problems directly taken up from the industries. This Conclave will help in bridging the gap between the aspects we learn as a student and the aspects we apply in the industry.',
                image:concept

            },
            {
                title:'our theme',
                description:"'Unveiling The Flume to Future' Future is an entity at the back of each person's mind. Today when we look at the future of the world around us the view is blurred with problems ranging from depletion of resources to the dearth of cutting edge technologies in various areas. Infrastructure is a key component of the modern world and Civil engineering has served as the basis for its development. The need of hour is to bring a revolution in the way we approach and analyse various problems in this field. This Conclave aims to lay a path to a brighter future by engaging brilliant minds across the country to come out with the required revolutionary approach in the field of Civil Engineering.",
                image:theme
            }
        ]
        return(
                <div>
                     <Navbar/>
                    <div className={styles.aboutHead}>
                        <p className={styles.heading}>About Us </p>
                        <hr className={styles.aboutHr}/>
                        <img src={headImage} alt=""/>
                    </div>
                    {/* <p className={styles.subHeading}>About Us</p> */}
                    <div className={styles.aboutChild}>
                        {aboutUs?aboutUs.map((list,index)=>{
                            return(
                                <div >
                                    {index%2 === 0 ? 
                                    <div className={styles.aboutGrandchild}>
                                        <div className={styles.aboutParent}>
                                            <div className={styles.title}> <img src={line} alt="line"/> <p>{list.title}</p></div>
                                            <p className={styles.description}>{list.description}</p>
                                        </div>    
                                        <img src={list.image} alt="vision" className={styles.aboutImage}/>
                                    </div>:
                                    <div>
                                        {window.innerWidth<768?
                                        <div className={styles.aboutGrandchild}>
                                        <div className={styles.aboutParent}>
                                            <div className={styles.title} >  <img src={line} alt="line" /> <p> {list.title}</p> </div>
                                            <p className={styles.description}>{list.description}</p>
                                        </div> 
                                        <img src={list.image} alt="vision" className={styles.aboutImage}/>
                                        </div>:
                                        <div className={styles.aboutGrandchild}>
                                        <img src={list.image} alt="vision" className={styles.aboutImage}/>
                                        <div className={styles.aboutParent}>
                                            <div className={styles.title} >  <p style={{marginLeft:'51px'}}> {list.title}</p> <img src={line} alt="line" style={{marginLeft:'14px'}}/></div>
                                            <p className={styles.description}>{list.description}</p>
                                        </div>    
                                        </div>  }
                                    </div>
}
                                </div>
                            )
                        }):null}
                    </div>
                        <Contact/>
                </div>
        )
    }
}
export default About ;