import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { Container } from '../../style/global';
import StartedButton from '../StartedButton';
import { MenuIcon, NavbarContainer, NavLink } from './navbar.styles';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleSetShowMenu = () => setShowMenu(!showMenu);

  return (
    <Container>
      <NavbarContainer show_menu={showMenu}>
        <Link to="/" className="logo">
          <img src={logo} alt="Indie Brew logo" />
        </Link>

        <MenuIcon
          show_menu={showMenu}
          onClick={handleSetShowMenu}
        >
          {showMenu ? <FiX /> : <FiMenu />}
        </MenuIcon>

        <nav>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/support">Support</NavLink>
          <StartedButton />
        </nav>
      </NavbarContainer>
    </Container>
  );
}

export default Navbar;
