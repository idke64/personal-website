import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full h-[calc(100vh-82px)]">
        <div className="margins h-full flex items-center">
          <div className="flex justify-between gap-x-16">
            <div className="flex flex-col gap-y-6 w-1/2">
              <div className="flex ">
                <h1 className="bg-gradient-to-r from-palette-green via-palette-cyan to-palette-yellow w-40 text-transparent bg-clip-text">
                  Hello
                </h1>
                <h1>🫠</h1>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="border rounded w-1/2 ">
              <Image alt="Profile Picture" className="w-full h-full" />
              <div className=""></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
