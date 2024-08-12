const About = () => {
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a recent B.Tech graduate in Computer Engineering from Jamia
          Millia Islamia, New Delhi, with a strong academic record reflected in
          my 8.72 CPI. My passion for technology drives me to solve complex
          problems and create innovative solutions. I have gained hands-on
          experience in data analysis and web development through internships at
          Adtech Media Solutions and the National Informatics Centre, where I
          enhanced my skills in market research, data visualization, and
          front-end development.
        </p>

        <p>
          In addition to my professional experience, I have completed projects
          in machine learning and web development, including lung cancer
          detection using deep learning and a social media web application built
          with the MERN stack. I am also actively involved in volunteering with
          the National Service Scheme. With proficiency in programming languages
          such as C++, Python, and JavaScript, I am eager to apply my skills in
          data science and artificial intelligence in challenging environments
          where I can continue to grow and contribute meaningfully.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-design.svg
                  "
                alt="design icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Machine Learning</h4>

              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-dev.svg"
                alt="Web development icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>

              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
