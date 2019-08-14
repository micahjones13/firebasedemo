import React from 'react';


// could destructor props like {projects}
const ProjectSummary = (props) => {
    return (
        <div className = 'card z-depth-0 project-summary'>
                <div className = 'card-content grey-text text-darken-3'>
                    <span className = 'card-title'>{props.project.title}</span>
                    <p>Posted by Bowser</p>
                    <p className = 'grey-text'>3rd Sept, 2AM</p>
                </div>
        </div>
    )
}

export default ProjectSummary;