import styled from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

import { IProject } from "../../utils/IProject";
import { LinkIcon } from "../Icons";

interface ProjectProps {
	project: IProject;
}

export function Project({ project }: ProjectProps) {
	return (
		<ProjectContainer>
			<ImgContainer>
				<img src={project.img} alt="project-preview" />
			</ImgContainer>

			<ContentContainer>
				<h1>{project.title}</h1>

				<TechsContainer>
					{project.technologies.map((technology) => (
						<TechItem>{technology}</TechItem>
					))}
				</TechsContainer>

				<p>{project.description}</p>

				<div>
					<LinkIcon href={project.githubUrl} title="Open Repository" icon={faGithub} />

					{project?.deployUrl && (
						<LinkIcon
							href={project.deployUrl}
							title="Open App Site"
							icon={faSquareArrowUpRight}
						/>
					)}
				</div>
			</ContentContainer>
		</ProjectContainer>
	);
}

const ProjectContainer = styled.div`
	max-width: 28rem;
	width: 100%;
	height: 100%;
	padding: 2rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	color: var(--white);
	background-color: var(--very-dark-gray);
	filter: brightness(1.33);
	border-radius: 5px;

	@media screen and (min-width: 850px) {
		flex-direction: row;
		max-width: 64rem;
	}
`;

const ImgContainer = styled.div`
	max-width: 28rem;
	width: 100%;

	img {
		width: 100%;
	}

	@media screen and (min-width: 850px) {
		max-width: 25rem;
	}
`;

const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	h1 {
		font-size: 1.5rem;
		font-weight: 600;
	}
`;

const TechItem = styled.div`
	background-color: rgb(22, 23, 34);
	color: var(--gold);
	border: 0.125rem solid var(--gold);
	border-radius: 5px;
	padding: 0.33rem;
	font-size: 0.9rem;
`;

const TechsContainer = styled.div`
	width: 100%;

	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
`;
