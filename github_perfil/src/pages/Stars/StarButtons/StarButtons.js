import { useEffect, useRef, useState } from 'react';
import * as S from './StarButtons.styles';
import { IoCloseSharp } from 'react-icons/io5';
import Submenu from '../../../components/Submenu/Submenu';

const StarButtons = () => {
  const sortSubmenu = useRef();
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleCloseSubmenu = () => setShowSubmenu(!showSubmenu);
  
  const handleSubmenuClick = ({ target }) => {
    const submenuList = [...sortSubmenu.current.children];
    submenuList.shift();
    submenuList.forEach(list => list.classList.remove('check'))
    target.classList.add('check');
    setShowSubmenu(false);
  }

  useEffect(() => {
    const handleDocClick = ({ target }) => {
      if (!target.closest('li.sortBtnArea')) setShowSubmenu(false);
    }

    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) setShowSubmenu(false);
  }

  return (
    <nav>
      <S.StarHeaderButtons>
        <S.SortButton className='sortBtnArea'>
          <button onClick={handleCloseSubmenu} className='btnOpenSubmenu sortBtn'>Sort</button>

          <Submenu show={showSubmenu} width='22vw' onClick={handleOutsideClick}>
            <ul ref={sortSubmenu}>
              <S.closeSubmenu>
                <span>Sort by</span>
                <button onClick={() => setShowSubmenu(false)}><IoCloseSharp /></button>
              </S.closeSubmenu>
              <li className='check' onClick={handleSubmenuClick}>Name ascending (A-Z)</li>
              <li onClick={handleSubmenuClick}>Name descending (A-Z)</li>
              <li onClick={handleSubmenuClick}>Newest</li>
              <li onClick={handleSubmenuClick}>Oldest</li>
              <li onClick={handleSubmenuClick}>Last update</li>
            </ul>
          </Submenu>  
        </S.SortButton>

        <S.CreateListButton>
          <button className='btnOpenSubmenu'>Create list</button>
        </S.CreateListButton>
      </S.StarHeaderButtons>
    </nav>
  )
}

export default StarButtons;