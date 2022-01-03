import Link from 'next/link';
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Hi, I am <br/>
       Dipendra Laxmi
     </SectionTitle>
     <SectionText>
       The purpose of this portfolio is to make you communicate with me if you need me to build your amaznig projects.
     </SectionText>
     <Button onClick={() => window.open('https://dipendrachand.com.np', '_blank')}>
       Learn More
     </Button>
   </LeftSection>
  </Section>
);

export default Hero;