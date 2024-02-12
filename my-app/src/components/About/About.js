import "./About.css";
import aboutImage from "../../images/profile.png";

const About = () => {
  console.log("About");

  return (
    <section className="about">
    <img className="about__image" alt="Elliott" src={aboutImage} />
    <div className="about__text">
    <h2 className="about__title">About the author</h2>
    <p className="about__description">
      Elliott Richard, an upcoming Fullstack developer with a degree in Electrical Engineering and proficient skills in
      HTML, CSS, Python, C++, Java/JavaScript, ReactJS, MongoDB, NodeJS, ExpressJS, and Google Cloud Platform.
    </p>
    <p className="about__description about__description-final">
      Elliott has spent time learning and building his technical skills during his time at TripleTen developing several
      projects for frontend and backend funtionality. This has helped to better help understand the needs of unique designs
      and better serve the needs of your next projects.  
    </p>
    </div>
    </section> 
  );
};

export default About;

