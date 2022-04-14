import React, { useEffect, useRef, useState } from 'react';
import * as S from './NewRepositorie.styles';
import { IoCloseSharp } from 'react-icons/io5';
import repoList from '../RepositoriesList/repoList';

// console.log(repoList);

const NewRepositorie = ({ setNewRepo }) => {
  const inputType = useRef();
  const inputRepoTitle = useRef();
  const inputRepoDescription = useRef();
  const inputLicense = useRef();
  const inputLang = useRef();

  const [type, setType] = useState(undefined);
  const [repoTitle, setRepoTitle] = useState(undefined);
  const [repoDescription, setRepoDescription] = useState(undefined);
  const [license, setLicense] = useState(undefined);
  const [lang, setLang] = useState(undefined);

  const setDatas = () => {
    setType(inputType.current.value);
    setRepoTitle(inputRepoTitle.current.value);
    setRepoDescription(inputRepoDescription.current.value);
    setLicense(inputLicense.current.value);
    setLang(inputLang.current.value);
  }

  useEffect(() => {
    const newRepoDatas = {
      type: type ? type : undefined,
      typeDefault: type && repoTitle && repoDescription && license && lang ? 'All' : undefined,
      langDefault: type && repoTitle && repoDescription && license && lang ? 'All' : undefined,
      repoTitle: repoTitle ? repoTitle : undefined,
      repoDescription: repoDescription ? repoDescription : undefined,
      license: license ? license : undefined,
      lang: lang ? lang : undefined,
    }
      // console.log(newRepoDatas)
      repoList.push(newRepoDatas);
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
            <input ref={inputType} id='type' type="text" placeholder='Set the Type...' />
            
            <input ref={inputRepoTitle} id='title' type="text" placeholder='Set the Title...' />

            <textarea ref={inputRepoDescription} id='desc' type="text" placeholder='Set the Description...' />

            <input ref={inputLicense} id='license' type="text" placeholder='Set the License' />

            <input ref={inputLang} id='lang' type="text" placeholder='Set the Language' />

            <button onClick={sendNewRepo}>Send</button>
            <button onClick={() => setNewRepo(null)}>Cancel</button>
          </S.FormRepo>
        </S.NewRepoContent>
      </S.NewRepoModal>
    </S.NewRepoContainer>
  )
}

export default NewRepositorie;