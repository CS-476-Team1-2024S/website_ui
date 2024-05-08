import React from 'react';
import LoggedInAs from '../components/LoggedInAs';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const About = () => {
    
    const about = `
Knowledgebase was conceived and developed as a school project by our team of five ambitious students: Levi, Connor, Nelson, Matthew, and Keagan. This project was part of our curriculum and aimed at demonstrating our skills in web development, content management, and community building.

## Our Team and Roles
**Levi:** Team lead, focused on both front and backend development.\\
**Matthew:** Focused on backend development, setting up the database, and applying new skills toward C# WebAPI.\\
**Connor:** Handled frontend development, formatting new articles and the user interface ensuring a seamless user experience.\\
**Nelson:** Oversaw the content strategy, including the structure of articles website in general.\\
**Keagan:** Tackled most of our documentation and gave the team hard worthy resources.

## Project Goals
The primary goal of this project was to create a dynamic and interactive knowledge sharing platform that could serve both educational and community purposes. We aimed to implement a system where information could be easily accessed, contributed, and curated by users, fostering an environment of collaborative learning.

## Development Process
The development process involved rigorous planning, execution, and testing phases. Each of us brought unique skills and perspectives to the project, contributing to a well-rounded and functional platform. Regular meetings and feedback sessions were crucial in aligning the project with our intended goals and user requirements.

## Future Plans
If we did see through to future implementations, we would first take care of what has strike throughs on the homepage.

This project not only showcases our technical abilities and collaborative spirit but also our dedication to creating a valuable resource for knowledge seekers worldwide.
`;

    return (
        <div className = "content">
            <h1>About the Knowledgebase Project</h1>
            <LoggedInAs />
            <p><Markdown remarkPlugins={[remarkGfm]}>{about}</Markdown></p>
        </div>
    );
};
export default About;