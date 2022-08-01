import { IProject } from "../../utils/IProject";
import styled from "styled-components";

interface ProjectProps {
	project: IProject;
}

export function Project({ project }: ProjectProps) {
	return (
		<ProjectContainer>
			<div>
				<img src={project.img} alt="project-gif" />
			</div>
			<ContentContainer>
				<h1>{project.title}</h1>
				<TechsContainer>
					{project.technologies.map((technology) => (
						<p>{technology}</p>
					))}
				</TechsContainer>
				<p>{project.description}</p>
				<div>
					<a href={project.githubUrl}>
						<img src="" alt="github-link" />
					</a>
					{project.deployUrl ?? (
						<a href={project.deployUrl}>
							<img src="" alt="site-link" />
						</a>
					)}
				</div>
			</ContentContainer>
		</ProjectContainer>
	);
}

const ProjectContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	background-color: rgb(29, 30, 42);
	border-radius: 5px;

	@media screen and (min-width: 850px) {
		flex-direction: row;
	}
`;

const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const TechsContainer = styled.div`
	width: 100%;

	display: flex;
	flex: row wrap;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;
`;
