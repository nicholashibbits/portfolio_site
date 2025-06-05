import BackgroundContainer from "@/app/components/BackgroundContainer";

export default function Home() {
  return (
    <>
      <BackgroundContainer color="neutral" shade="900" textColor="light">
        <div className="hero flex flex-justify-center flex-align-center">
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
        <h1 className="h1">Work </h1>
      </BackgroundContainer>
      <BackgroundContainer color="primary" shade="500" textColor="light">
        <h1 className="h1">Lets build something</h1>
      </BackgroundContainer>
    </>
  );
}
