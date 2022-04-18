import { useEffect, useState } from 'react';
import * as S from './RepositoriesList.styles';
import repoList from './repoList';
import { IoCloseSharp } from 'react-icons/io5';
import { GoLaw } from 'react-icons/go';

const RepositoriesList = ({ valueToFilter, setValueToFilter, subMenuLinks }) => {
  const [resultLength, setResultLength] = useState(null);

  const handleClearFilter = () => {
    const setLink = subMenuLinks();
    setLink.forEach(link => link.classList.remove('active'));
    setLink[0].classList.add('active');
    setValueToFilter('All');
  }

  const repoListFilter = repoList.filter(repoFilter => 
    (repoFilter.type === valueToFilter || repoFilter.typeDefault === valueToFilter || repoFilter.lang === valueToFilter || repoFilter.langDefault === valueToFilter)
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
            
            <S.ClearFilterBtn onClick={handleClearFilter}>
              <button><IoCloseSharp /></button>
              Clear filter
            </S.ClearFilterBtn>
          </S.ClearFilterMessage>
        )}
        { valueToFilter && (
          repoListFilter.map((repoMap) => (
            <li key={repoMap.repoTitle}>
              <S.RepoTitle>
                <a href={`#${repoMap.repoTitle}`}>{repoMap.repoTitle}</a>
                <span>{repoMap.type}</span>
              </S.RepoTitle>
              <p>{repoMap.repoDescription}</p>
              <S.RepoTags>
                <S.TagLang>
                  <span className={repoMap.lang.toLowerCase()}></span>
                  {repoMap.lang}
                </S.TagLang>
                <S.TagLicense>
                  {repoMap.license && <GoLaw />}
                  {repoMap.license}
                </S.TagLicense>
              </S.RepoTags>
            </li>
          ))
        )}
      </ul>
    </S.RepoListArea>
  )
}

export default RepositoriesList;
