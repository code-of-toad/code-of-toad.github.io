import './About.css'

function About() {
  return (
    <div className="page about-page">
      <div className="about-container">
        <h1 className="about-title">About Me</h1>
        <div className="about-image-wrapper">
          <img 
            src={`${import.meta.env.BASE_URL}about_me_portrait.jpg`}
            alt="Danny Han"
            className="about-portrait"
            loading="lazy"
          />
        </div>
        <div className="about-content">
          <p className="about-paragraph">
            I'm a technically driven problem-solver with a strong foundation in mathematics, programming, and data-driven thinking. My work sits at the intersection of analysis, software, and clear communication—I enjoy breaking down complex problems and turning them into solutions that are both effective and easy to understand.
          </p>
          
          <p className="about-paragraph">
            I've spent several years working one-on-one and in small-group settings as a math tutor and instructor, where I learned how to diagnose problems quickly, adapt explanations to different audiences, and measure progress through clear outcomes. That experience sharpened how I think about systems: identifying gaps, testing approaches, and iterating until results improve. Those same principles guide how I approach software development and data analysis.
          </p>
          
          <p className="about-paragraph">
            Technically, I work with Python, C/C++, Java, JavaScript, and React, and I'm comfortable moving between backend logic, data workflows, and analytical reasoning. I care deeply about correctness, clarity, and maintainability—whether I'm writing code, analyzing data, or explaining a solution to someone encountering it for the first time.
          </p>
          
          <p className="about-paragraph">
            What sets me apart is my ability to bridge technical depth and communication. I enjoy working with people just as much as with systems, and I take pride in making complex ideas approachable without oversimplifying them. I value ownership, thoughtful design, and using data to guide decisions rather than assumptions.
          </p>
          
          <p className="about-paragraph">
            I'm currently interested in opportunities across software engineering, data/analytics, and technical roles where I can continue learning, building, and contributing to meaningful work. If you're working on something interesting—or just want to talk ideas—I'd be glad to connect.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
