import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub, FaLinkedin ,FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Tag } from "antd";
import profile from "../assets/profile.png";
import resume from "../assets/Resume-Fanuel-Amare.pdf";
import developer from "../assets/undraw_web_developer_re_h7ie.svg";
const Home2 = () => {
  return (
    <div
      className="container-fluid p-0"
      style={{ background: "darkslategray", height: "100vh" }}
    >
      <div
        className="container-fluid p-0 d-flex"
        style={{ minHeight: "100vh", background: "inherit" }}
      >
        <div
          style={{ width: "10%", minHeight: "100vh" }}
          className="m-0 d-flex flex-column justify-content-end align-items-center"
        >
          <div>
            <ul className="list-unstyled fs-2">
              <li>
                <a href="https://www.linkedin.com/in/fanucd/" target="blank">
                  <AiOutlineLinkedin color="white" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Fanu-Cd" target="blank">
                  <FaGithub color="white" />
                </a>
              </li>
              <li>
                <a href="mailto:fanuelamare6577@gmail.com" target="blank">
                  <SiGmail color="white" />
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{ width: "0.1rem", height: "10rem" }}
            className="bg-white"
          ></div>
        </div>
        <div
          style={{ width: "80%", minHeight: "100vh" }}
          className="p-3 d-flex flex-column"
        >
          <div className="d-flex justify-content-between align-items-center">
            <div style={{ minWidth: "10%", minHeight: "5rem" }}>
              <p className="text-white d-inline fs-3 me-1">{"<"}</p>
              <p className="fs-3 d-inline me-1" style={{ color: "red" }}>
                Fanu
              </p>
              <p className="text-white d-inline fs-3">{"/>"}</p>
            </div>
            <div style={{ width: "60%", minHeight: "5rem" }}>
              <ul className="d-flex text-white list-unstyled w-100 justify-content-between align-items-center text-decoration-none">
                <li>
                  <a className=" text-decoration-none text-white" href="/#">
                    Home
                  </a>
                </li>
                <li>
                  <a className=" text-decoration-none text-white" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a
                    className=" text-decoration-none text-white"
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className=" text-decoration-none text-white"
                    href="#experience"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className=" text-decoration-none text-white"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <button className="btn btn-light">Let's Talk</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="row"
            style={{ width: "100%", minHeight: "10rem", marginTop: "10%" }}
          >
            <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-sm-center justify-content-md-start align-items-sm-center align-items-md-start">
              <p className="m-0 text-white fs-2">Hi There</p>
              <p className="m-0 fs-1" style={{ color: "red" }}>
                I'm Fanuel Amare
              </p>
              <p className="m-0 fs-2 text-white">
                I'm a Full Stack Web Developer
              </p>
              <span className="mt-3 d-flex align-items-center justify-content-sm-center">
                <a href={resume} download>
                  <button className="btn btn-danger">Resume</button>
                </a>

                <a href="#contact">
                  <button className="btn rounded border text-white ms-5">
                    Contact Me
                  </button>
                </a>
              </span>
            </div>
            <div className="col-md-6 mt-sm-5 mt-md-0 col-sm-12 d-flex justify-content-center align-items-center">
              <img
                src={developer}
                alt="Dev"
                style={{ width: "100%", height: "15rem" }}
              />
            </div>
          </div>
          <div
            className="text-white"
            id="about"
            style={{ minHeight: "5rem", marginTop: "10rem" }}
          >
            <h2 style={{ color: "" }}>About</h2>
            <p className="fs-5">
              I am a MERN stack enthusiast, architecting dynamic solutions from
              backend MongoDB structures to expressive React frontends. I thrive
              on the synergy of Node.js, molding versatile applications that
              redefine user experiences.
            </p>
          </div>
          <hr className="text-white w-50" />
          <div
            className="text-white mt-3"
            id="skills"
            style={{ minHeight: "5rem" }}
          >
            <h2 style={{ color: "" }}>Top Skills</h2>
            <Tag color="magenta" className="fs-6">
              HTML5
            </Tag>
            <Tag color="magenta" className="fs-6">
              CSS3
            </Tag>
            <Tag color="magenta" className="fs-6">
              JavaScript
            </Tag>
            <Tag color="magenta" className="fs-6">
              TypeScript
            </Tag>
            <Tag color="magenta" className="fs-6">
              React
            </Tag>
            <Tag color="magenta" className="fs-6">
              Redux
            </Tag>
            <Tag color="magenta" className="fs-6">
              Node JS
            </Tag>
            <Tag color="magenta" className="fs-6">
              Express JS
            </Tag>
            <Tag color="magenta" className="fs-6">
              Mongo DB
            </Tag>
            <Tag color="magenta" className="fs-6">
              Ant design
            </Tag>
            <Tag color="magenta" className="fs-6">
              Bootstrap 5
            </Tag>
            <Tag color="magenta" className="fs-6">
              Material UI
            </Tag>
            <Tag color="magenta" className="fs-6">
              Git
            </Tag>
            <Tag color="magenta" className="fs-6">
              SharePoint
            </Tag>
          </div>
          <hr className="text-white w-50" />
          <div
            className="text-white mt-3"
            id="experience"
            style={{ minHeight: "5rem" }}
          >
            <h2 style={{ color: "" }}>Experience</h2>
            <ul>
              <li>
                Tria Trading plc
                <br />
                <p className="m-0">Full Stack Software Developer</p>
                <p className="ps-3 m-0">[ July 24, 2023 - Present ]</p>
              </li>
            </ul>
          </div>
          <hr className="text-white w-50" />
          <div
            className="text-white mt34"
            id="projects"
            style={{ minHeight: "5rem" }}
          >
            <h2 style={{ color: "" }}>Top Projects</h2>
            <ul>
              <li>
                Bid Management System
                <p>
                  A bid management system streamlines the process of submitting,
                  tracking, and managing bids or proposals for projects or
                  contracts. It's a centralized platform that organizes
                  bid-related information, facilitates collaboration among team
                  members, and enhances the efficiency of the bidding process.
                  This system typically allows for the creation, submission, and
                  analysis of bids, optimizing the chances of securing projects
                  while improving overall workflow transparency and
                  effectiveness.
                </p>
                <small style={{ color: "red" }}>Skills Applied : </small>
                <br />
                <Tag>HTML5</Tag>
                <Tag>CSS5</Tag>
                <Tag>JavaScript</Tag>
                <Tag>React</Tag>
                <Tag>Node JS</Tag>
                <Tag>Express JS</Tag>
                <Tag>Mongo DB</Tag>
                <Tag>Materiak UI</Tag>
                <Tag>Bootstrap</Tag>
              </li>
              <li className="mt-5">
                Smart Office System
                <p>
                  A smart office refers to an interconnected workspace enhanced
                  by technology to optimize efficiency, comfort, and
                  productivity. Integrating IoT devices, sensors, and
                  automation, a smart office environment adapts to user
                  preferences, automates routine tasks, and monitors space
                  utilization. This technology-driven setup improves energy
                  efficiency, enhances employee well-being, and facilitates
                  seamless communication and collaboration within the workspace.
                </p>
                <small className="" style={{ color: "red" }}>
                  Skills Applied :{" "}
                </small>
                <br />
                <Tag>HTML5</Tag>
                <Tag>CSS5</Tag>
                <Tag>JavaScript</Tag>
                <Tag>TypeScript</Tag>
                <Tag>React</Tag>
                <Tag>Ant Design</Tag>
                <Tag>SharePoint</Tag>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="container-fluid p-3 border rounded"
        style={{ minHeight: "10rem", background: "darkslategray" }}
      >
        <div
          className="mx-auto d-flex flex-column justify-content-center align-items-center"
          style={{ width: "80%" }}
        >
          <h1 className="text-white">Contact Me</h1>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "40%", minHeight: "10rem", borderRadius: "5rem" }}
          >
            <img
              alt="Me"
              src={profile}
              style={{
                width: "10rem",
                height: "10rem",
                borderRadius: "inherit",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            className="w-50 border rounded m-3 d-flex justify-content-center align-items-center"
            style={{ minHeight: "15rem" }}
            id="contact"
          >
            <ul
              className="list-unstyled text-white"
              style={{ minWidth: "60%" }}
            >
              <li>
                <SiGmail className="fs-3" />
                <br />
                fanuelamare6577@gmail.com
              </li>
              <li>
                <FaPhoneAlt className="fs-3" />
                <br />
                +251 968725990
              </li>
              <li>
                <FaLinkedin className="fs-3" />
                <br /> https://www.linkedin.com/in/fanucd/
              </li>
              <li>
                <FaGithub className="fs-3" />
                <br /> https://github.com/Fanu-Cd/
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
