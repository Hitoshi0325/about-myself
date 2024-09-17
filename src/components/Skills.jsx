export const Skills = () => {
  return (
    <div>
      <section id="skill" className="text-gray-700 border-t border-gray-200">
        <div className="flex container px-5 py-24 mx-auto flex-wrap">
          <div className="rounded w-full mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="/img/pc.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:py-6 lg:pl-12 lg:text-left lg:w-1/2 w-full">
            <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-10">
              My Skills
            </h1>
            <div className="">
              <div className="w-full">
                <h2>HTML&CSS</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-gray-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2 className="pt-5">Javascript</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-gray-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2 className="pt-5">React</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-gray-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2 className="pt-5">Next.js</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-gray-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2 className="pt-5">Tailwindcss</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-gray-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
