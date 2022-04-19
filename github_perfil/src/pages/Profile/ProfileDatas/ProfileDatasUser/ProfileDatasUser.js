import { FiMapPin } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { RiBuildingLine } from 'react-icons/ri';
import { IoPeopleOutline } from 'react-icons/io5';
import * as S from './ProfileDatasUser.styles';

const ProfileDatasUser = ({ bio, handleUpdateUser, company, location, website, twitter }) => {
  return (
    <S.Datas>
      {bio ? <p>{bio}</p> : <p>Sou um apaixonado estudante Front End.</p>}
      <button onClick={handleUpdateUser}>Edit Profile</button>
      <S.Follows>
        <a href="#follower"><IoPeopleOutline /> <strong>1</strong> follower</a>
        <span> - </span>
        <a href="#following"><strong>7</strong> following</a>
      </S.Follows>
      <ul>
        {company && <li><RiBuildingLine /> {company}</li>}
        {location ? <li><FiMapPin /> {location}</li> : <li><FiMapPin /> São Paulo, SP</li>}
        {website ? <li><a href={website} target="_blank" rel="noopener noreferrer"><BiLink /> {website}</a></li> : <li><a href='https://projetoslucasbargas.com' target="_blank" rel="noopener noreferrer"><BiLink /> https://projetoslucasbargas.com/</a></li>}
        {twitter && <li><a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer"><BsTwitter />  @{twitter}</a></li>}
      </ul>
    </S.Datas>
  )
}

export default ProfileDatasUser