import styled from "styled-components";
import { Icon } from "../Icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Header() {
	return (
		<header>
			<h1>Oi, eu me chamo Glauber Jesus Loiola</h1>

			<div>
				<Icon href="https://github.com/GL-19" title="Open Github" icon={faGithub} />
				<Icon
					href="https://www.linkedin.com/in/glauberloiola19/"
					title="Open Linkedin"
					icon={faLinkedin}
				/>
			</div>
		</header>
	);
}
