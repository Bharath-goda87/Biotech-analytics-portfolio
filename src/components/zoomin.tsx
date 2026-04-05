import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ZoomIn = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section
      className="bg-black min-h-screen flex items-center justify-center"
     
    >
      <h1  data-aos="zoom-in" className="text-white text-4xl font-bold">
        Thank You
      </h1>
    </section>
  );
};

export default ZoomIn;
