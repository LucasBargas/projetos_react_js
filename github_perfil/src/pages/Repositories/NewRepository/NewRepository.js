import React, { useEffect, useRef, useState } from 'react';
import * as S from './NewRepository.styles';
import { IoCloseSharp } from 'react-icons/io5';
import repoList from '../RepositoriesList/repoList';

const NewRepositorie = ({ setNewRepo }) => {
  const inputRepoTitle = useRef();
  const inputRepoDescription = useRef();
  const selectType = useRef();
  const selectLicense = useRef();
  const selectLanguage = useRef();

  const [repoTitle, setRepoTitle] = useState(undefined);
  const [repoDescription, setRepoDescription] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [license, setLicense] = useState(undefined);
  const [lang, setLang] = useState(undefined);

  const setDatas = () => {
    setType(selectType.current.value);
    setRepoTitle(inputRepoTitle.current.value);
    setRepoDescription(inputRepoDescription.current.value);
    setLicense(selectLicense.current.value);
    setLang(selectLanguage.current.value);
  }

  useEffect(() => {
    const newRepoDatas = {
      type: type ? type : undefined,
      typeDefault: type && repoTitle && license && lang ? 'All' : undefined,
      langDefault: lang ? 'All' : undefined,
      repoTitle: repoTitle ? repoTitle : undefined,
      repoDescription: repoDescription ? repoDescription : undefined,
      license: license ? license : undefined,
      lang: lang ? lang : undefined,
    }
  
    repoList.unshift(newRepoDatas);
  }, [type, repoTitle, repoDescription, license, lang]);

  const handleNewRepoModal = ({ target, currentTarget }) => {
    if (target === currentTarget) setNewRepo(null);
  }

  const sendNewRepo = () => {
    setDatas();
    setTimeout(() => {
      setNewRepo(null);
    }, 200);
  }

  return (
    <S.NewRepoContainer onClick={handleNewRepoModal}>
      <S.NewRepoModal>
        <S.CloseModal>
          <button onClick={() => setNewRepo(null)}>
            <IoCloseSharp />
          </button>
        </S.CloseModal>

        <S.NewRepoContent>
          <h2>Create a new repository</h2>

          <S.FormRepo onClick={(e) => e.preventDefault()}>
            <input ref={inputRepoTitle} id='title' type="text" placeholder='Set the Title...' />
            <textarea ref={inputRepoDescription} id='desc' type="text" placeholder='Set the Description...' />

            <S.SelectArea>
              <select ref={selectType} value={type}>
                <option disabled selected value="">Select the Type</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>

              <select ref={selectLicense} value={license}>
                <option disabled selected value="">Select the License</option>
                <option value="MIT license">MIT license</option>
              </select>

              <select ref={selectLanguage} value={lang}>
                <option disabled selected value="">Select the Language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Sass">Sass</option>
              </select>
            </S.SelectArea>

            <S.ModalReposButtons>
              <button id='send' onClick={sendNewRepo}>Send</button>
              <button id='cancel' onClick={() => setNewRepo(null)}>Cancel</button>
            </S.ModalReposButtons>
          </S.FormRepo>
        </S.NewRepoContent>
      </S.NewRepoModal>
    </S.NewRepoContainer>
  )
}

export default NewRepositorie;