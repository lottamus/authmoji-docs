import Link from "next/link";
import Image from "next/image";
import React from "react";
import { tw } from "twind";

export const Header = () => {
  return (
    <header className={tw`h-16 bg-white dark:bg-gray-900`}>
      <nav className={tw`px-8 mx-auto md:px-0`} style={{ maxWidth: 1500 }}>
        <ul className={tw`flex items-center w-full h-16`}>
          <li className={tw`text-xl text-center flex items-center`}>
            <Link href="/" passHref>
              <Image
                alt="Authmoj"
                src="/authmoji.svg"
                layout="fixed"
                width={160}
                height={30}
              />
            </Link>
          </li>

          <li className={tw`flex-grow`} />

          <li
            className={tw`mr-5 text-center text-gray-700 transition-colors duration-150 w-7 hover:text-gray-900 dark:text-gray-400 dark:(hover:text-gray-100)`}
          >
            <a
              href="https://twitter.com/authmoji"
              target="_blank"
              rel="noopener noreferrer"
              data-splitbee-event="External Link"
              data-splitbee-event-type="twitter"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <g>
                  <title>Twitter</title>
                  <path d="M22 5.89176C21.2651 6.21506 20.4748 6.43059 19.641 6.53271C20.4886 6.03294 21.141 5.23576 21.4471 4.29365C20.6539 4.75529 19.775 5.09459 18.8402 5.27341C18.0935 4.48753 17.0284 4 15.8487 4C13.5825 4 11.7451 5.80847 11.7451 8.03859C11.7451 8.35435 11.7825 8.66165 11.8522 8.96C8.44272 8.79012 5.41846 7.18024 3.39534 4.73694C3.03999 5.33412 2.84005 6.03294 2.84005 6.77082C2.84005 8.17271 3.56259 9.40706 4.66465 10.1341C3.99185 10.1139 3.35886 9.928 2.80451 9.62965C2.80451 9.64188 2.80451 9.65976 2.80451 9.67718C2.80451 11.6362 4.21927 13.2678 6.09457 13.6391C5.75201 13.7322 5.38956 13.784 5.0162 13.784C4.75135 13.784 4.49313 13.7544 4.24296 13.7096C4.76509 15.3106 6.27983 16.4809 8.07458 16.5158C6.67024 17.5972 4.90154 18.2447 2.97839 18.2447C2.64626 18.2447 2.32124 18.2259 2 18.1873C3.81797 19.3304 5.97517 20 8.2911 20C15.8373 20 19.966 13.8452 19.966 8.50541C19.966 8.33035 19.9603 8.15624 19.9522 7.984C20.7577 7.41882 21.4518 6.70635 22 5.89176Z" />
                </g>
              </svg>
            </a>
          </li>

          <li
            className={tw`text-center text-gray-700 transition-colors duration-150 w-7 hover:text-gray-900 dark:text-gray-400 dark:(hover:text-gray-100)`}
          >
            <a
              href="https://github.com/lottamus/authmoji-docs"
              target="_blank"
              rel="noopener noreferrer"
              data-splitbee-event="External Link"
              data-splitbee-event-type="github"
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <g>
                  <title>GitHub</title>
                  <path d="M 10.898438 2.101562 C 6.300781 2.601562 2.601562 6.300781 2.101562 10.800781 C 1.601562 15.5 4.300781 19.699219 8.398438 21.300781 C 8.699219 21.398438 9 21.199219 9 20.800781 L 9 19.199219 C 9 19.199219 8.601562 19.300781 8.101562 19.300781 C 6.699219 19.300781 6.101562 18.101562 6 17.398438 C 5.898438 17 5.699219 16.699219 5.398438 16.398438 C 5.101562 16.300781 5 16.300781 5 16.199219 C 5 16 5.300781 16 5.398438 16 C 6 16 6.5 16.699219 6.699219 17 C 7.199219 17.800781 7.800781 18 8.101562 18 C 8.5 18 8.800781 17.898438 9 17.800781 C 9.101562 17.101562 9.398438 16.398438 10 16 C 7.699219 15.5 6 14.199219 6 12 C 6 10.898438 6.5 9.800781 7.199219 9 C 7.101562 8.800781 7 8.300781 7 7.601562 C 7 7.199219 7 6.601562 7.300781 6 C 7.300781 6 8.699219 6 10.101562 7.300781 C 10.601562 7.101562 11.300781 7 12 7 C 12.699219 7 13.398438 7.101562 14 7.300781 C 15.300781 6 16.800781 6 16.800781 6 C 17 6.601562 17 7.199219 17 7.601562 C 17 8.398438 16.898438 8.800781 16.800781 9 C 17.5 9.800781 18 10.800781 18 12 C 18 14.199219 16.300781 15.5 14 16 C 14.601562 16.5 15 17.398438 15 18.300781 L 15 20.898438 C 15 21.199219 15.300781 21.5 15.699219 21.398438 C 19.398438 19.898438 22 16.300781 22 12.101562 C 22 6.101562 16.898438 1.398438 10.898438 2.101562 Z M 10.898438 2.101562 " />
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
