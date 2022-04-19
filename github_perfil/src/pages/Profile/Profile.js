import InternalNav from "./InternalNav/InternalNav";
import Head from '../../utils/Head';
import ProfileDatas from "./ProfileDatas/ProfileDatas";
import ProfilePages from "./ProfilePages/ProfilePages";
import Container from '../../styles/Container';
import ProfileArea from "./Profile.styles";
import { UserContext } from "../../utils/UserContext";
import { useContext, useEffect, useRef, useState } from "react";

const Profile = () => {
  const { name, username } = useContext(UserContext);
  const [userPhoto, setUserPhoto] = useState(null);
  const profile = useRef();

  useEffect(() => {
    const profileArr = [...profile.current.children];
    const getProfileDatas = [...profileArr[1].children];
    const getProfileDatasPhoto = [...getProfileDatas[0].children].filter(el => el.id === 'photoUser');
    setUserPhoto(getProfileDatasPhoto[0]);
  }, []);

  return (
    <>
      <Head title={name && username ? `${name} (${username})` : 'Lucas Bargas (LucasBargas)'} />
      <main>
        <Container>
          <ProfileArea ref={profile}>
            <InternalNav userPhotoRef={userPhoto} />
            <ProfileDatas />
            <ProfilePages />
          </ProfileArea>
        </Container>
      </main>
    </>
  )
}

export default Profile;
