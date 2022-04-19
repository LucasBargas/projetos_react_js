import * as S from './Pinned.styles';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

const Pinned = () => {
  return (
    <S.PinnedContainer>
      <h2>Pinned</h2>

      <S.PinnedRepos>
        <S.PinnedRepoCard>
          <S.RepoTitle>
            <HiOutlineDesktopComputer />
            <a href="#repo" title='projetos_html_e_css'>projetos_html_e_css</a>
            <span>Public</span>
          </S.RepoTitle>     
          <p>Projetos desenvolvidos apenas com HTML e CSS, a partir de layouts e aplicações disponíveis na web.</p>
          <S.Indicator>
            <span className='html'></span>
            <p>HTML</p>
          </S.Indicator>   
        </S.PinnedRepoCard>

        <S.PinnedRepoCard>
          <S.RepoTitle>
            <HiOutlineDesktopComputer />
            <a href="#repo" title='projetos_html_e_sass'>projetos_html_e_sass</a>
            <span>Public</span>
          </S.RepoTitle>
          <p>Projetos desenvolvidos somente com HTML e o poderoso pré-processador SASS, a partir de layouts e aplicações disponíveis na web.</p>
          <S.Indicator>
            <span className='sass'></span>
            <p>Sass</p>
          </S.Indicator>        
        </S.PinnedRepoCard>

        <S.PinnedRepoCard>
          <S.RepoTitle>
            <HiOutlineDesktopComputer />
            <a href="#repo" title='projetos_javascript'>projetos_javascript</a>
            <span>Public</span>
          </S.RepoTitle>
          <p>Projetos desenvolvidos apenas com JavaScript Puro, a partir de layouts e aplicações disponíveis na web.</p>
          <S.Indicator>
            <span className='html'></span>
            <p>HTML</p>
          </S.Indicator>   
        </S.PinnedRepoCard>
        
        <S.PinnedRepoCard>
          <S.RepoTitle>
            <HiOutlineDesktopComputer />
            <a href="#repo" title='projetos_react_js'>projetos_react_js</a>
            <span>Public</span>
          </S.RepoTitle>
          <p>Projetos desenvolvidos apenas com a biblioteca ReactJS, a partir de layouts e aplicações disponíveis na web.</p>   
          <S.Indicator>
            <span className='js'></span>
            <p>JavaScript</p>
          </S.Indicator>
        </S.PinnedRepoCard>

        <S.PinnedRepoCard>
          <S.RepoTitle>
            <HiOutlineDesktopComputer />
            <a href="#repo" title='projetos_curso_js_b7web'>projetos_curso_js_b7web</a>
            <span>Public</span>
          </S.RepoTitle>
          <p>Projetos desenvolvidos durante o curso de JavaScript da B7Web sob tutela do professor, Bonieky Lacerda.</p>   
          <S.Indicator>
            <span className='js'></span>
            <p>JavaScript</p>
          </S.Indicator>
        </S.PinnedRepoCard>
      </S.PinnedRepos>
    </S.PinnedContainer>
  )
}

export default Pinned;
