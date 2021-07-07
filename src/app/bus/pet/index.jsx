//Core
import React from "react";
//Components
import { Counter } from "./counter";
import { List } from "./list";
import { SpecialList } from "./specialList";
import { Profile } from "./profile";
import { CheckInPet } from "./checkInPet";

export const Pet = () => {
  return (
    <>
      <h1>PET</h1>
      <CheckInPet />
      <Counter />
      <Profile />
      <List />
      <SpecialList />
    </>
  );
};
