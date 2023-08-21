import './NavBar.css';
import Logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <a href="/" className="nav-logo">
          <img src={Logo} alt="Logo" />
        </a>
        <div className="dp-container">
          <div className="dp">SA</div>
          <div className="edit-pen">
            <Link to="/">
              <FontAwesomeIcon icon={faHeart} />

              <i className="fas fa-edit"></i>
            </Link>
          </div>
        </div>
        <div className="nav-header">
          <h2 className="name-title">Sikiru Agbaje</h2>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
