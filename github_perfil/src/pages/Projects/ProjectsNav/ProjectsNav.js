import { useEffect, useRef, useState } from 'react';
import * as S from './ProjectsNav.styles';
import { RiProjectorLine } from 'react-icons/ri';
import { AiOutlineProject } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import Submenu from '../../../components/Submenu/Submenu';
import BetaFlag from '../../../components/BetaFlag/BetaFlag';

const ProjectsNav = () => {
  const input = useRef();
  const [projectsBeta, setProjectsBeta] = useState(true);
  const [projects, setProjects] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleProjectsBetaClick = () => {
    setProjectsBeta(true);
    setProjects(false);
  }

  const handleProjectsClick = () => {
    setProjectsBeta(false);
    setProjects(true);
  }

  useEffect(() => {
    if (projectsBeta) input.current.value = 'is:open ';
    if (projects) input.current.value = 'is:open sort:created-desc ';
  }, [projectsBeta, projects]);

  useEffect(() => {
    const handleDocClick = ({ target }) => {
      if (!target.closest('div#btnNewProject')) setShowSubmenu(false);
    }

    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  return (
    <S.ProjectsNavContainer projectsBeta={projectsBeta} projects={projects}>
      <ul>
        <li onClick={handleProjectsBetaClick}><a href="#projects-beta">
          <RiProjectorLine />
          Projects
          <BetaFlag />
          <span>0</span>
        </a></li>

        <li onClick={handleProjectsClick}><a href="#projects">
          <AiOutlineProject />
          Projects
          <span>0</span>
        </a></li>
      </ul>

      <S.InputProjects>
        <input ref={input} type="text" placeholder='Search all projects...' />
        <button>
          <BiSearch />
        </button>
      </S.InputProjects>

      <S.ButtonNewProject id='btnNewProject'>
        <button onClick={() => setShowSubmenu(!showSubmenu)}>
          New Project
        </button>

        <Submenu show={showSubmenu} width='22vw'>
          <ul>
            <S.SubmenuList onClick={() => setShowSubmenu(false)}>
              <S.SubmenuListArea>
                <RiProjectorLine />
                
                <S.SubmenuListContent>
                  <S.SubmenuListHeader>
                    New Project <BetaFlag />
                  </S.SubmenuListHeader>
                  <p>Plan and track work across repositories with custom fields and multiple views</p>
                </S.SubmenuListContent>
              </S.SubmenuListArea>
            </S.SubmenuList>

            <S.SubmenuList onClick={() => setShowSubmenu(false)}>
              <S.SubmenuListArea>
                <AiOutlineProject />
                
                <S.SubmenuListContent>
                  <S.SubmenuListHeader>
                    New Project
                  </S.SubmenuListHeader>
                  <p>Kanban-style project board</p>
                </S.SubmenuListContent>
              </S.SubmenuListArea>
            </S.SubmenuList>
          </ul>
        </Submenu>

      </S.ButtonNewProject>
    </S.ProjectsNavContainer>
  )
}

export default ProjectsNav;
