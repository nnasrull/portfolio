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
            <h4 className="h4 timeline-item-title">Bachelors of Technology</h4>
            <span>2020 - 2024</span>
            <p className="timeline-text">
              Computer Science Engineering <br />
              Jamia Millia Islamia, New Delhi, IN <br />
              Grade: 8.72 CPI
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Class XII - CBSE Board</h4>

            <span>2020</span>

            <p className="timeline-text">
              Laxman Public School <br />
              Percentage: 90.6%
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Class X - ICSE Board</h4>

            <span>2018</span>

            <p className="timeline-text">
              The Frank Anthony Public School.
              <br />
              Percentage: 89.6%
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
            <h4 className="h4 timeline-item-title">Data analyst Intern</h4>

            <span>01/02/2023 - 01/11/2023</span>

            <p className="timeline-text">
              Adtech Media Solutions <br />
              <ol className="experience-points">
                <li>
                  Conducted market research to identify trends, target
                  audiences, and competitive landscape.
                </li>
                <li>
                  Analysed data to develop insights and recommend marketing
                  strategies.
                </li>
                <li>
                  Tracked and reported on campaign performance and user
                  engagement using analytics tools.
                </li>
                <li>
                  Generated regular reports to inform clients of key metrics and
                  insights.
                </li>
              </ol>
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Frontend Web Developer</h4>

            <span>08/04/2023 - 08/10/2023</span>

            <p className="timeline-text">
              Maseehum Task Manager
              <br />
              <br />
              Developed the frontend of the company's official website.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Data analyst Trainee</h4>

            <span>01/05/2022 - 31/07/2022</span>

            <p className="timeline-text">
              National Informatics Centre
              <br />
              <ol>
                <li>
                  Scraped data from the Government Services Portal of India and
                  organised it into CSV files for analysis
                </li>
                <li>
                  Conducted extensive data cleaning and extracted both direct
                  and indirect links from the portal for comprehensive data sets
                </li>
                <li>
                  Utilized data visualisation tools to create insightful visual
                  representations of the data
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
              <data value="80">80%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web Development</h5>
              <data value="70">70%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Data analytics</h5>
              <data value="80">80%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Machine Learning</h5>
              <data value="55">55%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "55%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};
export default Resume;
