import * as S from './ProjectsContainer.styles';
import { IoCloseSharp } from 'react-icons/io5';
import { RiProjectorLine } from 'react-icons/ri';
import { BiBox } from 'react-icons/bi';

const ProjectsContainer = ({ projectsBeta, projects, open, setOpen, closed, setClosed }) => {
  const handleOpenClick = () => {
    setOpen(true);
    setClosed(false);
  }

  const handleClosedClick = () => {
    setOpen(false);
    setClosed(true);
  }

  const handleClearProjects = () => {
    setOpen(true);
    setClosed(false);
  }

  return (
    <>
      {closed && (
        <S.ProjectsListClear>
          <div onClick={handleClearProjects}>
            <button><IoCloseSharp /></button>
            Clear current search query and sorts
          </div>
        </S.ProjectsListClear>
      )}

      {projectsBeta && (
        <S.ProjectsList>
          <S.ProjectsListHeader open={open} closed={closed}>
            <nav>
              <ul>
                <li onClick={handleOpenClick}><a href="#open">
                  <RiProjectorLine />
                  0 Open
                </a></li>

                <li onClick={handleClosedClick}><a href="#close">
                  <BiBox />
                  0 Closed
                </a></li>
              </ul>

              <span>
                Sort
              </span>
            </nav>
          </S.ProjectsListHeader>

          <S.ProjectsListContent>
            <h2>You don't have any projects yet.</h2>
            <a href="#new-project">New project</a>
            <a href="learn-more">Learn More</a>
          </S.ProjectsListContent>
        </S.ProjectsList>
      )}

      {projects && (
        <S.ProjectsList>
          <S.ProjectsListHeader open={open} closed={closed}>
            <nav>
              <ul>
                <li onClick={handleOpenClick}><a href="#open">
                  <RiProjectorLine />
                  0 Open
                </a></li>

                <li onClick={handleClosedClick}><a href="#close">
                  <BiBox />
                  0 Closed
                </a></li>
              </ul>
            </nav>
          </S.ProjectsListHeader>

          <S.ProjectsListContent>
            <h2>You don't have any projects yet.</h2>
            <a href="#new-project">New project</a>
            <a href="learn-more">Learn More</a>
          </S.ProjectsListContent>
        </S.ProjectsList>
      )}
    </>
  )
}

export default ProjectsContainer;
