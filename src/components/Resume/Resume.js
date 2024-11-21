const Resume = ({ activePage }) => {
  return (
    <article
      className={`resume ${activePage === "Resume" ? "active" : ""}`}
      data-page="resume"
    >
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>


        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Masters of Science</h4>
            <span>2024 - Present</span>
            <p className="timeline-text">
              Data Science and Artificial Intelligence <br />
              Universität Hamburg, Hamburg, Germany <br />
            </p>
          </li>


          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Bachelors of Technology</h4>
            <span>2020 - 2024</span>
            <p className="timeline-text">
              Computer Science Engineering <br />
              Jamia Millia Islamia, New Delhi, IN <br />
              Grade: 8.72 CPI
            </p>
          </li>         
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Student Assistant</h4>

            <span>Feb '25 - Present</span>

            <p className="timeline-text">
              Universität Hamburg <br />
              <ol className="experience-points">
                <li>
                DATS Project 
                </li>
              </ol>
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Data analyst Intern</h4>

            <span>Feb '23 - Nov '23</span>

            <p className="timeline-text">
              Adtech Media Solutions <br />
              <ol className="experience-points">
                <li>
                Conducted Market research, analyzed data
                to develop insights and marketing strategies
                and generated reports on key metrics for
                clients.
                </li>
              </ol>
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Frontend Web Developer</h4>

            <span>Apr '23 - Oct '23 and July '24 - Aug '24</span>

            <p className="timeline-text">
              Maseehum Task Manager
              <br />
              Developed and designed the frontend of the company's official website.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Data analyst Intern</h4>

            <span>May '22 - July '22</span>

            <p className="timeline-text">
              National Informatics Centre
              <br />
              <ol>
                <li>
                Scraped data from Govt. Services Portal, organized it into CSV files, conducted visualizations, manipulations etc.
                </li>
              </ol>
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Data Structures and algorithms</h5>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web Development</h5>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Data analytics</h5>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Machine Learning</h5>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};
export default Resume;
