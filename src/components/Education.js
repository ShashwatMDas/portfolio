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
          date="July'18 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BusinessCenterIcon />}
        >
          <h3 className="vertical-timeline-element-title">Indian Institute of Technology, Kharagpur</h3>
          <h4 className="vertical-timeline-element-subtitle">BTech in Biotechnology</h4>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="May'11 - April'20"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BusinessCenterIcon />}
        >
          <h3 className="vertical-timeline-element-title">DAV Public School, Patna</h3>
          <h4 className="vertical-timeline-element-subtitle">5th - 12th Grade</h4>
          
        </VerticalTimelineElement> 
        </VerticalTimeline>
        </div>

    )

}

export default WorkExperience;