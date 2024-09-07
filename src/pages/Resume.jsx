import '../Style.css';

function Resume() {
    return (
        <div className="resume-container">
            <h1 className="resume-heading">Resume</h1>
            
            <div className="mt-4">
                <span className="download-header">
                    <span className="download-text">Download my </span>
                    <a href='https://drive.google.com/file/d/1HmV5LnErBFdX4yGEd_Uvyuz_vh_0zAqA/view?usp=sharing' 
                        download="Rezvany, Mehrdod.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="download-resume">resume</a>
                </span>
            </div>

            <div className="mt-3">
                <h2>Front End Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className="mt-3">
                <h2>Back End Proficiencies</h2>
                <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>REST API</li>
                    <li>Sequalize</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;