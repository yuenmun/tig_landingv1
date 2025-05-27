import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Our Team
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Leadership & Team
            </h2>
            <p className="text-lg text-indigo-200/65">
              Our team combines deep expertise in fintech, blockchain, and engineering to drive innovation in digital finance and sustainable mobility.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow removed as requested */}
                {/* Image removed as requested */}
                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-nacelle text-2xl font-bold text-white mb-1">Professor David Lee</h3>
                    <div className="mt-1 mb-2">
                      <span className="inline-block rounded-full bg-gray-800/60 px-3 py-1 text-sm font-medium before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent font-semibold">
                          Chairman
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <ul className="text-gray-200 text-sm space-y-2 list-disc pl-4">
                      <li className="font-medium">Chartered Fintech Professional (CFtP)</li>
                      <li className="font-medium">Chairman, Global Fintech Institute</li>
                      <li className="font-medium">Chairman, Asia Pacific Exchange (APEX)</li>
                      <li className="font-medium">Visiting Fulbright Scholar, Stanford University</li>
                    </ul>
                  </div>
                  <p className="text-indigo-100/90 text-sm leading-relaxed mb-3">
                    Prof. Lee provides strategic vision and capital, guiding TIG's growth and delegating operational decisions to a team of experienced professionals within his portfolio companies.
                  </p>
                  <a href="https://www.linkedin.com/in/david-lee-kuo-chuen-%E6%9D%8E%E5%9B%BD%E6%9D%83-07750baa/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-indigo-300 hover:text-indigo-200 text-sm font-medium transition duration-150 ease-in-out cursor-pointer relative z-30">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow removed as requested */}
                {/* Image removed as requested */}
                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-nacelle text-2xl font-bold text-white mb-1">Vincent Chan</h3>
                    <div className="mt-1 mb-2">
                      <span className="inline-block rounded-full bg-gray-800/60 px-3 py-1 text-sm font-medium before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent font-semibold">
                          Cofounder
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <ul className="text-gray-200 text-sm space-y-2 list-disc pl-4">
                      <li className="font-medium">Chartered Fintech Professional (CFtP)</li>
                      <li className="font-medium">MBA, University of Illinois</li>
                      <li className="font-medium">MSc. & BEng., Chemical Engineering, NUS</li>
                      <li className="font-medium">Formerly at HP Inc. and Hewlett Packard Enterprise</li>
                    </ul>
                  </div>
                  <p className="text-indigo-100/90 text-sm leading-relaxed mb-3">
                    Vincent brings deep expertise in engineering, blockchain, and internet technologies, driving the technical execution of TIG's projects.
                  </p>
                  <a href="https://www.linkedin.com/in/yuenmunchan/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-indigo-300 hover:text-indigo-200 text-sm font-medium transition duration-150 ease-in-out cursor-pointer relative z-30">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow removed as requested */}
                {/* Image removed as requested */}
                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-nacelle text-2xl font-bold text-white mb-1">Metis Ye</h3>
                    <div className="mt-1 mb-2">
                      <span className="inline-block rounded-full bg-gray-800/60 px-3 py-1 text-sm font-medium before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent font-semibold">
                          Cofounder
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <ul className="text-gray-200 text-sm space-y-2 list-disc pl-4">
                      <li className="font-medium">Chartered Fintech Professional (CFtP)</li>
                      <li className="font-medium">Master of Applied Economics, NUS</li>
                      <li className="font-medium">BA, Economics, NUS</li>
                      <li className="font-medium">Formerly at Ant International and Bank of China</li>
                    </ul>
                  </div>
                  <p className="text-indigo-100/90 text-sm leading-relaxed mb-3">
                    Metis contributes extensive experience in fintech and banking, supporting TIG's mission to innovate in digital finance and cross-border payments.
                  </p>
                  <a href="https://www.linkedin.com/in/ye-ye-82b8818b/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-indigo-300 hover:text-indigo-200 text-sm font-medium transition duration-150 ease-in-out cursor-pointer relative z-30">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
