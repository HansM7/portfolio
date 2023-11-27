"use client";

import Reveal from "react-awesome-reveal";
import { Card } from "primereact/card";
import Link from "next/link";

function ProjectsComponent() {
  return (
    <Reveal>
      <div className="h-auto text-white pb-4 px-1 mt-12">
        <div>
          <h1 className="text-[#ca90fc]">Mis proyectos</h1>
        </div>
        <div className="pt-1 px-2">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <span className="text-white decoration-inherit  font-bold">
                Pokedex
              </span>
              <Link
                href={"https://pokedex-delta-teal.vercel.app/"}
                target="_blank"
              >
                <div className="rounded-md bg-slate-600 pt-8 pl-10 overflow-hidden h-[15rem] card min-w-[17rem] max-w-[30rem] mt-2">
                  <img
                    className="w-[30rem] h-[auto] rounded-md"
                    src="/images/pokedex.png"
                    alt=""
                  />
                </div>
              </Link>
              <div className="flex pt-2">
                <img
                  title="Angular"
                  className="rounded-sm animate-float m-2"
                  width={40}
                  src="https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png"
                  alt=""
                />
                <img
                  title="Angular Material"
                  className="rounded-sm animate-float m-2"
                  width={40}
                  src="https://img.stackshare.io/service/2159/angular-gantt.png"
                  alt=""
                />

                <img
                  title="Bootstrap"
                  className="rounded-sm animate-float m-2"
                  width={40}
                  src="https://icons.veryicon.com/png/o/application/skills-section/bootstrap-2.png"
                  alt=""
                />
              </div>
            </div>

            <div>
              <span className="text-white decoration-inherit font-bold">
                App list
              </span>
              <Link href={"https://app-list-zeta.vercel.app/"} target="_blank">
                <div className="rounded-md bg-slate-600 pt-8 pl-10 overflow-hidden h-[15rem] card min-w-[17rem] max-w-[30rem] mt-2">
                  <img
                    className="w-[30rem] h-[auto] rounded-md"
                    src="/images/app-list.png"
                    alt=""
                  />
                </div>
              </Link>
              <div className="flex pt-2">
                <img
                  title="Angular"
                  className="rounded-sm animate-float m-2"
                  width={40}
                  src="https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png"
                  alt=""
                />
                <img
                  title="Angular Material"
                  className="rounded-sm animate-float m-2"
                  width={40}
                  src="https://img.stackshare.io/service/2159/angular-gantt.png"
                  alt=""
                />

                <img
                  title="Bootstrap"
                  className="rounded-sm animate-float m-2"
                  width={40}
                  src="https://icons.veryicon.com/png/o/application/skills-section/bootstrap-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default ProjectsComponent;
