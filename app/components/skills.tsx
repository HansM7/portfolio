import Reveal, { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";

import { keyframes } from "@emotion/react";

function SkillsComponent() {
  const skills = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
      title: "Javascript",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
      title: "TypeScript",
    },
    {
      url: "https://chuidiang.org/images/f/f3/Logo_php.png",
      title: "Php",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg",
      title: "Python",
    },
    {
      url: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
      title: "Nextjs",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
      title: "Reactjs",
    },
    {
      url: "https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png",
      title: "Angular",
    },
    {
      url: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
      title: "Nodejs",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png",
      title: "Nestjs",
    },
    {
      url: "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png",
      title: "MongoDB",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png",
      title: "PostgreSQL",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/630px-New_Power_BI_Logo.svg.png",
      title: "PowerBI",
    },
  ];

  return (
    <Reveal>
      <div className="h-auto text-white pb-4 px-1">
        <div>
          <h1 className="text-[#ca90fc]">Conocimientos</h1>
        </div>
        <div className="pt-1 px-4">
          <div className="grid grid-cols-6 gap-3">
            {skills.map((item, index) => (
              <div
                className="rounded-md overflow-hidden max-w-[10rem] flex flex-col justify-between text-center pt-2"
                key={index}
              >
                <img
                  className="w-full rounded-md animate-float"
                  src={item.url}
                  alt=""
                />
                <span className="mt-1 text-sm">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default SkillsComponent;
