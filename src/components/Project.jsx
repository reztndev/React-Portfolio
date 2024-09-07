import '../Style.css';

// Import the icon for GitHub and a generic globe signifying a deployed application
import { FaGithub, FaGlobe } from 'react-icons/fa';

export default function Project({ title, image, technology, deployedLink, repoLink }) {
    return (
        <div className="card project-card">
            <img src={image} className="card-img-top" alt={`title`} />
            <div className="card-body">
                <h4 className="card-title text-center">{title}</h4>
                <p className="card-text text-center">{technology}</p>
        
                <div className="button-container">
                    <a href={deployedLink} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="btn btn-secondary d-flex align-items-center justify-content-center">
                        <FaGlobe size={20} />
                    </a>
                    <a href={repoLink} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="btn btn-secondary d-flex align-items-center justify-content-center">
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}


