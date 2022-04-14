import { useEffect, useState } from 'react';
import * as S from './RepositoriesList.styles';
import { IoCloseSharp } from 'react-icons/io5';

const repoList = [
  {
    type: 'Public',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projetos_react_js',
    repoDescription: 'Projetos desenvolvidos apenas com a biblioteca ReactJS, a partir de layouts e aplicações disponíveis na web.',
    license: 'MIT license',
    lang: 'JavaScript',
  },
  {
    type: 'Private',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projeto_private_exemplo2',
    repoDescription: 'Os projetos contidos neste repositório foram desenvolvidos durante o curso de SASS e SCSS do professor Matheus Battisti na Udemy.',
    license: 'MIT license',
    lang: 'CSS',
  },
  {
    type: 'Public',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projetos_javascript',
    repoDescription: 'Projetos desenvolvidos apenas com JavaScript Puro, a partir de layouts e aplicações disponíveis na web.',
    license: 'MIT license',
    lang: 'HTML',
  },
  {
    type: 'Public',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projetos_html_e_sass',
    repoDescription: 'Projetos desenvolvidos somente com HTML e o poderoso pré-processador SASS, a partir de layouts e aplicações disponíveis na web.',
    license: 'MIT license',
    lang: 'Sass',
  },
  {
    type: 'Public',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projetos_html_e_css',
    repoDescription: 'Projetos desenvolvidos apenas com HTML e CSS, a partir de layouts e aplicações disponíveis na web.',
    license: 'MIT license',
    lang: 'HTML',
  },
  {
    type: 'Private',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projeto_private_exemplo1',
    repoDescription: 'Os projetos contidos neste repositório foram desenvolvidos durante o curso de SASS e SCSS do professor Matheus Battisti na Udemy.',
    license: 'MIT license',
    lang: 'CSS',
  },
  {
    type: 'Public',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projetos_curso_js_b7web',
    repoDescription: 'Projetos desenvolvidos durante o curso de JavaScript da B7Web sob tutela do professor, Bonieky Lacerda.',
    license: 'MIT license',
    lang: 'JavaScript',
  },
  {
    type: 'Public',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projetos_curso_sass_udemy',
    repoDescription: 'Os projetos contidos neste repositório foram desenvolvidos durante o curso de SASS e SCSS do professor Matheus Battisti na Udemy.',
    license: 'MIT license',
    lang: 'HTML',
  },
  {
    type: 'Private',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projeto_private_exemplo3',
    repoDescription: 'Os projetos contidos neste repositório foram desenvolvidos durante o curso de SASS e SCSS do professor Matheus Battisti na Udemy.',
    license: 'MIT license',
    lang: 'JavaScript',
  },
];

const RepositoriesList = ({ valueToFilter, setValueToFilter }) => {
  const [resultLength, setResultLength] = useState(null);

  const repoListFilter = repoList.filter(repoFilter => (
    repoFilter.type === valueToFilter || repoFilter.typeDefault === valueToFilter || repoFilter.lang === valueToFilter || repoFilter.langDefault === valueToFilter)
  );

  useEffect(() => {
    setResultLength(repoListFilter.length);
  }, [repoListFilter.length]);

  return (
    <S.RepoListArea>
      <ul>
        {valueToFilter !== 'All' && resultLength && (
          <S.ClearFilterMessage>
            <span><strong>{resultLength}</strong> results for <strong>{valueToFilter}</strong> repositories sorted by <strong>last updated</strong></span>
            
            <S.ClearFilterBtn onClick={() => setValueToFilter('All')}>
              <button><IoCloseSharp /></button>
              Clear filter
            </S.ClearFilterBtn>
          </S.ClearFilterMessage>
        )}
        {
          repoListFilter.map(repoMap => (
            <li key={repoMap.repoTitle}>
              <S.RepoTitle>
                <a href={`#${repoMap.repoTitle}`}>{repoMap.repoTitle}</a>
                <span>{repoMap.type}</span>
              </S.RepoTitle>
              <p>{repoMap.repoDescription}</p>
            </li>
          ))
        }
      </ul>
    </S.RepoListArea>
  )
}

export default RepositoriesList;
