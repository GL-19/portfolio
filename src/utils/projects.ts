import { IProject } from "./IProject";
import todoAppImg from "../images/todo-list.png";

export const projects: IProject[] = [
	{
		img: todoAppImg,
		title: "Todo App",
		description:
			"A aplicação consiste numa lista de todos, com ordenamento realizado por meio de drag and drop e autenticação de usuário para acesso à lista. Para o desenvolvimento do front-end, utilizou-se Typescript, React e Styled-components, enquanto para o back-end utilizou-se NodeJS, Express, PostgreSQL e Docker. O deploy do back-end foi realizado no Heroku, e o do front-end na Vercel.",
		technologies: [
			"React",
			"Typescript",
			"styled-components",
			"NodeJS",
			"Express",
			"PostgreSQL",
			"Heroku",
		],
		githubUrl: "https://github.com/GL-19/todo-app-web",
		deployUrl: "https://gl-19-todo-app.vercel.app",
	},
	{
		img: todoAppImg,
		title: "Test Title",
		description: "Test description",
		technologies: ["React", "Typescript", "styled-components", "Redux"],
		githubUrl: "githubUrl",
		deployUrl: "deployUrl",
	},
];
