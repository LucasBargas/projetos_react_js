import InternalNav from "./InternalNav/InternalNav";
import ProfileContent from "./ProfileContent/ProfileContent";
import Head from '../../utils/Head';

const Profile = () => {
  return (
    <>
      <Head title='LucasBargas (Lucas Bargas)' />
      <main>
        <InternalNav />
        <ProfileContent />
      </main>
    </>
  )
}

export default Profile;
