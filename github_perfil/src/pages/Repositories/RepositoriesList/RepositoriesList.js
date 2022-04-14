import { useEffect, useState } from 'react';
import * as S from './RepositoriesList.styles';
import { IoCloseSharp } from 'react-icons/io5';
import { GoLaw } from 'react-icons/go';

const repoList = [
  {
    type: 'Public',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projetos_react_js',
    repoDescription: 'Projetos desenvolvidos apenas com a biblioteca ReactJS, a partir de layouts e aplicações disponíveis na web.',
    license: 'MIT license',
    lang: 'JavaScript',
    class: 'javaScript',
  },
  {
    type: 'Private',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projeto_private_exemplo2',
    repoDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien nibh, semper ac justo ut, eleifend aliquam.',
    lang: 'CSS',
    class: 'css',
  },
  {
    type: 'Public',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projetos_javascript',
    repoDescription: 'Projetos desenvolvidos apenas com JavaScript Puro, a partir de layouts e aplicações disponíveis na web.',
    license: 'MIT license',
    lang: 'HTML',
    class: 'html',
  },
  {
    type: 'Public',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projetos_html_e_sass',
    repoDescription: 'Projetos desenvolvidos somente com HTML e o poderoso pré-processador SASS, a partir de layouts e aplicações disponíveis na web.',
    license: 'MIT license',
    lang: 'Sass',
    class: 'sass',
  },
  {
    type: 'Public',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projetos_html_e_css',
    repoDescription: 'Projetos desenvolvidos apenas com HTML e CSS, a partir de layouts e aplicações disponíveis na web.',
    license: 'MIT license',
    lang: 'HTML',
    class: 'html',
  },
  {
    type: 'Private',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projeto_private_exemplo1',
    repoDescription: 'Morbi at est nec enim scelerisque condimentum ut sit amet felis. Aliquam maximus leo at ex congue laoreet. Praesent hendrerit diam ut tellus pulvinar hendrerit.',
    lang: 'CSS',
    class: 'css',
  },
  {
    type: 'Public',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projetos_curso_js_b7web',
    repoDescription: 'Projetos desenvolvidos durante o curso de JavaScript da B7Web sob tutela do professor, Bonieky Lacerda.',
    license: 'MIT license',
    lang: 'JavaScript',
    class: 'javaScript',
  },
  {
    type: 'Public',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projetos_curso_sass_udemy',
    repoDescription: 'Os projetos contidos neste repositório foram desenvolvidos durante o curso de SASS e SCSS do professor Matheus Battisti na Udemy.',
    license: 'MIT license',
    lang: 'HTML',
    class: 'html',
  },
  {
    type: 'Private',
    typeDefault: 'All',
    langDefault: 'All',
    repoTitle: 'projeto_private_exemplo3',
    repoDescription: 'Nullam vel orci lacinia, pellentesque tortor ac, ullamcorper risus. Phasellus vitae lacus sit amet nulla finibus facilisis.',
    lang: 'JavaScript',
    class: 'javaScript'
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
              <S.RepoTags>
                <S.TagLang>
                  <span className={repoMap.class}></span>
                  {repoMap.lang}
                </S.TagLang>
                <S.TagLicense>
                  {repoMap.license && <GoLaw />}
                  {repoMap.license}
                </S.TagLicense>
              </S.RepoTags>
            </li>
          ))
        }
      </ul>
    </S.RepoListArea>
  )
}

export default RepositoriesList;
