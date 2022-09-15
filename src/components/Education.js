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
          date="Ju'18 - Apr'22"
          iconStyle={{ backgroundColor: '#fff', color: '#fff' }}
          icon={<img src="./iitkgp.png" alt="reason" style={{height: "80%", marginTop: "8%", marginLeft: "15%"}} />}
        >
          <h3 className="vertical-timeline-element-title">Indian Institute of Technology, Kharagpur</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelors in Technology</h4>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="May'11 - April'18"
          iconStyle={{ backgroundColor: '#fff', color: '#fff' }}
          icon={<img src="./dav.png" alt="reason" style={{height: "80%", marginTop: "8%", marginLeft: "2%"}} />}
        >
          <h3 className="vertical-timeline-element-title">DAV Public School, BSEB</h3>
          <h4 className="vertical-timeline-element-subtitle">5th - 12th Grade</h4>
          
        </VerticalTimelineElement> 
        </VerticalTimeline>
        </div>

    )

}

export default WorkExperience;
