/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { GiSpiderMask } from 'react-icons/gi';

import { Container, Section, Description, Warning, Link } from './styles';

const Home = () => {
  return (
    <Container>
      <Section>
        <Description>
          "With great power there must also come great responsibility"
        </Description>
        <p>or simply</p>
        <Description>"With great power comes great responsibility"</Description>
        <p>or simply</p>
        <Warning>
          "Don't forget my star and follow me on Github/LucasReinaldo"
        </Warning>
      </Section>
      <GiSpiderMask size={40} />
      <Link href="https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/">
        TypeScript + React: Why I don't use React.FC
      </Link>
    </Container>
  );
};

export default Home;
