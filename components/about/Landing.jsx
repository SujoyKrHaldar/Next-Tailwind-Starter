import Container from "../layout/Container";
import Img from "../designs/others/Img";
import Button from "../designs/others/Button";

function Landing() {
  return (
    <>
      <section className="w-full h-screen bg-black-500">
        <div className=" absolute left-0 bottom-0 w-full h-full">
          <Img
            src="/assets/about-hero-image.jpg"
            alt="Image component"
            position="center center"
            className="opacity-30"
          />
        </div>
        <Container className="flex items-center ">
          <div className="max-w-xl py-4 text-white space-y-4">
            <p className="tag">About page</p>
            <h1 className="font-bold">Next.js Tailwind css starter.</h1>
            <p className="max-w-md">
              Next.js tailwind Css starter template with framer motion smooth
              page transition. Also supports Image component lazy loading fade
              animation and custom button.
            </p>

            <Button href="/" text="Back to home" design="bg-white text-black" />
          </div>
        </Container>
      </section>
    </>
  );
}

export default Landing;
