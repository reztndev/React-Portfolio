// Import icons for GitHub and LinkedIn
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer text-center">
      <a
        href="https://github.com/reztndev"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: '20px' }}
      >
        <FaGithub size={30}  color="#00FFFF"/>
      </a>
      <a
        href="https://www.linkedin.com/in/mrezvany/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} color="#00FFFF"/>
      </a>
    </div>
  );
}
