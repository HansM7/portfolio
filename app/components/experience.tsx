"use client";

import Reveal from "react-awesome-reveal";

const experience = [
  {
    title: "Desarrollador de Software - Academia preuniversitaria",
    time: "Mayo 2022 - Julio 2023",
    activities: [
      "Diseño, desarrollo e implementación de una intranet como herramienta integral para gestionar alumnos, realizar seguimientos académicos y optimizar nuestros resultados educativos.",
      "Implementación de nuevas tecnologías para potenciar la optimización de la plataforma educativa, elevando la eficiencia y la experiencia del usuario.",
      "Mentoría enfocada en tecnologías web y estrategias de digitalización 2022, capacitando con conocimientos actuales y enfoques disruptivos en el ámbito digital",
    ],
  },
  {
    title: "Docente de programación - INAPSIS SAS",
    time: "Marzo 2022 - Abril 2022",
    activities: [
      "Curso intensivo de PHP para el desarrollo de aplicaciones nativas, con un enfoque especial en el uso de Ajax para interacción del usuario y la eficiencia de las aplicaciones.",
    ],
  },
];

function ExperienceComponent() {
  return (
    <Reveal>
      <div className="text-white h-auto pb-4 px-1">
        <div>
          <h1 className="text-purple-300 font-semibold text-3xl">Experiencia laboral</h1>
        </div>
        <div className="pt-1 px-4">
          {experience.map((exp, index) => (
            <div className=" transition-all cursor-default mb-4" key={index}>
              <h3 className=" text-2xl  font-semibold leading-normal mt-0 mb-0 text-amber-200">
                {exp.title}
              </h3>
              <p className="mt-4 text-md text-slate-400 font-normal ">
                {exp.time}
              </p>
              <ul className="text-[1.175rem]">
                {exp.activities.map((act, i) => (
                  <li className="mt-4" key={i}>{act}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default ExperienceComponent;
