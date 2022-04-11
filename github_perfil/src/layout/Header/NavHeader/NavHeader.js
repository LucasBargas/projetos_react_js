import * as S from './NavHeader.styles';
import userImage from '../../../assets/images/user-photo.png';
import { FiLogOut } from 'react-icons/fi';

const NavHeader = ({ nav }) => {
  return (
    <S.Nav nav={nav}>
      <ul>
        <input type="text" placeholder='Search or jump to...' />
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#pull-requests">Pull requests</a></li>
        <li><a href="#issues">Issues</a></li>
        <li><a href="#marketplace">Marktplace</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#codespaces">Codespaces</a></li>
        <li><a href="#sponsors">Sponsors</a></li>
        <li><a href="#settings">Settings</a></li>
        <li><a href="#user">
          <img src={userImage} alt="" />
          <span>LucasBargas</span>
        </a></li>
        <li><a href="#sign-out">
          <FiLogOut />
          <span>Sign out</span>  
        </a></li>
      </ul>
    </S.Nav>
  )
}

export default NavHeader;
