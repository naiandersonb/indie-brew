import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../style/colors';

type ShowMenu = {
  show_menu: boolean;
}

export const NavbarContainer = styled('header') <ShowMenu>`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  @media(max-width: 768px) {
    nav {
      position: fixed;
      top: 0;
      left: ${(props) => (!props.show_menu ? '-100%' : '0')};
      transition: left 0.4s ease-in;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 80%;
      height: 100vh;
      background-color: ${colors.light};
      box-shadow: 9px 0px 33px rgba(0, 0, 0, 0.17);
    }

    .logo {
      position:  ${(props) => (!props.show_menu ? 'relative' : 'fixed')};
      z-index: 100;
    }
  }

`;

export const NavLink = styled(Link)`
  color: ${colors.dark};

  &:hover {
    opacity: 0.9;
  }
`;

export const MenuIcon = styled('div') <ShowMenu>`
  font-size: 32px;
  cursor: pointer;
  display: none;

  @media(max-width: 768px) {
    position: ${(props) => (!props.show_menu ? 'absolute' : 'fixed')};;
    right: 5%;

    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
