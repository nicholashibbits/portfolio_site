import BackgroundContainer from "@/app/components/BackgroundContainer";

export default function Home() {
  return (
    <>
      <BackgroundContainer color="neutral" shade="900" textColor="light">
        <h1 className="h1">Nick Hibbits</h1>
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
