import InternalNav from "./InternalNav/InternalNav";
import Head from '../../utils/Head';
import ProfileDatas from "./ProfileDatas/ProfileDatas";
import ProfilePages from "./ProfilePages/ProfilePages";
import Container from '../../styles/Container';
import ProfileArea from "./Profile.styles";
import { UserContext } from "../../utils/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { name, username } = useContext(UserContext);

  return (
    <>
      <Head title={`${name}(${username})`} />
      <main>
        <Container>
          <ProfileArea>
            <InternalNav />
            <ProfileDatas />
            <ProfilePages />
          </ProfileArea>
        </Container>
      </main>
    </>
  )
}

export default Profile;
