import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface IconProps {
	href: string;
	title: string;
	icon: IconDefinition;
}

export function LinkIcon({ href, title, icon }: IconProps) {
	return (
		<Link href={href} target="_blank" title={title} rel="noreferrer">
			<Icon icon={icon} />
		</Link>
	);
}

const Link = styled.a`
	&,
	&:hover,
	&:focus,
	&:active {
		text-decoration: none;
		color: inherit;
	}
`;

export const Icon = styled(FontAwesomeIcon)`
	width: 2rem;
	height: 2rem;

	overflow: hidden;
	background-color: var(--very-dark-gray);
	color: white;
	&:hover,
	&:active {
		color: var(--gold);
	}
`;
