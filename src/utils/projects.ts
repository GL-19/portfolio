import { IProject } from "./IProject";
import todoList from "../images/todo-list.png";
import blog from "../images/blog.png";
import worldtrip from "../images/worldtrip.png";
import sunnyside from "../images/sunnyside-landing-page.png";
import introComponent from "../images/intro-component.png";
import socialProofSection from "../images/social-proof-section.png";
import pingPongComing from "../images/ping-pong-coming.png";
import fourCard from "../images/four-card.png";
import faqAccordion from "../images/faq-accordion.png";
import ipAddressTracker from "../images/ip-address-tracker.png";

export const projects: IProject[] = [
	{
		img: todoList,
		title: "Todo app with user authentication and drag and drop",
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
		img: blog,
		title: "Blog",
		description:
			"Aplicação desenvolvida para resolução do desafio 5 do bootcamp Ignite - Trilha React. O blog foi criado utilizando-se Typescript, Next.js, SCSS para estilização e o Prismic CMS para armazenamento dos artigos.",
		technologies: ["NextJS", "Typescript", "SCSS", "Prismic CMS"],
		githubUrl: "https://github.com/GL-19/blog-ignite",
		deployUrl: "https://gl-19-blog-ignite.vercel.app/",
	},
	{
		img: ipAddressTracker,
		title: "Github Search",
		description:
			"Aplicação desenvolvida para resolução do desafio 5 do bootcamp Ignite - Trilha React. O blog foi criado utilizando-se Typescript, Next.js, SCSS para estilização e o Prismic CMS para armazenamento dos artigos.",
		technologies: ["ReactJS", "Typescript", "Styled-components, Leaflet"],
		githubUrl: "https://github.com/GL-19/ip-address-tracker",
		deployUrl: "https://ip-address-tracker-gl-19.vercel.app/",
	},
	{
		img: ipAddressTracker,
		title: "Ip Address Tracker",
		description:
			"This is a solution to the Ip Address Tracker challenge on Frontend Mentor.",
		technologies: ["ReactJS", "Typescript", "Styled-components, Leaflet"],
		githubUrl: "https://github.com/GL-19/Pesquisa-Github",
		deployUrl: "https://gl-19-ip-address-tracker.vercel.app/",
	},
	{
		img: worldtrip,
		title: "Worldtrip",
		description:
			"Aplicação desenvolvida para resolução do desafio 6 do bootcamp Ignite - Trilha React. A aplicação consiste num site com informações das cidades mais visitadas de cada continente. Para seu desenvolvimento, utilizou-se Typescript, Next.js e ChakraUI como biblioteca de componentes.",
		technologies: ["NextJS", "Typescript", "ChakraUI"],
		githubUrl: "https://github.com/GL-19/worldtrip-ignite",
		deployUrl: "https://gl-19-worldtrip-ignite.vercel.app/",
	},
	{
		img: sunnyside,
		title: "Sunnyside landing page",
		description:
			"This is a solution to the Sunnyside Agency Landing page challenge on Frontend Mentor.",
		technologies: ["React", "Typescript", "Styled-components"],
		githubUrl: "https://github.com/GL-19/sunnyside-agency-landing-page",
		deployUrl: "https://gl-19-sunnyside-agency-landing-page.netlify.app/",
	},
	{
		img: introComponent,
		title: "Intro component with signup",
		description:
			"This is a solution to the Intro component with sign up form challenge on Frontend Mentor.",
		technologies: ["React", "Typescript", "SCSS"],
		githubUrl: "https://github.com/GL-19/intro-component-with-sign-up-form",
		deployUrl: "https://gl-19-intro-component-with-sign-up-form.netlify.app/",
	},
	{
		img: socialProofSection,
		title: "Social proof section",
		description:
			"This is a solution to the Social proof section challenge on Frontend Mentor.",
		technologies: ["React", "Typescript", "Styled-components"],
		githubUrl: "https://github.com/GL-19/social-proof-section",
		deployUrl: "https://gl-19-social-proof-section.netlify.app/",
	},
	{
		img: pingPongComing,
		title: "Ping Pong Coming Soon",
		description:
			"This is a solution to the Ping Pong Coming Soon challenge on Frontend Mentor.",
		technologies: ["React", "Typescript", "Styled-components"],
		githubUrl: "https://github.com/GL-19/ping-pong-coming-soon-page",
		deployUrl: "https://gl-19-ping-pong-coming-soon-page.netlify.app/",
	},
	{
		img: fourCard,
		title: "Four Card Feature Section",
		description:
			"This is a solution to the Four Card Feature Section challenge on Frontend Mentor.",
		technologies: ["React", "Typescript", "Styled-components"],
		githubUrl: "https://github.com/GL-19/four-card-feature-section",
		deployUrl: "https://gl-19-four-card-feature-section.netlify.app/",
	},
	{
		img: faqAccordion,
		title: "FAQ accordion card",
		description:
			"This is a solution to the FAQ accordion card challenge on Frontend Mentor.",
		technologies: ["HTML", "CSS", "Javascript"],
		githubUrl: "https://github.com/GL-19/faq-accordion-card",
		deployUrl: "https://gl-19-faq-accordion-card.netlify.app/",
	},
];
