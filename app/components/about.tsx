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
        <div className="px-1 grid grid-cols-1 md:grid-cols-2 text-white">
          <div className="md:col-span-1 flex justify-center md:justify-end md:mr-12">
            <img
              className="w-[10rem] h-[10rem] rounded-[50%] max-w-[12rem]"
              src="https://pbs.twimg.com/profile_images/1404443005826867200/53xs9_qN_400x400.jpg"
              alt=""
            />
          </div>
          <div className="md:text-left md:col-span-1 text-center">
            <div className="w-full flex flex-col">
              <h1 className="leading-[0]">Hans Melchor</h1>
              <p>Desarrollador full stack | Backend {">"} Frontend 🤣</p>
              <div>
                <Button onClick={handleCv} severity="help">
                  <i className="pi pi-download"></i>
                  <span className="ml-2">Download</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </Reveal>
  );
}
export default AboutComponent;
