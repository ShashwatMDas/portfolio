import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

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
          <h3 className="vertical-timeline-element-title">Reasons Solutions, App Development Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Work From Home</h4>
          <p>
          •Developed a cross-platform app, for customer use integrating services like package tracking, philately, etc. using React Native.<br/><br/>
          •Developed another cross-platform Kiosk App to be used with Kiosks, for the comapny's staff use, using React Native Framework.<br/><br/>
          •Developed and integrated various APIs like payment, tracking, service renewal, cutomer support, etc using AWS.<br/>
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
          <h3 className="vertical-timeline-element-title">Senior Manager | Web Development | Entreprenuership Cell</h3>
          <h4 className="vertical-timeline-element-subtitle">IIT Kharagpur</h4>
          <p>
          •Part of an 11 member execution team handling all operations of Entrepreneurship Cell and responsible for planning and execution of
          various events and competitions, while leading a team of 48 members for the academic year of 2020-21.<br/><br/>
         •Head of Software Development team of Entrepreneurship Cell, IIT Kharagpur, directly supervising a team of 10 Developers<br/><br/>
         •Developed a Progressive Web App for Empresario '21 website and Django REST API backend for E-Cell, IIT Kharagpur.<br/><br/>
•Led the team for development of KGP Startup Community website, while solely developed the complete backend in Django.
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
          <h3 className="vertical-timeline-element-title">Associate Manager | Web Development | Entreprenuership Cell</h3>
          <h4 className="vertical-timeline-element-subtitle">IIT Kharagpur</h4>
          <p>
          •Part of the team for organising EAD/LSM across 23 cities, acting as the Technical Coordinator for the 28 events held across the country.<br/><br/>
          •Revamped the Internship Portal, Startin 10.0 completely, solely migrating the complete backend from PHP to Django.<br/><br/>
          •Managed a team of 7 developers, for the development of Global Entrepreneurship Summit '20 and Startin 10.0 websites.
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
          <h3 className="vertical-timeline-element-title">Secretary | Technology | MMM Hall of Residence</h3>
          <h4 className="vertical-timeline-element-subtitle">IIT Kharagpur</h4>
          <p>
          •Representative of the hall in Technology and Application Cups at Inter Hall Technology General Championship.<br/><br/>
•Managed 1500 boarders of hall, ensuring active participation in all the events for the first time from MMM Hall at the coveted Inter Hall<br/><br/>
 Technology General Championship, while achieving all time highest ranking in Ad Design and Data Analytics events
          </p>
        </VerticalTimelineElement>   
        </VerticalTimeline>
        </div>

    )

}

export default WorkExperience;