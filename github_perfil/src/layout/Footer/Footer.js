import { Link } from 'react-router-dom';
import Container from '../../styles/Container';
import * as S from './Footer.styles';
import githubLogoFooter from '../../assets/images/github-logo-footer.png';

const Footer = () => {
  return (
    <footer>
      <Container>
        <S.FooterArea>
          <S.GithubCopy>
            <Link to='/'>
              <img src={githubLogoFooter} alt="Github Logo Footer" />
            </Link>
            <span>© 2022 GitHub, Inc.</span>
          </S.GithubCopy>

          <S.FooterNav>
            <ul>
              <li><a href="#terms">Terms</a></li>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#status">Status</a></li>
              <li><a href="#docs">Docs</a></li>
              <li><a href="#contact-github">Contact Github</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#api">API</a></li>
              <li><a href="#training">Training</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </S.FooterNav>
        </S.FooterArea>
      </Container>
    </footer>
  )
}

export default Footer;