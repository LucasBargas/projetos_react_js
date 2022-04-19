import { useEffect, useState, useContext } from 'react';
import * as S from './ProfileDatas.styles';
import userPhoto from '../../../assets/images/user-photo.png';
import { UserContext } from '../../../utils/UserContext';
import ProfileDatasUser from './ProfileDatasUser/ProfileDatasUser';
import ProfileUpdateDatas from './ProfileUpdateDatas/ProfileUpdateDatas';

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
        <img id='photoUser' src={userPhoto} alt='User' />
        <div>
          {datasUser && (
            <>
              {name ? <h2>{name}</h2> : <h2>Lucas Bargas</h2>}
              {username ? <h3>{username}</h3> : <h3>LucasBargas</h3>}
            </>
          )}
        </div>
      </S.UserPhoto>

      {datasUser && <ProfileDatasUser bio={bio} handleUpdateUser={handleUpdateUser} company={company} location={location} website={website} twitter={twitter} />}

      {updateForm && <ProfileUpdateDatas handleSubmitUpdate={handleSubmitUpdate} name={name} setName={setName} username={username} setUsername={setUsername} bio={bio} setBio={setBio} company={company} setCompany={setCompany} location={location} setLocation={setLocation} website={website} setWebsite={setWebsite} twitter={twitter} setTwitter={setTwitter} /> }
    </S.ProfileDatasArea>
  )
}

export default ProfileDatas;
