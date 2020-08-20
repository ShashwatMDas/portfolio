import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import "../App.css"
const WorkExperience = () => {

    return (

        <div>
        <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="May'20 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BusinessCenterIcon />}
        >
          <h3 className="vertical-timeline-element-title">Social Egg | Android App</h3>
          <h4 className="vertical-timeline-element-subtitle"><a style={{zIndex: 1000, position: "absolute"}} href="http://app.socialegg.in/" >Download</a></h4>
          <p>
          •Developed a news aggregator mobile application using React Native, Google Cloud, Amazon Web Services, Azure.<br/><br/>
          •The app is completely serverless ensuring unlimited scalability, making use of tools like GCP Cloud Functions, GCP Cloud Scheduler, GCP
           Firestore, Google Firebase, AWS Elasticache, Azure Cognitive Services, GCP Cloud SQL, AWS DynamoDB and NewsAPI.<br/><br/>
          •Integrated Expo Updates in the application, allowing seamless over-the air updates, without the need to go to the playstore.<br/><br/>
          •All the data transfer works through APIs, having a Memcached layer(using AWS Elasticache) to ensure upto 75% less response time.<br/><br/>
          •Integrated Facebook and Google user login/registration using Facebook Graph API and Google OAuth in the application.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="May'20 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BusinessCenterIcon />}
        >
          <h3 className="vertical-timeline-element-title">Social Egg | Web App</h3>
          <h4 className="vertical-timeline-element-subtitle"><a style={{zIndex: 1000, position: "absolute"}} href="https://socialegg.in">Go to Site</a></h4>
          <p>
          •Built a news subscription service, via mailing(OneSignal) service and in-App subscriptions, using ReactJS and AWS.<br/><br/>
          •Developed a Progressive Web App(PWA) , to have a cross-platform solution, ensuring usablilty in devices of any specifications.<br/><br/>
          •The web app is completely serverless, built completely on AWS, using services like Lambda, API Gateway and DynamoDB.<br/><br/>
          •User Login/Registration authentication is done using Amazon Cognito, AWS API Gateway and news are fetched using NewsAPI.<br/><br/>
          •Integrated OneSignal Notifications service, which automatically notifies the users whenever their subscribed news are delivered.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="November'19 - April'20"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BusinessCenterIcon />}
        >
          <h3 className="vertical-timeline-element-title">Portfolio</h3>
          <h4 className="vertical-timeline-element-subtitle"><a style={{zIndex: 1000, position: "absolute"}} href="https://shashwatmdas.info">Go to site</a></h4>
          <p>
          •Built a personal portfolio website using ReactJS with my own continuous development and integration system.<br/><br/>
          •Built and deployed a continuous integration and development system using Github Webhooks, NodeJS and shell commands.<br/><br/>
          •Used GCP's Compute Engine to deploy my own virtual machine as a server for my website and GoDaddy for getting a domain.<br/><br/>
          •Used Apache 2.0 to serve the static files of the website and OpenSSL to create a self-signed ssl certificate allowing HTTPS connections.
          </p>
        </VerticalTimelineElement>   
        </VerticalTimeline>
        </div>

    )

}

export default WorkExperience;