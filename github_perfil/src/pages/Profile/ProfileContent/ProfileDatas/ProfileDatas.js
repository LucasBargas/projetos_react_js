import { useEffect, useState } from 'react';
import * as S from './ProfileDatas.styles';
import userPhoto from '../../../../assets/images/user-photo.png';
import { Link } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { RiBuildingLine } from 'react-icons/ri';

const ProfileDatas = () => {
  const [datasUser, setDatasUser] = useState(true);
  const [updateForm, setUpdateForm] = useState(null);

  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [bio, setBio] = useState(null);
  const [location, setLocation] = useState(null);
  const [company, setCompany] = useState(null);
  const [website, setWebsite] = useState(null);
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
  }, []);

  return (
    <S.ProfileDatasArea>
      <S.UserPhoto>
        <Link to='/'>
          <img src={userPhoto} alt="" />
        </Link>

        {datasUser && <S.Datas>
          {name && <h2>{name}</h2>}
          {username && <h3>{username}</h3>}
          {bio && <p>{bio}</p>}
          <button onClick={handleUpdateUser}>Edit Profile</button>
          <ul>
            {company && <li><RiBuildingLine /> {company}</li>}
            {location && <li><FiMapPin /> {location}</li>}
            {website && <li><a href={website}target="_blank" rel="noopener noreferrer"><BiLink /> {website}</a></li>}
            {twitter && <li><a href={twitter}target="_blank" rel="noopener noreferrer"><BsTwitter />  @{twitter}</a></li>}
          </ul>
        </S.Datas>}

        {updateForm && <S.UpdateDatas onSubmit={handleSubmitUpdate}>
          <label for='name'>Name</label>
          <input type="text" id='name' placeholder='Name' value={name} onChange={({ target }) => setName(target.value)} />

          <label for='userName'>Username</label>
          <input type="text" id='userName' placeholder='Username' value={username} onChange={({ target }) => setUsername(target.value)} />

          <label for='bio'>Bio</label>
          <textarea id='bio' placeholder='Add a bio' value={bio} onChange={({ target }) => setBio(target.value)} />
          <p>You can <strong>@mention</strong> other users and organizations to link to them.</p>

          <input type="text" placeholder='Company' value={company} onChange={({ target }) => setCompany(target.value)} />
          <input type="text" placeholder='Location' value={location} onChange={({ target }) => setLocation(target.value)} />
          <input type="text" placeholder='Website' value={website} onChange={({ target }) => setWebsite(target.value)} />
          <input type="text" placeholder='Twitter username' value={twitter} onChange={({ target }) => setTwitter(target.value)} />
          <button>Save</button>
        </S.UpdateDatas> }
      </S.UserPhoto>
    </S.ProfileDatasArea>
  )
}

export default ProfileDatas;
