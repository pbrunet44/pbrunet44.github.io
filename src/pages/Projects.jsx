import eventSchedulerHome from '../assets/project_photos/event_scheduler/home.png';
import eventSchedulerEventList from '../assets/project_photos/event_scheduler/event-list.png';
import eventSchedulerSignup from '../assets/project_photos/event_scheduler/signup.png';

import ProjectList from '../components/ProjectList';

    const projects = [
        {
            "name": "Event Scheduling Web App", 
            "desc": "A web app made with React, Express, and MongoDB to help coordinate meetings for attendees with complex schedules.", 
            "photos": [eventSchedulerHome, eventSchedulerEventList, eventSchedulerSignup],
            "url": "https://github.com/pbrunet44/Event_Scheduler"
        },
        {
            "name": "Portfolio Website for Vertebress (Coming Soon)", 
            "desc": "A portfolio website for Vertebress, a client in the art industry, showcasing their work to potiential clients. Includes an FAQ page, photo gallery, links to their social media accounts, and details about their creative process.",
        },
    ];

export default function Projects() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl text-center mt-5 bg-gray-950/50 rounded">
                PROJECTS
            </h1>
            <ProjectList projects={projects}/>
        </div>
    );
};