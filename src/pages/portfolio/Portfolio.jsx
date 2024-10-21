import './portfolio.css'

export default function Portfolio () {

    const projectsArr = [
        {
            title: "willItRain", 
            description: "This app will make an API request and search for weather for any given city in the US.  All the user has to do is type in the city and the current weather will appear, along with a five-day forecast.", 
            image: "/assets/5day.jpg", 
            link: "https://github.com/DarioJZB/Will-It-Rain/"
        },
        {
            title: "histoMatch", 
            description: "A great started code to a functional app.  This is a matching game that asks the user to correctly order events in history. Adding more pics for a longer game or base them on a spefic time in history is encouraged.", 
            image: "/assets/histoMatch.jpg", 
            link: "https://graceatkirk.github.io/Hist-O-Match/"
        },
        {
            title: "geneReadMe", 
            description: "After answering a few questions in your command line, you will have starter README in markdown language.  It will include a license of your choice, along with its badge for added professionalism.", 
            image: "/assets/geneReadMe.jpg", 
            link: "https://www.github.com/DarioJZB/GeneReadMe"
        },
        {
            title: "employBase", 
            description: "Is your company growing rapidly? Having a hard keeping up with all the demands? No worries, this command line app will help you keep track of employees, including salaries, and help you structure your company.", 
            image: "/assets/employBase.jpg", 
            link: "https://www.github.com/DarioJZB/EmployBase"
        },
        {
            title: "autoBase", 
            description: "This command line application will help you manage you vehicle databse. It can track all main aspects of each vehicle you enter.  More functionality can be added, such as which repairs need to me made.", 
            image: "/assets/autoBase.jpg", 
            link: "https://github.com/DarioJZB/AutoBase"
        },
        {
            title: "newbieStart", 
            description: "This one holds sentimental value.  It was the first attempt at coding something.  It is a simple app that has basic information about what I knew before starting a coding bootcamp.", 
            image: "/assets/newbie.jpg", 
            link: "https://github.com/DarioJZB/prework-study-guide"
        },
    ]

    return (
        <div>
            <h1>portfolio</h1>
            <div className="wrapper">
                {projectsArr.map((project, index) => (
                    <a key={index} className="card" href={project.link} target="_blank" rel="noopener noreferrer">
                        <div className="header">
                            <img src={project.image} alt={project.title} className="image"/>
                            <h2>{project.title}</h2>
                        </div>
                        <p>{project.description}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}