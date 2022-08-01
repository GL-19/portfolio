import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface IconProps {
	href: string;
	title: string;
	icon: IconDefinition;
}

export function Icon({ href, title, icon }: IconProps) {
	return (
		<Link href={href} target="_blank" title={title} rel="noreferrer">
			<StyledFontAwesomeIcon icon={icon} />
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

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	width: 2rem;
	height: 2rem;

	overflow: hidden;
	background-color: rgb(29, 30, 42);
	color: rgb(202, 205, 232);
`;
