import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { IProject } from "../../utils/IProject";

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
					<a
						href={project.githubUrl}
						target="_blank"
						title="Open Repository"
						rel="noreferrer"
					>
						<Icon icon={faSquareGithub} />
					</a>
					{project?.deployUrl && (
						<a
							href={project.deployUrl}
							target="_blank"
							title="Open App Site"
							rel="noreferrer"
						>
							<Icon icon={faSquareArrowUpRight} />
						</a>
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

	color: rgb(202, 205, 232);
	background-color: rgb(29, 30, 42);
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

	a,
	a:hover,
	a:focus,
	a:active {
		text-decoration: none;
		color: inherit;
	}
`;

const TechItem = styled.div`
	background-color: rgb(22, 23, 34);
	border: 0.125rem solid rgb(202, 205, 232);
	border-radius: 5px;
	padding: 0.5rem;
`;

const TechsContainer = styled.div`
	width: 100%;

	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
	width: 2rem;
	height: 2rem;

	overflow: hidden;
	background-color: rgb(29, 30, 42);
	color: rgb(202, 205, 232);
`;
