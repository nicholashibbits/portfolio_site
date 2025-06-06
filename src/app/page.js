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
          <div className="padding-block-64">
            <h1 className="h1">Lets build something</h1>
          </div>
        </div>
      </BackgroundContainer>
    </>
  );
}
