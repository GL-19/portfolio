import { Project } from "./components/Project";
import { projects } from "./utils/projects";
import styled from "styled-components";
import { Header } from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<ProjectsContainer>
				{projects.map((project, index) => (
					<Project key={index} project={project} />
				))}
			</ProjectsContainer>
		</>
	);
}

export default App;

const ProjectsContainer = styled.main`
	margin: 0 auto;
	padding: 1.5rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;

	@media screen and (min-width: 850px) {
		padding: 3rem;
		gap: 2rem;
	}
`;
