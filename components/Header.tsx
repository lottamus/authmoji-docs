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
              <Image
                alt="Twitter"
                src="/twitter.svg"
                layout="fixed"
                width={24}
                height={24}
              />
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
              <Image
                alt="GitHub"
                src="/github.svg"
                layout="fixed"
                width={24}
                height={24}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
