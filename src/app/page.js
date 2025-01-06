import React from "react";

import { Counter } from "./counter";

import { readFile, writeFile } from "../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

function getNumber() {
  const jsonContent = readFile(DATABASE_PATH);
  const { hits } = JSON.parse(jsonContent);
  return hits;
}

function storeNumber(num) {
  writeFile(DATABASE_PATH, JSON.stringify({ hits: num }));
}

function Home() {
  const visitors = getNumber();
  storeNumber(visitors + 1);

  return (
    <main>
      <h1>Welcome!</h1>
      <Counter count={visitors} />
    </main>
  );
}

export default Home;
