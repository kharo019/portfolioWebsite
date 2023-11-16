import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const projectsDemo = [{
// 		title: 'Project 1',
// 		description: 'This is a really long description for this sample project.'
// 	}, {
// 		title: 'Project 2',
// 		description: 'This is a really long description for this sample project.'
// 	}, {
// 		title: 'Project 3',
// 		description: 'This is a really long description for this sample project.'
// 	}, {
// 		title: 'Project 4',
// 		description: 'This is a really long description for this sample project.'
// 	}];
 
const Projects = () => (
  <Section nopadding id = "projects">
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<SectionText>Listed from newest to oldest</SectionText>
		<GridContainer>
			{projects.map(({ id, image, title, description, tags, source, visit}) => (
				<BlogCard key = {id}>
					<Img src = {image}/>
						<TitleContent>
							<HeaderThree title> {title}</HeaderThree>
							<Hr />
						</TitleContent>		
						<CardInfo> {description} </CardInfo>	
						<div>
							<TitleContent>Stack</TitleContent>
							<TagList>
								{tags.map((tag, i)=> (
									<Tag key = {i}>{tag}</Tag>
								))}
							</TagList>
						</div>		
						<UtilityList>
							<ExternalLinks href = {visit}>Code</ExternalLinks>
							<ExternalLinks href = {source}>Source</ExternalLinks>

						</UtilityList>
				</BlogCard>
			))}
		</GridContainer>
  </Section>
);

export default Projects;