import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Experiences extends Component {
    

  render() {
    
    return (
      <div className="experiences">
        <div>
            <h1>Experiences</h1>
            <Tabs>
                <TabList>
                    <Tab>General Assembly</Tab>
                    <Tab>Citizens Bank</Tab>
                    <Tab>Army National Guard</Tab>
                </TabList>

                <TabPanel>
                    <h3>Software Engineering Immersive Program</h3>
                    <h4>DEC 2019 - MAY 2020</h4>
                    <ul>
                        <li>Six-months, 400+hour part-time program.</li>
                        <li>Additional 400+ hours out of class homework, projects, studying.</li>
                        <li>Applied essential object-oriented programming concepts, wrote high-quality JavaScript, and leveraged JS libraries like React to build a dynamic front-end.</li>
                        <li>Incorporated functionality from third-party APIs to my web applications.</li>
                        <li>Worked as a team in Git and GitHub while executing software engineering projects in an Agile development workflow.</li>
                    </ul>
                </TabPanel>

                <TabPanel>
                    <h3>QCA Commercial Loan Specialist II | | Commercial Operations</h3>
                    <h4>Jul 2016 - PRESENT</h4>
                    <ul>
                        <li>Accurately and completely review booked loans to ensure it meets the bank's compliance policy.</li>
                        <li>Reduce critical errors made by closers that can impact the customer's experience or jeopardizing the company’s accounting system.</li>
                        <li>Developed and edits existing exception reports to enhance team production and scalability.Assist in training all of my team members to help the team stay in SLA.</li>
                        <li>Completed company's commercial loan credit analyst program to enhance my knowledge of customer's financials and the process of the credit review team.</li>
                    </ul>
                </TabPanel>

                <TabPanel>
                    <h3>Army National Guard</h3>
                    <h4>OCT 2009 - OCT 2015</h4>
                    <ul>
                        <li>Trained and obtained a military issued license to operate heavy construction equipment that I would later use to build new and existing roads.</li>
                        <li>Lead team of up to 6 soldiers to complete missions using heavy equipment and combat exercises.</li>
                        <li>Continue training and mentor new and existing soldiers.</li>
                    </ul>
                </TabPanel>
            </Tabs>
        </div>
        {/* NEW TAB LIST */}
        <div>
        <h1>Education</h1>
            <Tabs>
                <TabList>
                    <Tab>General Assembly</Tab>
                    <Tab>Rhode Island College</Tab>
                </TabList>


                <TabPanel>
                    <h3>Certificate of Completion</h3>
                    <h4>DEC 2019 - MAY 2020</h4>
                    <ul>
                        <li>Applied essential object-oriented programming concepts, wrote high-quality JavaScript, and leveraged JS libraries like React to build a dynamic front-end.</li>
                    </ul>
                </TabPanel>
                <TabPanel>
                    <h3>Bachelors of Science in Finance</h3>
                    <h4>SEPT 2013 - JUNE 2016</h4>
                    <ul>
                        <li>Developed a solid foundation in principles of finance.</li>
                        <li>including capital management, investment and portfolio management, financial institutions, and personal finance.</li>
                        <li>20-credit Bachelor of Science in Finance.</li>
                    </ul>
                </TabPanel>
            </Tabs>
        </div>
      </div>
    )
  }
}

export default Experiences;