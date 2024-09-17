export const MiddleContents = () => {
  return (
    <div>
      <section id="about" className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">
              About me
            </h1>
            <p className="pb-10 text-2xl">
              I am the one who can pay attention to things deeply.
            </p>
            <p>
              When I was a student at Rikkyo University, I majored in English
              Literature for four years, and also studied Spanish. Through these
              experiences, I broadened my perspective and developed perseverance
              in achieving my goals. This quality remains with me today. After
              graduating from university, I worked as a sales representative at
              Nippon-Ham for four years. During that time, I successfully
              increased profits in my region, utilizing the determination and
              skills I had gained from my studies. I decided to leave my job to
              pursue a career more aligned with my future goals. Currently, I am
              focused on learning programming languages and frameworks such as
              Three.js, React, and Next.js. I am confident that my passion,
              problem-solving skills, and ability to act quickly will allow me
              to effectively handle challenges. My skills and personality enable
              me to meet the demands of your organization.
            </p>
          </div>
          {/* カードのdivタグ */}
          <div className="flex flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8 mx-auto">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Programmer
                  </h2>
                </div>
                <div>
                  <p>
                    I use programming languages such as JavaScript, React, and
                    Next.js. In the future, I plan to focus on backend
                    development as well.
                  </p>
                  {/* <a href="#" className="flex mt-3 text-green-500 items-center">
                    More
                  </a> */}
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Languages
                  </h2>
                </div>
                <div>
                  <p>
                    I speak multiple languages, including English, Spanish,
                    German, and Japanese. I’m confident that I can perform well
                    in many areas.
                  </p>
                  {/* <a href="#" className="flex mt-3 text-green-500 items-center">
                    More
                  </a> */}
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Personality
                  </h2>
                </div>
                <div>
                  <p>
                    I can communicate effectively with others and collaborate to
                    solve problems through discussion and critical thinking.
                  </p>
                  {/* <a href="#" className="flex mt-3 text-green-500 items-center">
                    More
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
