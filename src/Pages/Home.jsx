import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Tag } from "antd";
import profile from "../assets/profile.png";
// import resume from "../assets/Resume-Fanuel-Amare.pdf"; //OLD
import resume from "../assets/My Resume.pdf";
import developer from "../assets/undraw_web_developer_re_h7ie.svg";
const Home = () => {
  const logoName = "Fanu";
  const MY_NAME = "Fanuel Amare";

  //OL POSITION
  // const MY_POSITION = "Full Stack Web Developer";
  const MY_POSITION = "Full Stack Web Developer (Frontend Focus)";

  //OLD BIO
  // const MY_SHORT_BIO = `I am a MERN stack enthusiast, architecting dynamic solutions from
  //             backend MongoDB structures to expressive React frontends. I thrive
  //             on the synergy of Node.js, molding versatile applications that
  //             redefine user experiences.`;

  const MY_SHORT_BIO = `Hello, I am Fanuel Amare. I am a a Passionate Full Stack Software Developer with a focus on Frontend Development. I graduated from Addis Ababa University with a Bachelor degree in Computer Science with a Great Distinction and I have been working on Software Development for over 5 years.`;

  const sideLinks = [
    {
      icon: <AiOutlineLinkedin color="white" />,
      href: "https://www.linkedin.com/in/fanucd/",
    },
    {
      icon: <FaGithub color="white" />,
      href: "https://github.com/Fanu-Cd",
    },
    {
      icon: <SiGmail color="white" />,
      href: "mailto:fanuelamare6577@gmail.com",
    },
  ];

  const navLinks = [
    { label: "Home", href: "/#" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Let's Talk", href: "/#contact", useBtn: true },
  ];

  const topSkills = [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "React Native" },
    { name: "Redux" },
    { name: "Next.js" },
    { name: "Node JS" },
    { name: "Express JS" },
    { name: "Mongo DB" },
    { name: "Mongoose" },
    { name: "Tailwindcss" },
    { name: "Ant design" },
    { name: "Bootstrap 5" },
    { name: "Material UI" },
    { name: "Mantine UI" },
    { name: "Git" },
    { name: "Microsoft SharePoint" },
    { name: "SPFx" },
  ];

  const workExperiences = [
    {
      companyName: " Tria Trading plc",
      position: "Full Stack Software Developer",
      duration: "July 24, 2023 - Present",
      description: `Led development of high-performance enterprise systems such as: a Smart Office Solution using SharePoint (SPFx + ASP.NET) and a Healthcare Licensing System using React, Next.js, and Nest.js.
Both systems feature secure user/auth management, real-time notifications, document handling, and workflow automation.
Key contributor across full-stack development, ensuring scalability and modern architecture.
`,
    },
  ];

  const educationDetails = [
    {
      institutionName: "Addis Ababa University",
      major: "Computer Science",
      degree: "Bachelor Degree",
      graduatedIn: "July, 2023",
    },
  ];

  const topProjects = [
    {
      title: "Cheretanet(Bid Management System)",
      // description: `A bid management system streamlines the process of submitting,
      //             tracking, and managing bids or proposals for projects or
      //             contracts. It's a centralized platform that organizes
      //             bid-related information, facilitates collaboration among team
      //             members, and enhances the efficiency of the bidding process.
      //             This system typically allows for the creation, submission, and
      //             analysis of bids, optimizing the chances of securing projects
      //             while improving overall workflow transparency and
      //             effectiveness.`,
      description: `Cheretanet(meaning 'a network for bidding' in amharic) is an online platform designed to streamline the bidding and tender management processes. It allows bidders, procurement department heads, and procurement endorsing committee heads to actively participate in tender processes, while the general public can view tender advertisements and bid awards without requiring an account.",
The platform offers seamless registration and account management for suppliers, along with efficient bid management tools for procurement departments and endorsement committees. It delivers a user-friendly interface and smooth user experience, ensuring secure, up-to-date bidding processes. Additionally, it facilitates communication between procurement departments to streamline operations.
The system was developed using React.js, Node.js, Express.js, MongoDB, and Mongoose.
`,
      skills: [
        "HTML5",
        "CSS5",
        "JavaScript",
        "React",
        "Node JS",
        "Express JS",
        "Mongo DB",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: `academiX (Learning Management System(LMS))`,
      // description: `My LMS project automates the manual working environments in
      //             schools. It has admin and non-admin user features. Users can
      //             create user accounts by their own and then get approved by the
      //             admin or the admin creates accounts for others and share their
      //             credentials. The admin has control over user accounts and can
      //             ban and re-activate accounts. Every action related to user
      //             accounts is delivered to the respective user via email. School
      //             admins register departments and courses and assign Teachers
      //             for courses. Teachers can find their assigned courses and
      //             upload course matrials as well as exams. Students can find
      //             courses inside their departments, register for them and update
      //             their status on the courses through time. Students can also
      //             manage their activities, put notes, and upload their activity
      //             files.`,
      description: `academiX is a comprehensive Learning Management System (LMS) that offers robust school administration tools for administrators and efficient course and lesson management features for lecturers. Students can seamlessly access courses and lessons delivered by their lecturers through an intuitive, user-friendly, and engaging interface.
The platform offers a secure authentication system and robust administrative management for students, instructors, and courses. Students can seamlessly register for and manage courses and lessons, while instructors are empowered to deliver content and design examinations efficiently. The intuitive design ensures an optimized experience for all users.
Built with modern technologies such as React.js, Node.js, Express.js, MongoDB, and Mongoose.`,
      skills: [
        "HTML5",
        "CSS5",
        "JavaScript",
        "React",
        "Node JS",
        "Express JS",
        "Mongo DB",
        "Ant Design",
        "Bootstrap",
      ],
    },
    {
      // title: `Smart Office System`,
      title: `kiraybet (House rental platform)`,
      // description: `A smart office refers to an interconnected workspace enhanced
      //             by technology to optimize efficiency, comfort, and
      //             productivity. Integrating IoT devices, sensors, and
      //             automation, a smart office environment adapts to user
      //             preferences, automates routine tasks, and monitors space
      //             utilization. This technology-driven setup improves energy
      //             efficiency, enhances employee well-being, and facilitates
      //             seamless communication and collaboration within the workspace.`,
      description: `Kiraybet(meaning 'house rent' in Amharic) is A rental house platform where owners can list properties, tenants can browse listings, and both parties can communicate through a Real time chat system.
The platform delivers a secure authentication system with smooth onboarding for house tenants and owners. It includes dynamic filtering capabilities for house listings, an intuitive and responsive user interface, and interactive map integration for easy property navigation. House owners can efficiently post and manage rental services, while tenants benefit from a real-time chat system to communicate directly with owners.
The system was built using modern technologies, including React.js, Node.js, Express.js, MongoDB, Mongoose, and Socket.io.`,
      skills: [
        "HTML5",
        "CSS5",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
      ],
    },
  ];

  const contactDetails = [
    { icon: <SiGmail className="fs-3" />, value: "fanuelamare6577@gmail.com" },
    {
      icon: <FaPhoneAlt className="fs-3" />,
      value: "+251 968725990",
    },
    {
      icon: <FaLinkedin className="fs-3" />,
      value: "https://www.linkedin.com/in/fanucd/",
    },
    {
      icon: <FaGithub className="fs-3" />,
      value: "https://github.com/Fanu-Cd/",
    },
  ];

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
              {sideLinks.map((link) => (
                <li>
                  <a href={link.href} target="blank">
                    {link.icon}
                  </a>
                </li>
              ))}
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
                {logoName}
              </p>
              <p className="text-white d-inline fs-3">{"/>"}</p>
            </div>
            <div style={{ width: "60%", minHeight: "5rem" }}>
              <ul className="d-flex text-white list-unstyled w-100 justify-content-between align-items-center text-decoration-none">
                {navLinks.map((link) => (
                  <li>
                    <a
                      className=" text-decoration-none text-white"
                      href={link.href}
                    >
                      {link.useBtn ? (
                        <button className="btn btn-light">{link.label}</button>
                      ) : (
                        link.label
                      )}
                    </a>
                  </li>
                ))}
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
                I'm {MY_NAME}
              </p>
              <p className="m-0 fs-2 text-white">I'm a {MY_POSITION}</p>
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
            <p className="fs-5">{MY_SHORT_BIO}</p>
          </div>
          <hr className="text-white w-50" />
          <div
            className="text-white mt-3"
            id="skills"
            style={{ minHeight: "5rem" }}
          >
            <h2 style={{ color: "" }}>Top Skills</h2>
            {topSkills.map((skill) => (
              <Tag color="magenta" className="fs-6">
                {skill.name}
              </Tag>
            ))}
          </div>
          <hr className="text-white w-50" />
          <div
            className="text-white mt-3"
            id="experience"
            style={{ minHeight: "5rem" }}
          >
            <h2 style={{ color: "" }}>Education</h2>
            <ul>
              {educationDetails.map((education) => (
                <li>
                  {education.institutionName}
                  <br />
                  <p className="m-0">{`${education.degree} in ${education.major}`}</p>
                  <p className="ps-3 m-0">{`Graduated in: ${education.graduatedIn}`}</p>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="text-white mt-3"
            id="experience"
            style={{ minHeight: "5rem" }}
          >
            <h2 style={{ color: "" }}>Experience</h2>
            <ul>
              {workExperiences.map((experience) => (
                <li>
                  {experience.companyName}
                  <br />
                  <p className="m-0">{experience.position}</p>
                  <p className="ps-2 m-0">[ {experience.duration} ]</p>
                  <p className="ps-3 m-0 fs-6 fst-italic">
                    {experience.description}
                  </p>
                </li>
              ))}
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
              {topProjects.map((project, index) => (
                <li className={`${index !== 0 && `mt-3`}`}>
                  {project.title}
                  <p>{project.description}</p>
                  <small style={{ color: "red" }}>Skills Applied : </small>
                  <br />
                  {project.skills.map((skill) => (
                    <Tag>{skill}</Tag>
                  ))}
                </li>
              ))}
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
              {contactDetails.map((detail) => (
                <li>
                  {detail.icon}
                  <br />
                  {detail.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
