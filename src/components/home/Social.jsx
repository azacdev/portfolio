import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeProvider";

const Social = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="home__social">
      <a
        href="https://github.com/azacdev"
        className={`${theme ? "text-color-light" : "text-color-dark"} github`}
        target="blank"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/azacdev/"
        className={`${theme ? "text-color-light" : "text-color-dark"} linkedin`}
        target="blank"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://twitter.com/azacdev"
        className={`${theme ? "text-color-light" : "text-color-dark"} twitter`}
        target="blank"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default Social;
