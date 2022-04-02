import React from 'react';
import * as S from './InitialSlider.styles';
import slideOne from '../../../assets/img/slide/slide-1.jpg';
import slideTwo from '../../../assets/img/slide/slide-2.jpg';
import slideThree from '../../../assets/img/slide/slide-3.jpg';
import Container from '../../../styles/Container';
import Button from '../../../components/Button/Button';

const sliderContent = [
  {
    id: 1,
    image: slideOne,
    title: 'Welcome to Multi',
    text: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
  },
  {
    id: 2,
    image: slideTwo,
    title: 'Lorem Ipsum Dolor',
    text: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
  },
  {
    id: 3,
    image: slideThree,
    title: 'Sequi ea ut et est quaerat',
    text: 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
  },
];

const InitialSlider = () => {
  return (
    <S.SliderContainer>
      {sliderContent.map(content => (
        <S.SliderBackground key={content.id} image={content.image}>
          <Container>
            <S.SliderContent>
              <h2>{content.title}</h2>
              <p>{content.text}</p>
              <Button borderColor='#ef6445' buttonColor='#ef6445' fontColor='#ffffff'>Read More</Button>
            </S.SliderContent>
          </Container>
        </S.SliderBackground>
      ))}
    </S.SliderContainer>
  )
}

export default InitialSlider;
