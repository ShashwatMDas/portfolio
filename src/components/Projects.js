import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../App.css"
const WorkExperience = () => {

    return (

        <div>
        <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="May'20 - Oct'20"
          iconStyle={{ backgroundColor: '#000', color: '#fff' }}
          icon={<img src="./socialegg.png" alt="reason" style={{height: "80%", marginTop: "8%", marginLeft: "8%"}} />}
        >
          <h3 className="vertical-timeline-element-title">Social Egg | Android App & WebApp</h3><br />
          <h4 className="vertical-timeline-element-subtitle"><a style={{zIndex: 1000}} href="http://app.socialegg.in/" >Download</a> | <a style={{zIndex: 1000, position: "absolute"}} href="https://github.com/ShashwatMDas/socialegg-app-public" > View Code</a></h4><br />
          <p>
          •Developed a news aggregator mobile application and webapp using React Native ReactKS, Google Cloud, Amazon Web Services, Azure.<br/><br/>
          •The app is completely serverless ensuring unlimited scalability, making use of tools like GCP Cloud Functions, GCP Cloud Scheduler, GCP
           Firestore, Google Firebase, AWS Elasticache, Azure Cognitive Services, GCP Cloud SQL, AWS DynamoDB and NewsAPI.<br/><br/>
          •Integrated Expo Updates in the application, allowing seamless over-the air updates, without the need to go to the playstore.<br/><br/>
          •All the data transfer works through APIs, having a Memcached layer(using AWS Elasticache) to ensure upto 75% less response time.<br/>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="November'19 - April'20"
          iconStyle={{ backgroundColor: '#000', color: '#fff' }}
          icon={<img src="./divvy-logo.png" alt="reason" style={{height: "60%", marginTop: "20%", marginLeft: "25%"}} />}
        >
          <h3 className="vertical-timeline-element-title">DevOps+Software Engineer | Divvy.bet</h3>
          <p>
          • Built terraform Architecture as Code, for GCP Compute configuring firewall, VPC, Load-Balancers and Auto Scaling with maximum of 10 VMs<br /><br />
          • Built backend APIs using Gin(Golang) framework.<br /><br />
          • Wrote web3 functions in Reactjs applications to interact with smart contracts.<br />
          </p>
        </VerticalTimelineElement>   
        </VerticalTimeline>
        </div>

    )

}

export default WorkExperience;