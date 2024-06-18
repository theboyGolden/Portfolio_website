import React from 'react';
import './Timeline.css';

const Timeline = () => {
    return (
        <div className="timeline">
        <div className="timeline-item left">
            <div className="timeline-content left">
                <h2>Web developer</h2>
                <p>RAMEVA Consult</p>
                <p>A882/15 2ND BEECHAM STREET, DANSOMAN ACCRA WEST </p>
            </div>
            <div className="timeline-circle"></div>
        </div>
        <div className="timeline-item right">
            <div className="timeline-content right">
                <h2>Frontend Developer Intern</h2>
                <p>CodeAlpha</p>
                <p>Lucknow, Uttar Pradesh India</p>
            </div>
            <div className="timeline-circle"></div>
        </div>
        <div className="timeline-item left">
            <div className="timeline-content left">
                <h2>Cybersecurity Intern</h2>
                <p>Edureka</p>
                <p>600 Stewart Street Suites 300 & 400 Seattle, Washington 98101,
                USA.</p>
            </div>
            <div className="timeline-circle"></div>
        </div>
        <div className="timeline-item right">
            <div className="timeline-content right">
                <h2>Full Stack developer</h2>
                <p>Golden Mart</p>
                <p>Accra, Ghana</p>
            </div>
            <div className="timeline-circle"></div>
        </div>
    </div>
    );
}

export default Timeline;
