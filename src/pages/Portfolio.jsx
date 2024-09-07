import Project from '../components/Project';

function Portfolio() {
    const projects = [
        
        {
            title: 'Kanban Board',
            image: '../../Assets/kanban-board.png',
            technology: 'jQuery',
            deployedApp: 'https://reztndev.github.io/Task-Board/',
            repo: 'https://github.com/reztndev/Task-Board'
        },
        {
            title: 'Song Search',
            image: '../../Assets/song-search.png',
            technology: 'JavaScript, 3rd Party APIs',
            deployedApp: 'https://koliandrik.github.io/Song-Search/',
            repo: 'https://github.com/koliandrik/Song-Search'
        },
        {
            title: 'Note Taker',
            image: '../../Assets/note-taker.png',
            technology: 'REST, Express',
            deployedApp: 'https://note-taker-6pyz.onrender.com',
            repo: 'https://github.com/reztndev/Note-Taker'
        },
        {
            title: 'Personal Blog',
            image: '../../Assets/personal-blog.png',
            technology: 'Web APIs',
            deployedApp: 'https://reztndev.github.io/Web-APIs-Challenge/',
            repo: 'https://github.com/reztndev/Web-APIs-Challenge'
        },
        {
            title: 'Employee Payroll Tracker',
            image: '../../Assets/payroll-tracker.png',
            technology: 'JavaScript',
            deployedApp: 'https://reztndev.github.io/JavaScript-Challenge/',
            repo: 'https://github.com/reztndev/JavaScript-Challenge'
        },
        {
            title: 'Profile - Variation',
            image: '../../Assets/profile-1.png',
            technology: 'HTML, CSS, JavaScript',
            deployedApp: 'https://reztndev.github.io/Advanced-CSS-Portfolio/',
            repo: 'https://github.com/reztndev/Advanced-CSS-Portfolio'
        }, 
    ]

    return (
        <section className="container">
            <h1 className="text-center mt-3 mb-5">Portfolio</h1>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <Project
                            title={project.title}
                            image={project.image}
                            technology={project.technology}
                            deployedApp={project.deployedApp}
                            repo={project.repo}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;