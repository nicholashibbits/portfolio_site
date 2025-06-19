import BackgroundContainer from "@/app/components/BackgroundContainer";

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

            <ul className="flex flex-column padding-block-start-36">
              <li>
                <h2>Project 1</h2>
                <p>Description of project 1</p>
              </li>
              <li>
                <h2>Project 2</h2>
                <p>Description of project 1</p>
              </li>
              <li>
                <h2>Project 3</h2>
                <p>Description of project 1</p>
              </li>
            </ul>
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
