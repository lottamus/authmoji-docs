import Link from "next/link";
import Image from "next/image";
import React from "react";
import { tw } from "twind";

import AuthmojiLogo from "../public/authmoji.png";

export const Header = () => {
  return (
    <header className={tw`h-16 bg-white`}>
      <nav className={tw`px-4 mx-auto`} style={{ maxWidth: 1500 }}>
        <ul className={tw`flex items-center w-full h-16`}>
          <li className={tw`text-xl text-center flex items-center relative`}>
            <Link href="/" passHref>
              <Image
                alt="Authmoj"
                src={AuthmojiLogo}
                layout="fixed"
                height="30px"
                width="140px"
              />
            </Link>
          </li>

          <li className={tw`flex-grow`} />

          <li
            className={tw`mr-4 text-center text-gray-700 transition-colors duration-150 w-7 hover:text-gray-900`}
          >
            <a
              href="https://twitter.com/authmoji"
              target="_blank"
              rel="noopener noreferrer"
              data-splitbee-event="External Link"
              data-splitbee-event-type="twitter"
              className={tw`flex items-center`}
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
            className={tw`text-center text-gray-700 transition-colors duration-150 w-7 hover:text-gray-900`}
          >
            <a
              href="https://github.com/lottamus/authmoji-docs"
              target="_blank"
              rel="noopener noreferrer"
              data-splitbee-event="External Link"
              data-splitbee-event-type="github"
              className={tw`flex items-center`}
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
