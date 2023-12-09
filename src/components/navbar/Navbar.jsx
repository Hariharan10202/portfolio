import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Obessed with Emerging Tech
        </motion.span>
        <div className="social">
          <a href="https://github.com/Hariharan10202" target="_blank">
            <FaGithub size={30} />
          </a>
          <a href="https://www.instagram.com/hariharan10202/" target="_blank">
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/hariharan-t-1447ba210/"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
