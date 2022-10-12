import Container from "./Container";

function Footer() {
  return (
    <>
      <footer className="absolute bottom-0 left-0 w-full h-fit text-white py-8  mt-auto">
        <Container className="flex items-center justify-between gap-4">
          <p className="text-base">Copyright ©{new Date().getFullYear()} - All rights reserved.</p>
          <p className="text-base">
            Created by{" "}
            <a
              className="font-bold"
              href="https://sujoykh.vercel.app"
              target="_blank"
            >
              Sujoy
            </a>
          </p>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
