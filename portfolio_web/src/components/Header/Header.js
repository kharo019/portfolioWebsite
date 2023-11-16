import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillApple, AiFillAmazonSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SiIndeed } from "react-icons/si";


import { GiWarAxe } from "react-icons/gi";




import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
	<Div1>
		<Link href="/" passHref legacyBehavior>
			<a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
				<GiWarAxe size="3rem" /> <Span> Portfolio</Span>
			</a>
		</Link>
	</Div1>

	<Div2> 
		<li>
			<Link href = "#projects">
				<NavLink> Projects</NavLink>
			</Link>
		</li>
		<li>
			<Link href = "#tech">
				<NavLink> Technologies</NavLink>
			</Link>
		</li>
		<li>
			<Link href = "#about">
				<NavLink> About Me</NavLink>
			</Link>
		</li>
	</Div2>

	<Div3>
		<SocialIcons href="https://github.com/kharo019">
			<AiFillGithub size = "3rem" />
		</SocialIcons>
		<SocialIcons href="https://www.linkedin.com/in/kevin-haro-515283207/">
			<AiFillLinkedin size = "3rem" />
		</SocialIcons>
		<SocialIcons href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobseeker-profile--profile-one-frontend">
        	<SiIndeed size="3rem"/>
        </SocialIcons>
	</Div3>
  </Container>
);

export default Header;
