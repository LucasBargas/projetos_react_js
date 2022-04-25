import Head from '../../utils/Head';
import * as S from './Repositories.styles';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import { useEffect, useState, useRef } from 'react';
import RepositoriesList from './RepositoriesList/RepositoriesList';
import Input from '../../components/Input/Input';
import Submenu from '../../components/Submenu/Submenu';

const Repositories = () => {
  const submenuType = useRef();
  const submenuLang = useRef();
  const input = useRef();

  const [inputFilter, setInputFilter] = useState('');
  const [valueToFilter, setValueToFilter] = useState('All');
  const [typeButton, setTypeButton] = useState(false);
  const [languageButton, setLanguageButton] = useState(false);

  const submenuLinksArr = () => {
    const submenuTypeArr = [...submenuType.current.children];
    const submenuLangArr = [...submenuLang.current.children];
    return submenuTypeArr.concat(submenuLangArr);
  }

  const handleValueToFilter = ({ target }) => {
    const linksArr = submenuLinksArr();
    linksArr.forEach(link => link.classList.remove('active'));
    target.classList.add('active');

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
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) closeSubMenu();
  }

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <>
      <Head title='Your Repositories' />
      <S.RepoContainer>
        <S.SearchArea>
          <Input input={input} type="text" placeholder='Find a repository...' value={inputFilter} onChange={({ target }) => setInputFilter(target.value)} />
          <S.FilterButtons>
            <S.Button className='filterButton type'>
              <button onClick={handleOpenSubmenu}>Type</button>

              <Submenu show={typeButton} onClick={handleOutsideClick}>
                <S.CloseButtonSubmenu>
                  <p>Select type</p>
                  <button onClick={() => closeSubMenu()}><IoCloseSharp /></button>
                </S.CloseButtonSubmenu>
                <ul ref={submenuType}>
                  <li className='active' onClick={handleValueToFilter}>All</li>
                  <li onClick={handleValueToFilter}>Public</li>
                  <li onClick={handleValueToFilter}>Private</li>
                </ul>
              </Submenu>
            </S.Button>

            <S.Button className='filterButton language'>
              <button onClick={handleOpenSubmenu}>Language</button>
              <Submenu show={languageButton} onClick={handleOutsideClick}>
                <S.CloseButtonSubmenu>
                  <p>Select language</p>
                  <button onClick={() => closeSubMenu()}><IoCloseSharp /></button>
                </S.CloseButtonSubmenu>
                <ul ref={submenuLang}>
                  <li onClick={handleValueToFilter}>All</li>
                  <li onClick={handleValueToFilter}>JavaScript</li>
                  <li onClick={handleValueToFilter}>HTML</li>
                  <li onClick={handleValueToFilter}>Sass</li>
                  <li onClick={handleValueToFilter}>CSS</li>
                </ul>
              </Submenu>
            </S.Button>
          </S.FilterButtons>

          <S.ButtonNewRepo>
            <button><HiOutlineDesktopComputer /> New</button>
          </S.ButtonNewRepo>
        </S.SearchArea>

        <RepositoriesList valueToFilter={valueToFilter} setValueToFilter={setValueToFilter} subMenuLinks={submenuLinksArr} inputFilter={inputFilter} />
      </S.RepoContainer>
    </>
  )
}

export default Repositories;
