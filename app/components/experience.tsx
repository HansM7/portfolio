"use client";

import Reveal from "react-awesome-reveal";

function ExperienceComponent() {
  return (
    <Reveal>
      <div className="text-white h-auto pb-4 px-1">
        <div>
          <h1 className="text-[#ca90fc]">Experiencia</h1>
        </div>
        <div className="pt-1 px-4">
          <div className=" hover:px-2 transition-all cursor-default ">
            <h3 className="leading-[1]">
              Desarrollador de Software - Academia preuniversitaria
            </h3>
            <p className="text-sm text-slate-400 ">Mayo 2022 - Julio 2023 </p>
            <ul className="text-sm">
              <li>
                Diseño, desarrollo e implementación de una intranet como
                herramienta integral para gestionar alumnos, realizar
                seguimientos académicos y optimizar nuestros resultados
                educativos.
              </li>
              <li>
                Implementación de nuevas tecnologías para potenciar la
                optimización de la plataforma educativa, elevando la eficiencia
                y la experiencia del usuario.
              </li>
              <li>
                Mentoría enfocada en tecnologías web y estrategias de
                digitalización 2022, capacitando con conocimientos actuales y
                enfoques disruptivos en el ámbito digital
              </li>
            </ul>
          </div>

          <div className=" hover:px-2 transition-all cursor-default">
            <h3>Docente de programación - INAPSIS SAS</h3>
            <p className="text-sm text-slate-400">Marzo 2022 - Abril 2022 </p>
            <ul className="text-sm">
              <li>
                Curso intensivo de PHP para el desarrollo de aplicaciones
                nativas, con un enfoque especial en el uso de Ajax para
                interacción del usuario y la eficiencia de las aplicaciones.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default ExperienceComponent;
