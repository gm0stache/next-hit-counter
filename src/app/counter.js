import React from "react";
import { Censored } from "./censoredValue";

export function Counter({ count }) {
  return (
    <p>
      You are visitor number <Censored>{count}</Censored>.
    </p>
  );
}
