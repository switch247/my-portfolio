// Timeline.js
import React from 'react';
import styles from './Timeline.module.css';

const Timeline = ({ events }) => {
    return (
        <div className={styles.timeline}>
            {events.map((event, index) => (
                <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineDate}>{event.date}</div>
                    <div className={styles.timelineContent}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
