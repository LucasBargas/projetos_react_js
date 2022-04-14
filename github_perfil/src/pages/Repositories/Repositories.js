import Head from '../../utils/Head';
import * as S from './Repositories.styles';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import RepositoriesList from './RepositoriesList/RepositoriesList';

const Repositories = () => {
  const [valueToFilter, setValueToFilter] = useState('All');
  const [typeButton, setTypeButton] = useState(false);
  const [languageButton, setLanguageButton] = useState(false);

  const handleValueToFilter = ({ target }) => {
    setValueToFilter((target.innerText));
    setLanguageButton(false);
    setTypeButton(false);
  }

  const handleOpenSubmenu = ({ target }) => {
    if (target.closest('div.type')) {
      setTypeButton(!typeButton);
      setLanguageButton(false);
    }
    if (target.closest('div.language')) {
      setLanguageButton(!languageButton);
      setTypeButton(false);
    }
  }

  const closeSubMenu = () => {
    setTypeButton(false);
    setLanguageButton(false);
  }

  useEffect(() => {
    const handleDocClick = ({ target }) => {
      if (!target.closest('div.filterButton')) closeSubMenu();
    }
    document.addEventListener('click', handleDocClick);
  }, []);

  return (
    <>
      <Head title='Your Repositories' />
      <S.RepoContainer>
        <S.SearchArea>
          <input type="text" placeholder='Find a repository...' />

          <S.FilterButtons>
            <S.Button className='filterButton type'>
              <span onClick={handleOpenSubmenu}>Type</span>
              <S.ButtonSubmenuContainer show={typeButton}>
                <S.ButtonSubmenu>
                  <S.CloseButtonSubmenu>
                    <p>Select type</p>
                    <button onClick={() => closeSubMenu()}><IoCloseSharp /></button>
                  </S.CloseButtonSubmenu>
                  <ul>
                    <li onClick={handleValueToFilter}>All</li>
                    <li onClick={handleValueToFilter}>Public</li>
                    <li onClick={handleValueToFilter}>Private</li>
                  </ul>
                </S.ButtonSubmenu>
              </S.ButtonSubmenuContainer>
            </S.Button>

            <S.Button className='filterButton language'>
              <span onClick={handleOpenSubmenu}>Language</span>
              <S.ButtonSubmenuContainer show={languageButton}>
                <S.ButtonSubmenu>
                  <S.CloseButtonSubmenu>
                    <p>Select language</p>
                    <button onClick={() => closeSubMenu()}><IoCloseSharp /></button>
                  </S.CloseButtonSubmenu>
                  <ul>
                    <li onClick={handleValueToFilter}>All</li>
                    <li onClick={handleValueToFilter}>JavaScript</li>
                    <li onClick={handleValueToFilter}>HTML</li>
                    <li onClick={handleValueToFilter}>Sass</li>
                    <li onClick={handleValueToFilter}>CSS</li>
                  </ul>
                </S.ButtonSubmenu>
              </S.ButtonSubmenuContainer>
            </S.Button>
          </S.FilterButtons>

          <S.ButtonNewRepo>
            <button><HiOutlineDesktopComputer /> New</button>
          </S.ButtonNewRepo>
        </S.SearchArea>

        <RepositoriesList valueToFilter={valueToFilter} setValueToFilter={setValueToFilter} />
      </S.RepoContainer>
    </>
  )
}

export default Repositories;
