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
            Developed a React Native App.
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
            Developed a React Native App.
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
            Developed a React Native App.
          </p>
        </VerticalTimelineElement>   
        </VerticalTimeline>
        </div>

    )

}

export default WorkExperience;