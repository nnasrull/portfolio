const Navbar = ({ activePage, onNavClick, navItems }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li className="navbar-item" key={item}>
            <button
              className={`navbar-link ${
                activePage === item.toLowerCase() ? "active" : ""
              }`}
              onClick={() => onNavClick(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
