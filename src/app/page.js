import BackgroundContainer from "@/app/components/BackgroundContainer";
import ProjectListItem from "@/app/components/ProjectListItem";

export default function Home() {
  return (
    <>
      <BackgroundContainer color="neutral" shade="900" textColor="light">
        <div className="hero container flex flex-justify-center flex-align-center">
          <div>
            <h1 className="fs-1000 fw-700">Nick Hibbits</h1>
            <h2 className="fs-800 "> Web Developer</h2>
            <p className="fs-600">
              Frontend engineer specializing in web-based applications
            </p>
          </div>
        </div>
      </BackgroundContainer>
      <BackgroundContainer color="primary" shade="400" textColor="dark">
        <div className="container">
          <div className="padding-block-64">
            <h1 className="padding-block-end-8">Work </h1>
            <p className="fs-600">
              Collection of personal and professional projects
            </p>
            <div className="project-wrapper">
              <ul className="project-list flex flex-column padding-block-start-36">
                <ProjectListItem
                  project="Veteran's Affairs"
                  description="Focused on pages in va.gov providing information on education benefits to veterans."
                  extendedDescription=" Built applications, digitized forms, and maintained code according to the platform design system for the Veteran's Affairs department."
                />
                <ProjectListItem
                  project="Studio Zoomies"
                  description="A web-based CRM for gig photographers."
                  extendedDescription="Performed software development on a web-application which offered customer relation services gig photographers. Built using React.js and Supabase."
                />
                <ProjectListItem
                  project="Clarity Dose"
                  description="Online platform featuring a live radio show, music label, blog, and merch shop."
                  extendedDescription="Self engineered full-stack application to connect artists and share my favorite music. Built with Next.js"
                />
                <ProjectListItem
                  project="NHIBIT Music"
                  description="Site showcasing my own original electronic music."
                  extendedDescription="Simple static site to promote my music, generate gigs, and faciliate connections. B'uilt with Framer."
                />
              </ul>
            </div>
          </div>
        </div>
      </BackgroundContainer>
      <BackgroundContainer color="primary" shade="500" textColor="light">
        <div className="container">
          <div className="contact-container flex flex-column ">
            <ul className="more-info-links flex">
              <li className="link-group">
                <span className="link-group-title fw-light">/CONTACT</span>
                <div className="fw-normal">
                  <a href="mailto:nicholas.hibbits@gmail.com">
                    nicholas.hibbits@gmail.com
                  </a>
                </div>
              </li>
              <li className="link-group">
                <span className="link-group-title fw-light">/LINKS</span>
                <div className="flex flex-column clr-neutral-100 fw-normal">
                  <a href="">Github</a>
                  <a href="">LinkedIn</a>
                  <a href="">My Resume</a>
                </div>
              </li>
              <li className="link-group">
                <span className="link-group-title fw-light">/GO TO</span>
                <div className="flex flex-column fw-normal">
                  <a href="" className="">
                    Home
                  </a>
                  <a href="" className="">
                    Work
                  </a>
                </div>
              </li>
            </ul>
            <h1 className="h1 padding-block-64">Lets build something</h1>
          </div>
        </div>
      </BackgroundContainer>
    </>
  );
}
