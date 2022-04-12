import InternalNav from "./InternalNav/InternalNav";
import Head from '../../utils/Head';
import ProfileDatas from "./ProfileDatas/ProfileDatas";
import ProfilePages from "./ProfilePages/ProfilePages";
import Container from '../../styles/Container';
import ProfileArea from "./Profile.styles";

const Profile = () => {
  return (
    <>
      <Head title='LucasBargas (Lucas Bargas)' />
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
