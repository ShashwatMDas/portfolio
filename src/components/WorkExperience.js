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
          date="Oct'21 - Apr'22"
          iconStyle={{ backgroundColor: '#fff', color: '#fff' }}
          icon={<img src="./kuddle.png" alt="reason" style={{height: "25%", marginTop: "38%", marginLeft: "8%"}} />}
        >
          <h3 className="vertical-timeline-element-title">Software Development Intern | Krate</h3>
          <h4 className="vertical-timeline-element-subtitle">Work from Home</h4>
          <p>
          • Developed the cross-platform childcare application using React Native<br /><br />
          • Built the backend using GraphQL and AWS services like SES, S3, etc., implemented ElastiCache, reducing fetching time by upto 60% for various APIs<br /><br />
          • Integrated Twilio WebRTC for video calling feature and Firebase for chat<br /><br />
          • Revamped and built a horizontally scalable server architecture using Elastic Beanstalk and a CI/CD pipeline using CircleCI and CodeDeploy decreasing deploy time by 80% and down time by 90%<br />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="May'21 - Jul'21"
          iconStyle={{ backgroundColor: '#fff', color: '#fff' }}
          icon={<img src="./mavq.svg" alt="reason" style={{height: "25%", marginTop: "38%", marginLeft: "8%"}} />}
        >
          <h3 className="vertical-timeline-element-title">Software Developer Intern | MTX Group (MavQ)</h3>
          <h4 className="vertical-timeline-element-subtitle">Hyderabad</h4>
          <p>
          • Built a Slack Bot and slack notification service using Spring Boot, Kafka and MongoDB with automated messaging system decreasing response time of support team by 40% and engagement by around 20%<br /><br />
          • Built a common reusable components library AngularJS and Typescript which is being used in 5 different projects<br /><br />
          • Built an listener-processor architecture to process heavy API calls asynchronously using Spring Boot and Kafka<br />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="May'20 - April'21"
          iconStyle={{ backgroundColor: '#fff', color: '#fff' }}
          icon={<img src="./genio.png" alt="reason" style={{height: "80%", marginTop: "8%", marginLeft: "8%"}} />}
        >
          <h3 className="vertical-timeline-element-title">Co-Lead Software Engineer | Genio Social Network</h3>
          <h4 className="vertical-timeline-element-subtitle">Work from Home</h4>
          <p>
          • Built a social network application in React Native(Typescript) & Flask<br /><br />
          • Built the user authentication and storage system using Linkedin OAuth, OTP(AWS SNS), Email(AWS SES), and a NoSQL graph database Neo4j<br /><br />
          • Built the backend microservice architecture, with each microservice consisting of a dockerised Flask application. The microservice architecture was deployed and managed using Kuberenetes(GKE)<br /><br />
          • Built a cloud storage & CDN service in the application (FE+BE) to store user specific assets using AWS S3, CloudFront & Lambda<br /><br />
          • Built an image and video compression asynchronous processor architecture reducing media size by upto 80%<br />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Jan'20 - Mar'21"
          iconStyle={{ backgroundColor: '#fff', color: '#fff' }}
          icon={<img src="./vwo.svg" alt="reason" style={{height: "25%", marginTop: "38%", marginLeft: "15%"}} />}
        >
          <h3 className="vertical-timeline-element-title">Backend Engineering Intern | Wingify(VWO)</h3>
          <h4 className="vertical-timeline-element-subtitle">New Delhi</h4>
          <p>
          • Developed an npm package (ReactJs) and a Gatsby Plugin respectively, to integrate VWO(vwo.com) smartcode directly into the application<br /><br />
          • Created cron jobs to constantly optimize production MySQL table size, which reduced the everyday data size by around 35%<br /><br />
          • Changed the backend APIs to save heavy data in compressed format ( GZIP encoding ) reducing size by 40% and decoding data when needed<br /><br />
          • Handled the backend, created APIs, and updated old APIs, for Event Architecture deployment from VWO editor in PHP and MySQL<br />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="May'20 - April'21"
          iconStyle={{ backgroundColor: '#fff', color: '#fff' }}
          icon={<img src="./ecell.png" alt="reason" style={{height: "70%", marginTop: "12%", marginLeft: "10%"}} />}
        >
          <h3 className="vertical-timeline-element-title">Senior Manager | Web Development | Entreprenuership Cell</h3>
          <h4 className="vertical-timeline-element-subtitle">IIT Kharagpur</h4>
          <p>
          • Head of Software Development team of Entrepreneurship Cell, IIT Kharagpur, directly supervising a team of 10 Developers<br /><br />
          • Led the team for the development of KGP Startup Community website and Internship Portal, while solely developed the complete backend in Django<br /><br/>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Jun'20 - Dec'20"
          iconStyle={{ backgroundColor: '#000', color: '#fff' }}
          icon={<img src="./reason.png" alt="reason" style={{height: "25%", marginTop: "38%", marginLeft: 5}} />}
        >
          <h3 className="vertical-timeline-element-title">Reasons Solutions, App Development Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Work From Home</h4>
          <p>
          •Developed a cross-platform app, for customer use integrating services like package tracking, philately, etc. using React Native.<br/><br/>
          •Developed another cross-platform Kiosk App to be used with Kiosks, for the comapny's staff use, using React Native Framework.<br/><br/>
          •Developed and integrated various APIs like payment, tracking, service renewal, cutomer support, etc using AWS.<br/>
          </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="November'19 - April'20"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BusinessCenterIcon />}
        >
          <h3 className="vertical-timeline-element-title">Associate Manager | Web Development | Entreprenuership Cell</h3>
          <h4 className="vertical-timeline-element-subtitle">IIT Kharagpur</h4>
          <p>
          •Part of the team for organising EAD/LSM across 23 cities, acting as the Technical Coordinator for the 28 events held across the country.<br/><br/>
          •Revamped the Internship Portal, Startin 10.0 completely, solely migrating the complete backend from PHP to Django.<br/><br/>
          •Managed a team of 7 developers, for the development of Global Entrepreneurship Summit '20 and Startin 10.0 websites.
          </p>
        </VerticalTimelineElement>  */}
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="November'19 - April'20"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BusinessCenterIcon />}
        >
          <h3 className="vertical-timeline-element-title">Secretary | Technology | MMM Hall of Residence</h3>
          <h4 className="vertical-timeline-element-subtitle">IIT Kharagpur</h4>
          <p>
          •Representative of the hall in Technology and Application Cups at Inter Hall Technology General Championship.<br/><br/>
•Managed 1500 boarders of hall, ensuring active participation in all the events for the first time from MMM Hall at the coveted Inter Hall<br/><br/>
 Technology General Championship, while achieving all time highest ranking in Ad Design and Data Analytics events
          </p>
        </VerticalTimelineElement>    */}
        </VerticalTimeline>
        </div>

    )

}

export default WorkExperience;