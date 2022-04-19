import { useState } from 'react';
import Head from '../../utils/Head';
import ProjectsContainer from './ProjectsContainer/ProjectsContainer';
import ProjectsNav from './ProjectsNav/ProjectsNav';

const Projects = () => {
  const [projectsBeta, setProjectsBeta] = useState(true);
  const [projects, setProjects] = useState(false);
  const [open, setOpen] = useState(true);
  const [closed, setClosed] = useState(false);

  return (
    <>
      <Head title='Your Projects' />
      <section>
        <ProjectsNav 
          projectsBeta={projectsBeta} 
          setProjectsBeta={setProjectsBeta} 
          projects={projects} 
          setProjects={setProjects}
          open={open}
          setOpen={setOpen}
          closed={closed}
          setClosed={setClosed} 
        />

        <ProjectsContainer 
          projectsBeta={projectsBeta} 
          projects={projects}
          open={open}
          setOpen={setOpen}
          closed={closed}
          setClosed={setClosed} 
        />
      </section>
    </>
  )
}

export default Projects;
