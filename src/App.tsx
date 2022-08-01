import { Project } from "./components/Project";
import { projects } from "./utils/projects";
import styled from "styled-components";

function App() {
	return (
		<ProjectsContainer>
			{projects.map((project, index) => (
				<Project key={index} project={project} />
			))}
		</ProjectsContainer>
	);
}

export default App;

const ProjectsContainer = styled.main`
	margin: 0 auto;
	padding: 2rem;

	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
