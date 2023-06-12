import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://github.com/azacdev" className="home__social-icon" target="blank">
          <FaGithub/>
        </a>

        <a href="https://linkedin.com/in/azacdev/" className="home__social-icon" target="blank">
          <FaLinkedin/>
        </a>

        <a href="https://twitter.com/azacdev" className="home__social-icon" target="blank">
          <FaTwitter/>
        </a>
    </div>
  )
}

export default Social