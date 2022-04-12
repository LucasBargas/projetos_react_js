import { Link } from 'react-router-dom';
import Head from '../../utils/Head';
import * as S from './Overview.styles';
import html5 from '../../assets/images/stacks/html5-logo.png';
import css3 from '../../assets/images/stacks/css3-logo.png';
import sass from '../../assets/images/stacks/sass-logo.png';
import js from '../../assets/images/stacks/javascript-logo.png';
import react from '../../assets/images/stacks/react-logo.png';
import gmail from '../../assets/images/medias/gmail.svg';
import linkedin from '../../assets/images/medias/linkedin.svg';
import whatsapp from '../../assets/images/medias/whatsapp.svg';
import Pinned from './Pinned/Pinned';

const Overview = () => {
  return (
    <>
      <Head title='LucasBargas (Lucas Bargas)' />
      <S.OverviewContainer>
        <S.SmallText>
          <span>
            <Link to='/'>LucasBargas</Link> / README<span>.md</span>
          </span>
        </S.SmallText>

        <S.MainTitle>
          <h1>Olá Meu nome é Lucas Bargas</h1>
        </S.MainTitle>

        <S.AboutUser>
          <h2>Sou um apaixonado estudante Front End</h2>

          <S.UserStacks>
            <figure>
              <a href="#html5"><img src={html5} alt="HTML5 Logo" /></a>
            </figure>
            <figure>
              <a href="#css3"><img src={css3} alt="CSS3 Logo" /></a>
            </figure>
            <figure>
              <a href="sass"><img src={sass} alt="SASS Logo" /></a>
            </figure>
            <figure>
              <a href="#javascript"><img src={js} alt="JavaScript Logo" /></a>
            </figure>
            <figure>
              <a href="#reactjs"><img src={react} alt="ReactJS Logo" /></a>
            </figure>
          </S.UserStacks>

          <S.ContactsUser>
            <h2>Meu contatos:</h2>

            <S.ContactsRow>
              <figure>
                <a href="#whatsapp"><img src={whatsapp} alt="" /></a>
              </figure>

              <figure>
                <a href="#linkedin"><img src={linkedin} alt="" /></a>
              </figure>

              <figure>
                <a href="#gmail"><img src={gmail} alt="" /></a>
              </figure>
            </S.ContactsRow>
          </S.ContactsUser>

          <S.WebsiteUser>
            <h2>Meu portfólio também está disponível em meu site pessoal:</h2>
            <a href="https://projetoslucasbargas.com/" target="_blank" rel="noopener noreferrer">https://projetoslucasbargas.com/</a>
          </S.WebsiteUser>
        </S.AboutUser>
      </S.OverviewContainer>
      
      <Pinned />
    </>
  )
}

export default Overview;
