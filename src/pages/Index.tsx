import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  User,
  Code,
  Briefcase,
  MessageSquare,
  Star,
  ArrowRight,
  ChevronDown,
  GraduationCap,
  Building,
} from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    hero: true, // Hero should be visible immediately
    about: false,
    education: false,
    experience: false,
    projects: false,
    skills: false,
    contact: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Make about section visible after a short delay
    const timer = setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, about: true }));
    }, 500);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
    alert("Thanks for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const skills = [
    { name: "SQL", level: 80 },
    { name: "Excel", level: 85 },
    { name: "Tableau", level: 75 },
    { name: "Python", level: 75 },
    { name: "React", level: 90 },
    { name: "HTML5", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node JS", level: 80 },
  ];

  const projects = [
    {
      title: "E-Commerce Platform - LUXE",
      description:
        "Developed a modern fashion e-commerce site with dynamic product listings, promotional banners, and mobile-friendly design",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe364b9bc647f4e62a890e37b88b01827%2F7ce98ef2304f4b6f82a0039a511a90aa",
      tech: ["React", "TypeScript", "Tailwind", "Vite"],
      liveUrl: "https://pavanluxe.netlify.app",
      githubUrl: "https://github.com/pavan-function/Fashion-Store",
    },
    {
      title: "FireChat GPT",
      description:
        "Developed a AI chatbot using React and OpenRouter's Chat Completion API",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe364b9bc647f4e62a890e37b88b01827%2Fcd0d47f26f9945c593765413640120a5",
      tech: ["React", "Firebase", "Framer Motion", "TypeScript"],
      liveUrl: "https://pavanchatbot.netlify.app",
      githubUrl: "#",
    }, 
    {
      title: "Travel Explorer",
      description:
        "Includes search, continent filter, live weather, favorites via local storage, and responsive UI with smooth animations.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe364b9bc647f4e62a890e37b88b01827%2F3782d4627361440f8fc90524022e62a0",
      tech: ["React", "Javascript", "OpenWeather API", "Vite"],
      liveUrl: "https://pavantravels.netlify.app",
      githubUrl: "https://github.com/pavan-function/Travel-Explorer",
    },
    {
      title: "Portfolio Dashboard",
      description:
        "Modern personal portfolio website built with React and TailwindCSS featuring smooth animations, responsive design, and dark theme.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "TailwindCSS", "Framer Motion", "TypeScript"],
      liveUrl: "https://pavanrajk.me",
      githubUrl: "https://github.com/pavan-function/Portfolio",
    },
    {
      title: "Finance Tracker",
      description:
        "Personal finance management app with expense tracking, budget planning, interactive charts, and monthly reports with local storage.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Chart.js", "Local Storage", "CSS3"],
      liveUrl: "https://pavantracker.netlify.app",
      githubUrl: "https://github.com/pavan-function/budget-tracker",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold gradient-text">Pavan Raj</div>
            <div className="hidden md:flex space-x-8">
              {[
                "About",
                "Education",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-24"
      >
        
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Data Analyst</span>
              <br />
              <span className="text-foreground">Turning messy data into clear decisions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-left animation-delay-300">
              I analyze real-world data to uncover trends, solve business problems, and build dashboards that drive decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-600">
              <Button
  asChild
  size="lg"
  className="group bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 inline-flex items-center gap-2"
>
  <a
    href="https://drive.google.com/file/d/1RjRvfzc-TqOPgHd88wL4257sn2Rw8bSz/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Download className="w-4 h-4" />
    <span>View Resume</span>
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </a>
</Button>

              <a
                href="mailto:pavanrajkotagiri123@gmail.com"
                className="group hover:scale-105 transition-all duration-300 hover:bg-accent hover:text-accent-foreground border-border hover:border-accent inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </div>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown
              className="w-8 h-8 mx-auto text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`transition-all duration-1000 ${isVisible.about ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <User className="w-12 h-12 inline-block mr-4 text-primary" />
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 flex flex-col justify-start items-center">
                <div className="w-80 h-96 mx-auto md:mx-0 rounded-2xl overflow-hidden glass-effect hover-glow">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe364b9bc647f4e62a890e37b88b01827%2F60307b19242347ba8a6579ddf437dab0"
                    alt="Pavan raj"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold gradient-text">
                  Hi, I'm Pavan raj
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I turn messy data into decisions.Background in front-end development, now focused fully on data analytics. I combine business understanding with technical skills to solve real problems using data.I don’t rely on perfect datasets. I clean, analyze, and extract insights from real-world data, then present them in a way that’s easy to understand and act on.Projects include e-commerce analytics and EU job market analysis using SQL, Python, and Tableau.
                </br>
                  Tools: SQL • Python • Excel • Tableau
                </p>
                

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Python",
                      "SQL",
                      "Excel",
                      "Tableau",
                      "React",
                      "HTML5",
                      "Tailwind CSS",
                      "Node Js"
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`transition-all duration-1000 ${isVisible.education ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <GraduationCap className="w-12 h-12 inline-block mr-4 text-primary" />
              Education
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-effect hover-glow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Bachelors In Mechanical Engineering
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    JNTU Hyderabad • 2018 - 2021
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Completed a Bachelor's degree in Mechanical Engineering with
                    strong foundation related to CAD and MAT.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect hover-glow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Masters In Information Systems
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Saint Louis University • 2023-2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Master's degree in Information Systems, focusing on advanced
                    topics in software development, data management, and system
                    analysis. Engaged in projects that integrate backend
                    technologies with frontend design to create comprehensive
                    web solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`transition-all duration-1000 ${isVisible.experience ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <Building className="w-12 h-12 inline-block mr-4 text-primary" />
              Experience
            </h2>

            <div className="space-y-8">
              <Card className="glass-effect hover-glow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-xl text-primary">
                        Revature
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-1">
                        Frontend Developer  • Intern (remote)
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0 font-medium">
                      May 2025 - Sept 2025
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    1. Developed and optimized responsive web applications with React, HTML5, Tailwind CSS, and TypeScript, improving page load speed and responsiveness by 30% across devices.
                    <br />
                    <br />
                    2. Collaborated with cross-functional teams (backend, QA, and design) to integrate RESTful APIs and deliver UI features, reducing development cycle time by 20% through reusable components and learnt python with eperienced backend team.
                    <br />
                    <br />
                    3. Enhanced application performance and user experience by debugging and refactoring code, resulting in a 25% decrease in reported UI issues and higher customer satisfaction scores.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "TailwindCSS", "HTML5"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect hover-glow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-xl text-primary">
                        TCS Company Ltd.
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-1">
                        UI/UX Developer • Onsite (India)
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0 font-medium">
                      Feb 2022 - Aug 2023
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    1. Worked as a UI/UX Developer on enterprise web
                    applications for internal and client-facing platforms.
                    Designed and developed responsive user interfaces using
                    HTML5, CSS3, JavaScript, and modern front-end libraries.
                    <br />
                    <br />
                    2. Led a team of four designers to optimize the quality
                    assurance process in collaboration with QA leads, employing
                    streamlined workflows, enhancing product handover efficiency
                    to Development and Engineering teams
                    <br />
                    <br />
                    3. Effectively managed multiple UX projects, coordinating
                    with cross-functional teams to align design initiatives with
                    business goals, which accelerated project timelines by 20%
                    and enhanced team productivity.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Javascript", "CSS3", "HTML5"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect hover-glow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-xl text-primary">
                        Excelerate
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-1">
                        Intern - Multi Functional Rotational Roles • Saint Louis
                        University
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0 font-medium">
                      2022 - 2023
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Innovation Consultant: </strong>Led a team of five
                    members from ideation to proposal for a new product concept.
                    Conducted user research and delivered user-driven digital
                    experience concepts.
                    <br />
                    <br />
                    <strong>Social Media Analyst: </strong>Performed platform
                    audits, developed audience personas, and proposed engagement
                    strategies to enhance digital presence.
                    <br />
                    <br />
                    <strong>Data Analyst: </strong>Built Tableau dashboards and
                    data visualizations to support key business decisions,
                    applying principles of effective data storytelling.
                    <br />
                    <br />
                    <strong>Project Manager: </strong>Developed event project
                    plans, coordinated tasks, and applied risk management
                    strategies for smooth execution of a global event.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Tableau", "Excel"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect hover-glow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-xl text-primary">
                        SUZUKI
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-1">
                        Marketing Analyst • Onsite (India)
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0 font-medium">
                      Jan 2018 - Apr 2018
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Worked as a Marketing Analyst, focusing on data analysis and
                    market research to drive strategic decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`transition-all duration-1000 ${isVisible.projects ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <Briefcase className="w-12 h-12 inline-block mr-4 text-primary" />
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`group glass-effect hover-glow transition-all duration-500 hover:scale-105 ${
                    isVisible.projects
                      ? "animate-zoom-in"
                      : "opacity-0 scale-95"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                      <Button size="sm" variant="ghost">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div
            className={`transition-all duration-1000 ${isVisible.skills ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <Code className="w-12 h-12 inline-block mr-4 text-primary" />
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`space-y-3 ${isVisible.skills ? "animate-fade-up" : "opacity-0 translate-y-4"}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: isVisible.skills ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground">
                Always learning and exploring new technologies to stay current
                with industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div
            className={`transition-all duration-1000 ${isVisible.contact ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <MessageSquare className="w-12 h-12 inline-block mr-4 text-primary" />
              Get In Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold gradient-text">
                  Let's work together!
                </h3>
                <p className="text-lg text-muted-foreground">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you have a question or just want to say hi,
                  I'd love to hear from you!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:pavanrajkotagiri123@gmail.com">pavanrajkotagiri123@gmail.com</a>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                    <a
                      href="https://github.com/pavan-function"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5 h-5 inline-block"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                    <a
                      href="https://www.linkedin.com/in/pavanrajkotagiri/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5 h-5 inline-block"
                    >
                      <Linkedin className="w-5 h-5"/>
                    </a>
                    </Button>
                  </div>
                </div>
              </div>

              <Card className="glass-effect">
                <CardContent className="p-6">
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="focus:ring-primary focus:border-primary transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="focus:ring-primary focus:border-primary transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        className="focus:ring-primary focus:border-primary transition-all duration-200 resize-none"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full group hover:scale-105 transition-all duration-300"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Pavan Raj. Built with React, Vite, Tailwind CSS and Love ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
