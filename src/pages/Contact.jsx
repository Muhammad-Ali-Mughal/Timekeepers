import React from "react";
import { useSelector } from "react-redux";

function Contact() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <section className={`${isDarkMode && "dark"}`}>
      <section class="w-full h-auto p-2 pt-5 dark:bg-gray-800">
        <div class=" mx-auto max-w-7xl px-4 py-12 sm:px-6   lg:px-8  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row dark:bg-gray-800">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
              <span class="block xl:inline dark:text-white">
                Conact us now!
              </span>
              <span class="block text-purple-600 xl:inline">
                {" "}
                Watch is ticking...
              </span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
          </div>

          <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 ">
            <img
              class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full "
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div class="bg-gray-100 dark:bg-gray-800 py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
              <h2 class="text-base text-purple-600 font-semibold tracking-wide uppercase">
                Location
              </h2>
              <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
                Our Store
              </p>
              <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus magnam voluptatum cupiditate veritatis in, accusamus
                quisquam.
              </p>
            </div>

            <div class="mt-10">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <dt class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                      Address
                    </dt>
                    <dd class="mt-2 text-base text-gray-500">
                      123 Main St, Suite 100
                      <br />
                      Anytown, USA 12345
                    </dd>
                  </div>
                </div>

                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <dt class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                      Phone number
                    </dt>
                    <dd class="mt-2 text-base text-gray-500">(555) 555-5555</dd>
                  </div>
                </div>

                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <dt class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                      Email
                    </dt>
                    <dd class="mt-2 text-base text-gray-500">
                      info@ourstore.com
                    </dd>
                  </div>
                </div>

                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <dt class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                      Store Hours
                    </dt>
                    <dd class="mt-2 text-base text-gray-500">
                      Monday - Friday: 9am to 8pm
                      <br />
                      Saturday: 10am to 6pm
                      <br />
                      Sunday: 12pm to 4pm
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Contact;
