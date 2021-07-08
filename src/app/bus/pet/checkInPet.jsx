import React from "react";

//Hooks
import { useCheckIn } from "./hooks/useCheckIn";

export const CheckInPet = () => {
  const { checkIn, pet, error, errorUseCheckIn } = useCheckIn();

  const petJSX = pet && (
    <>
      <p>Id: {pet.id}</p>
      <p>Name: {pet.name}</p>
    </>
  );

  const errorsJSX = error && <p>ERROR: {error.message}</p>;

  const errorUseCheckInJSX = errorUseCheckIn && (
    <p>ERROR HOOK: {errorUseCheckIn}</p>
  );

  return (
    <>
      <h1>checkIn</h1>
      {petJSX}
      {errorsJSX}
      {errorUseCheckInJSX}
      <button onClick={() => checkIn("C-1")}>CheckIn</button>
    </>
  );
};
