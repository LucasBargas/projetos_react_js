import UpdateDatas from './ProfileUpdateDatas.styles';
import Input from '../../../../components/Input/Input';
import Textarea from '../../../../components/Textarea/Textarea';
import { FiMapPin } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { RiBuildingLine } from 'react-icons/ri';

const ProfileUpdateDatas = ({ handleSubmitUpdate, name, setName, username, setUsername, bio, setBio, company, setCompany, location, setLocation, website, setWebsite, twitter, setTwitter }) => {
  return (
    <UpdateDatas onSubmit={handleSubmitUpdate}>
      <label htmlFor='name'>Name</label>
      <Input type="text" id='name' placeholder='Name' value={name} onChange={({ target }) => setName(target.value)} />

      <label htmlFor='userName'>Username</label>
      <Input type="text" id='userName' placeholder='Username' value={username} onChange={({ target }) => setUsername(target.value)} />

      <label htmlFor='bio'>Bio</label>
      <Textarea height='81px' id='bio' placeholder='Add a bio' value={bio} onChange={({ target }) => setBio(target.value)} />
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
    </UpdateDatas>
  )
}

export default ProfileUpdateDatas;
