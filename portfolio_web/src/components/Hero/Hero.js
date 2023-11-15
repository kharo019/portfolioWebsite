import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
	<LeftSection>
		<SectionTitle main center>
			Welcome To <br />
			My Personal Portfolio
		</SectionTitle>
		<SectionText>
			Hello There! I'm a software engineer and web developer based in El Paso, TX. My name is Kevin Haro and I am passion
		</SectionText>
		<Button onClick = {() => window.location = 'https://youtube.com'}>Learn More</Button>
	</LeftSection>
  </Section>
);

export default Hero;