import Container from "../layout/Container";
import Img from "../designs/others/Img";
import Button from "../designs/others/Button";
import { BsFillPlayFill } from "react-icons/bs";

function Landing() {
  return (
    <>
      <section className="w-full h-screen bg-black-500">
        <div className=" absolute left-0 bottom-0 w-full h-full">
          <Img
            src="/assets/hero-image.jpg"
            alt="Image component"
            position="bottom center"
            className="opacity-30"
          />
        </div>
        <Container className="flex items-center ">
          <div className="max-w-xl py-4 text-white space-y-4">
            <p className="tag">Starter template</p>
            <h1 className="font-bold">Next.js Tailwind Starter</h1>
            <div className="flex items-center gap-2 md:pt-4">
              <Button
                target="_blank"
                href="https://github.com/SujoyKrHaldar/Next-Tailwind-Starter"
                text="Get started"
                design="bg-white text-black"
                icon={<BsFillPlayFill />}
              />
              <Button
                target="_blank"
                href="https://sujoykh.vercel.app"
                text="My portfolio"
                design="text-white hover:bg-white-50 duration-200"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Landing;
