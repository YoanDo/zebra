import { Parallax } from 'react-scroll-parallax';

import {
  IntroductionWrap,
  Illustrations,
  TextWrap,
  Rectangle
} from './styles'
import concrete1 from './resources/concrete_1.png'
import concrete2 from './resources/concrete_2.png'

const Introduction = () => (
  <IntroductionWrap>
    <Illustrations>
      <Parallax y={[0, 40]} x={[45, 45]} >
        <img src={concrete1} alt="" />
      </Parallax>
      <Parallax y={[60, -80]} >
        <img src={concrete2} alt="" />
      </Parallax>
      <Parallax y={[-220, -80]} x={[10, 10]} >
        <Rectangle />
      </Parallax>
    </Illustrations>
    <TextWrap>
      753 Les Zèbres Cristallins sont de jeunes designers à la recherche de matérialités inédites proposant une nouvelle vision esthétique du béton.
      <br />
      <br />
      Le geste, l’intention de l’homme est plus que jamais présente dans nos réalisations où le process fait la beauté de l’objet fini.
      <br />
      <br />
      Le béton devient une œuvre d’art, de la décoration, un objet du quotidien ou tout simplement la concrétisation d’un rêve ou d’un désir.
      Nous aimons nous associer à des artistes pour créer des collections inédites.
      <br />
      <br />
      Nos réalisations sont des pièces uniques ou de petites séries, fabriquées par des experts passionnés. Enrichissez votre quotidien d’un supplément d’âme avec l’une de nos créations...
    </TextWrap>
  </IntroductionWrap>
)

export default Introduction
