"use client";

import { Button } from "primereact/button";
import Reveal, { Fade } from "react-awesome-reveal";
import "primeicons/primeicons.css";

function AboutComponent() {

  
  
    function handleCv() {
    const fileUrl = "files/curriculum.pdf";
    window.open(fileUrl, "_blank");
  }

  return (
    <Reveal>
      <div className="h-[auto] pb-8">
        <div className="px-1 grid grid-cols-1  text-white">
          {/* <div className="md:col-span-1 flex justify-center md:justify-end md:mr-12">
            <img
              className="w-[10rem] h-[10rem] rounded-[50%] max-w-[12rem]"
              src="https://pbs.twimg.com/profile_images/1404443005826867200/53xs9_qN_400x400.jpg"
              alt=""
            />
          </div> */}
          <div className="md:text-left md:col-span-1 ">
            <div className="w-full flex flex-col">
              <h1 className=" text-purple-300 text-[3rem] font-semibold">
                Hola, soy Hans 🚀
              </h1>
              <div className="text-xl leading-3">
                <p className="text-2xl font-semibold mb-8">
                  <span className="text-amber-200">+1</span> año de experiencia
                  trabajando en el sector web.
                </p>
                <div className="mt-2 mb-8 flex flex-wrap flex-row justify-between">
                  <span className="text-amber-200 rounded-md p-3 is-tag mt-4">
                    Desarrollador Web{" "}
                  </span>{" "}
                  <span className="text-purple-300 rounded-md border-2 border-rose-500 p-3 is-tag mt-4">
                    {" "}
                    Análisis de datos{" "}
                  </span>{" "}
                  <span className="text-amber-200 rounded-md border-2 p-3 is-tag mt-4 ">
                    {" "}
                    Ciberseguridad
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <Button onClick={handleCv} severity="help">
                  <i className="pi pi-download"></i>
                  <span className="ml-2">Download</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </Reveal>
  );
}
export default AboutComponent;
