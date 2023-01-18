import React from "react";

interface Person {
  person: string;
}

function Greeter({ person }: Person) {
  return <h1>Hello, {person}!</h1>;
}

export default Greeter;
