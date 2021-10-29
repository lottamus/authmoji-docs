import * as React from "react";
import { tw } from "twind";

export function Loading() {
  return (
    <div className={tw`flex-shrink-0 flex justify-center text-6xl`}>
      Loading...
    </div>
  );
}
