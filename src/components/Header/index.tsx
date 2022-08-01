import styled from "styled-components";
import { LinkIcon, Icon } from "../Icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Header() {
	return (
		<header>
			<div>
				<h1>Oi, eu me chamo Glauber Jesus Loiola</h1>
				<div>
					<LinkIcon href="https://github.com/GL-19" title="Open Github" icon={faGithub} />
					<LinkIcon
						href="https://www.linkedin.com/in/glauberloiola19/"
						title="Open Linkedin"
						icon={faLinkedin}
					/>
				</div>
				<div>
					<p>Email: gloiola19@hotmail.com.br</p>
					<p>Whatsapp: 55 31 975653502</p>
				</div>
			</div>
		</header>
	);
}
