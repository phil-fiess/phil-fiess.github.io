import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Languages from './languages';
import Volunteering from './volunteering';
import profileImage from '../img/phil-avatar.png'


class Resume extends Component {
    render() {
        return (
            <div id="resume">
               <Grid className="resume-grid">
                <Cell className="resume-left-col"col={4}>
                    <div style={{ textAlign: "center"}}>
                        <img 
                            src={profileImage}
                            alt="avatar"
                            style={{ height: '300px', borderRadius: '100%' }}
                        />
                    </div>

                    <h2 style={{ paddingTop: '1em'}}>Phil Fiess</h2>
                    <h4 style={{color: 'grey'}}>Programmer and IT</h4>
                    <h4 style={{paddingTop: '20px', borderBottom: '3px solid grey'}}>Languages and Skills</h4>

                    <Languages 
                        skill="JavaScript"
                        progress={60}
                    />
                    <Languages 
                        skill="C++"
                        progress={70}
                    />
                    <Languages 
                        skill="Java"
                        progress={75}
                    />
                    <Languages 
                        skill="Python"
                        progress={30}
                    />
                    <Languages 
                        skill="HTML/CSS"
                        progress={90}
                    />
                    <Languages 
                        skill="jQuery"
                        progress={50}
                    />
                    <Languages 
                        skill="React"
                        progress={40}
                    />
                    <Languages 
                        skill="Django"
                        progress={40}
                    />
                    <Languages 
                        skill="Linux"
                        progress={75}
                    />
                    <Languages 
                        skill="Git"
                        progress={80}
                    />
                    <Languages 
                        skill="QML/Qt"
                        progress={80}
                    />
                    <Languages 
                        skill="PostgreSQL"
                        progress={25}
                    />

                    <hr style={{borderTop: '3px solid grey', width: '100%'}} />

                    <h4 style={{paddingTop: '20px', borderBottom: '3px solid grey'}}>Leadership and Volunteering</h4>

                    <Volunteering 
                        startMonth="June"
                        startYear="2015"
                        endMonth=" Present"
                        endYear=""
                        position="Logistics Coordinator and Promotion"
                        employer="Covenant Arts and Music Society"
                        location="Vancouver, BC, Canada"
                        skillStatement1="Managed team of volunteers for transport coordination for international
                                         live music event lasting 3 days, ensuring both travel and accomodations were
                                         in order and event schedule ran on time."
                        skillStatement2="Researched and assisted in talent curation for 3 years, resulting in 
                                        growth of yearly attendance and event budget."
                    />
                    <hr style={{borderTop: '3px solid grey', width: '100%'}} />

                </Cell>
                <Cell className="resume-right-col" col={8}>

                    <h2 styie={{paddingTop: '2em', paddingBottom: '10px'}}>Experience</h2>

                    <Experience 
                    startMonth="August"
                    startYear={2019}
                    endMonth="December"
                    endYear={2019}
                    position="Software Engineering Intern"
                    employer="AbCellera Biologics"
                    location="Vancouver, BC, Canada"
                    skillStatement1="Developed modular, scalable code for internal software UI 
                                    using QML and C++, employing creative design and meticulous attention to 
                                    detail resulting in new data modelling tools for facilitating antibody discovery 
                                    and aiding research for team scientists."
                    skillStatement2="Closely collaborated with engineering and cell screening teams, using 
                                    ongoing feedback and surveys to improve protoyping to effeciently 
                                    meet deadlines for releasable software."
                    skillStatement3="Tested and performed QA on data modelling software, debugging 
                                    effectively and improving software quality using catch.hpp framework."
                    skillStatement4="Participated in engineering team meetings, effectively re-envisioning data 
                                    modelling software, facilitating greater ease of research and results from cell 
                                    screening teams."
                    />
                    
                    <Experience 
                    startMonth="May"
                    startYear={2018}
                    endMonth="December"
                    endYear={2018}
                    position="Computer Service Technician"
                    employer="Langara College IT Department"
                    location="Vancouver, BC, Canada"
                    skillStatement1="Repaired, imaged, and restored malfunctioning computer hardware in both Windows and Mac OS environments."
                    skillStatement2="Managed inventory database by accurately inputting 
                                     information and performing campus-wide checks to maintain
                                     an up-to-date record of valuable college IT assets."
                    skillStatement3="Participated in department meetings to report progress of IT
                                     projects campus-wide, including the soft launch of the internal
                                     knowledge base solution portal to significantly reduce service ticket numbers."
                    skillStatement4="Upgraded and repaired campus software both manually and remotely using 
                                     both internal network software and manual troubleshooting to
                                     maintain campus technological assets' functionality."
                    />

                    <Experience 
                    startMonth="August"
                    startYear={2016}
                    endMonth="December"
                    endYear={2017}
                    position="Logistics and Distribution Center "
                    employer="Phillips Brewing and Malting Co."
                    location="Vancouver, BC, Canada"
                    skillStatement1="Developed efficient routing for drivers using software covering areas
                                     such as the Lower Mainland, the Sea To Sky corridor, and Fraser Valley to 
                                    maximise use of working hours for delivery staff."
                    skillStatement2="Prepared accurate sales reports for review of accounting department 
                                     and recordkeeping."
                    skillStatement3="Assisted in maintaining accurate inventory records to ensure accuracy of 
                                     stock for sales departments in the Lower Mainland."
                    skillStatement4="Coordinated and facilitated improvements to employee protocol for improved client
                                     facing deliveries during launch of direct delivery services, smoothening the 
                                     company transition away from third party delivery services."
                    />

                    {/* <hr style={{borderTop: '3px dashed red', width: '100%'}} /> */}

                    <h2 style={{paddinTop: '1em', paddingBottom: '10px', borderBottom: '2px solid grey'}}>Technical Skills and Relevant Coursework</h2>

                    <Skills 
                        category="Web Development"
                        skill1="Designed and built interactive and responsive web content with user
                                experience and accessibility in mind, maximizing navigability potential."
                        skill2="Built real-time updating and organized databases using MySQL and PHP
                                back-end scripting build interactive web applications, such as comment
                                boards."
                        skill3="Used jQuery and React libraries and frameworks to construct appealing and interactive web
                                content."
                        skill4="Built and tested full stack web app using Django to deliver highly responsive, dynamic web content interacting with PostgreSQL backend."
                    />

                    <Skills
                        category="UI Design and Programming"
                        skill1="Conducted UI testing as well as surveyed user test groups to identify flaws in UI structure."
                        skill2="Created mockups for user base for the purpose of visual aid for form and functionality of software."
                        skill3="Experienced in building UI software using QtCreator."
                        skill4="Designed and developed web content that conform to mobile responsiveness."
                    />

                    <Skills
                        category="Algorithms and Data Structures I and II"
                        skill1="Developed understanding of ADTs such as graphs, trees, heaps, and sorting algorithms."
                        skill2="Analyzed algorithm complexity using recurrence relations and discrete math to understand appropriate uses of data structures in software engineering."
                        skill3="Familiarized with algorithms and data structures and their appropriate usages when in design process of software development."
                        skill4="Acquired theoretical understanding of software architecture and how to effectively build efficient programs to maximise available computational resources." 
                    />

                    <Skills 
                        category="General"
                        skill1="Competent understanding of Linux, having used distributions such as Mint, Ubuntu and Kali."
                        skill2="Successfully completed coursework on bash and shell scripting, familiar with file system and OS functionality to automate repetitive tasks as well as minor system admin."
                        skill3="Analytical and collaborative problem solver while maintaining independent work ethic."
                        skill4="Adaptive and open listening approach to teamwork and management."
                    />
                    <h2 style={{paddingTop: '1em', paddingBottom: '10px', borderBottom: '2px solid grey'}}>Education</h2>
                    
                    <Education
                        startYear={2017}
                        endYear={2020}
                        schoolName="Langara College"
                        schoolDescription="Vancouver based technical college"
                        accreditation="ASc Computer Science (completion 2020)"
                    />

                </Cell>

               </Grid>
            </div>
        )
    }
}

export default Resume;