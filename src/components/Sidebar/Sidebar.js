import { useState } from "react";

const Sidebar = () => {
  const [isSidebarVisible, setSideBarVisible] = useState(false);

  const handleSidebarToggle = () => {
    setSideBarVisible(!isSidebarVisible);
  };

  return (
    <aside
      className={`sidebar ${isSidebarVisible ? "active" : ""}`}
      data-sidebar
    >
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="../../images/my-avatar.png" alt="Nasrul Huda" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Nasrul Huda">
            Nasrul Huda
          </h1>

          <p className="title">M.Sc Data Science and AI</p>
        </div>

        <button
          onClick={handleSidebarToggle}
          className="info_more-btn"
          data-sidebar-btn
        >
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:nasrul2001@gmail.com" className="contact-link">
                nasrul2001@gmail.com
              </a>

    
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+12133522795" className="contact-link">
                +49 01635867587
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Date of Birth</p>

              <time dateTime="1982-06-23">November 15, 2001</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Hamburg, Germany</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://google.com" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://google.com" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://google.com" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
