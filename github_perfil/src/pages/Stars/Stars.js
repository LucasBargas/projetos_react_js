import Head from '../../utils/Head';
import * as S from './Stars.styles';
import { BsStar } from 'react-icons/bs';
import StarButtons from './StarButtons/StarButtons';
import BetaFlag from '../../components/BetaFlag/BetaFlag';

const Stars = () => {

  return (
    <>
      <Head title='Your Stars' />
      <section>
        <S.StarsHeader>
          <h2>Lists</h2>
          <StarButtons />
        </S.StarsHeader>

        <S.StarsContainer>
          <BsStar />
          <h3>Create your first list</h3>
          <p>Lists make it easier to organize and curate repositories that you have starred. <a href="#create">Create your first list.</a></p>
        </S.StarsContainer>
        <S.StarLegend>
          <BetaFlag /> 
          <p>Lists are currently in beta. <a href="#share">Share feedback and report bugs.</a></p>
        </S.StarLegend>
      </section>
    </>
  )
}

export default Stars;
