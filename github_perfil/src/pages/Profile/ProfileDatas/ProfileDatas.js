import { useEffect, useState, useContext } from 'react';
import * as S from './ProfileDatas.styles';
import userPhoto from '../../../assets/images/user-photo.png';
import { Link } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { RiBuildingLine } from 'react-icons/ri';
import { IoPeopleOutline } from 'react-icons/io5';
import { UserContext } from '../../../utils/UserContext';
import Input from '../../../components/Input/Input';

const ProfileDatas = () => {
  const { name, username, bio, website, setName, setUsername, setBio, setWebsite } = useContext(UserContext);

  const [datasUser, setDatasUser] = useState(true);
  const [updateForm, setUpdateForm] = useState(null);

  const [location, setLocation] = useState(null);
  const [company, setCompany] = useState(null);
  const [twitter, setTwitter] = useState(null);

  const getLocalStorage = value => window.localStorage.getItem(value);
  const setLocalStorage = (key, value) => window.localStorage.setItem(key, value);

  const handleSubmitUpdate = e => {
    e.preventDefault();
    setDatasUser(true);
    setUpdateForm(null)
  }

  const handleUpdateUser = () => {
    setUpdateForm(true)
    setDatasUser(null);
  }

  useEffect(() => {
    if (name !== null) setLocalStorage('name', name);
    if (username !== null) setLocalStorage('username', username);
    if (bio !== null) setLocalStorage('bio', bio);
    if (location !== null) setLocalStorage('location', location);
    if (company !== null) setLocalStorage('company', company);
    if (website !== null) setLocalStorage('website', website);
    if (twitter !== null) setLocalStorage('twitter', twitter);
  }, [name, username, bio, location, company, website, twitter]);

  useEffect(() => {
    if (getLocalStorage('name') !== null) setName(getLocalStorage('name'));
    if (getLocalStorage('username') !== null) setUsername(getLocalStorage('username'));
    if (getLocalStorage('bio') !== null) setBio(getLocalStorage('bio'));
    if (getLocalStorage('location') !== null) setLocation(getLocalStorage('location'));
    if (getLocalStorage('company') !== null) setCompany(getLocalStorage('company'));
    if (getLocalStorage('website') !== null) setWebsite(getLocalStorage('website'));
    if (getLocalStorage('twitter') !== null) setTwitter(getLocalStorage('twitter'));
  }, [setName, setUsername, setBio, setWebsite]);

  return (
    <S.ProfileDatasArea>
      <S.UserPhoto>
        <Link to='/'>
          <img src={userPhoto} alt="" />
        </Link>
        <div>
          {datasUser && (
            <>
              {name && <h2>{name}</h2>}
              {username && <h3>{username}</h3>}
            </>
          )}
        </div>
      </S.UserPhoto>

      {datasUser && <S.Datas>
        {bio && <p>{bio}</p>}
        <button onClick={handleUpdateUser}>Edit Profile</button>
        <S.Follows>
          <a href="#follower"><IoPeopleOutline /> <strong>1</strong> follower</a>
          <span> - </span>
          <a href="#following"><strong>7</strong> following</a>
        </S.Follows>
        <ul>
          {company && <li><RiBuildingLine /> {company}</li>}
          {location && <li><FiMapPin /> {location}</li>}
          {website && <li><a href={website}target="_blank" rel="noopener noreferrer"><BiLink /> {website}</a></li>}
          {twitter && <li><a href={twitter}target="_blank" rel="noopener noreferrer"><BsTwitter />  @{twitter}</a></li>}
        </ul>
      </S.Datas>}

      {updateForm && <S.UpdateDatas onSubmit={handleSubmitUpdate}>
        <label htmlFor='name'>Name</label>
        <Input type="text" id='name' placeholder='Name' value={name} onChange={({ target }) => setName(target.value)} />

        <label htmlFor='userName'>Username</label>
        <Input type="text" id='userName' placeholder='Username' value={username} onChange={({ target }) => setUsername(target.value)} />

        <label htmlFor='bio'>Bio</label>
        <textarea id='bio' placeholder='Add a bio' value={bio} onChange={({ target }) => setBio(target.value)} />
        <p>You can <strong>@mention</strong> other users and organizations to link to them.</p>

        <div>
          <span><RiBuildingLine /></span>
          <Input type="text" placeholder='Company' value={company} onChange={({ target }) => setCompany(target.value)} />
        </div>
        <div>
          <span><FiMapPin /></span>
          <Input type="text" placeholder='Location' value={location} onChange={({ target }) => setLocation(target.value)} />
        </div>
        <div>
          <span><BiLink /></span>
          <Input type="text" placeholder='Website' value={website} onChange={({ target }) => setWebsite(target.value)} />
        </div>
        <div>
          <span><BsTwitter /></span>
          <Input type="text" placeholder='Twitter' value={twitter} onChange={({ target }) => setTwitter(target.value)} />
        </div>
        <button>Save</button>
      </S.UpdateDatas> }
    </S.ProfileDatasArea>
  )
}

export default ProfileDatas;
