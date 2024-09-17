export const Theone = () => {
  return (
    <div>
      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1
              href="home"
              className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4"
            >
              Welcome
            </h1>
            <p className="mb-8 leading-relaxed">
              On this page, I will tell you more about myself, including my
              interests and skills. I hope that by the end, you’ll get to know
              me better and will want to reach out for an appointment.
            </p>
            <a href="https://sachertorte.main.jp/portfolio-site/src/index.html">
              <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
                Contact
              </button>
            </a>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="/img/one.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
