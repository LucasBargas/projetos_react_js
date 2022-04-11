import * as S from './HeaderIcons.styles';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoAddOutline } from 'react-icons/io5';
import userImage from '../../../assets/images/user-photo.png';

const HeaderIcons = () => {
  return (
    <S.HeaderIcons>
      <ul>
        <li>
          <IoMdNotificationsOutline />
        </li>

        <li>
          <IoAddOutline />
          <span></span>
        </li>

        <li>
          <img src={userImage} alt='User Github' />
          <span></span>
        </li>
      </ul>
    </S.HeaderIcons>
  )
}

export default HeaderIcons;
