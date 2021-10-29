import Link from "next/link";
import * as React from "react";
import { tw } from "twind";

export function NotFound() {
  return (
    <>
      <div className={tw`flex-shrink-0 flex justify-center text-6xl`}>
        <Link href="/">🥺</Link>
      </div>
      <div className={tw`py-16`}>
        <div className={tw`text-center`}>
          <p
            className={tw`text-sm font-semibold text-indigo-600 uppercase tracking-wide`}
          >
            404 error
          </p>
          <h1
            className={tw`mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl`}
          >
            Page not found.
          </h1>
          <p className={tw`mt-2 text-base text-gray-500`}>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className={tw`mt-6`}>
            <Link href="/" passHref>
              <a
                className={tw`text-base font-medium text-indigo-600 hover:text-indigo-500`}
              >
                Go back home<span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
