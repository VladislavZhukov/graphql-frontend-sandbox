//Core
import React from "react";
//Components
import { Counter } from "./counter";
import { List } from "./list";
import { SpecialList } from "./specialList";
import { Profile } from "./profile";
import { CheckInPet } from "./checkInPet";
import { PetReturned } from "./petReturned";

export const Pet = () => {
  return (
    <>
      <h1>PET PROJECT 0_0</h1>
      <PetReturned />
      <CheckInPet />
      <Counter />
      <Profile />
      <List />
      <SpecialList />
    </>
  );
};
