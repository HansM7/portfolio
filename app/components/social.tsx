import Link from "next/link";

function SocialComponent() {
  return (
    <div className="h-auto text-white pb-[12rem] px-1 mt-12 ">
      <div>
        <h1 className="text-[#ca90fc]">Redes sociales</h1>
      </div>
      <div className="pt-1 px-2">
        <div className="grid grid-cols-2  md:grid-cols-4 gap-4">
          <Link
            href={"https://www.linkedin.com/in/hans-melchor/"}
            target="_blank"
          >
            <div className="bg-slate-600 rounded-md p-2 flex items-center hover:pl-4 transition-all min-w-[10rem]">
              <img
                width={40}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                alt=""
              />
              <span className="ml-2 text-white ">LinkedIn</span>
            </div>
          </Link>
          <Link href={"https://github.com/HansM7"} target="_blank">
            <div className="bg-slate-600 rounded-md p-2 flex items-center hover:pl-4 transition-all min-w-[10rem]">
              <img
                width={40}
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
              />
              <span className="ml-2 text-white ">Github</span>
            </div>
          </Link>
          <Link href={"https://www.instagram.com/is_hanss/"} target="_blank">
            <div className="bg-slate-600 rounded-md p-2 flex items-center hover:pl-4 transition-all min-w-[10rem]">
              <img
                width={40}
                src="https://static.vecteezy.com/system/resources/previews/017/743/717/non_2x/instagram-icon-logo-free-png.png"
                alt=""
              />
              <span className="ml-2 text-white ">Instagram</span>
            </div>
          </Link>
          <Link href={"mailto:melchorhans@gmail.com"}>
            <div className="bg-slate-600 rounded-md p-2 flex items-center hover:pl-4 transition-all min-w-[10rem]">
              <img
                width={40}
                src="https://static.vecteezy.com/system/resources/previews/016/716/465/original/gmail-icon-free-png.png"
                alt=""
              />
              <span className="ml-2 text-white ">Gmail</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SocialComponent;
