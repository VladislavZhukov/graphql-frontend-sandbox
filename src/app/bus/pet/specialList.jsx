import React from "react";
import { useQueryAllAvailablePets } from "./hooks/useQueryAllAvailablePets";

export const SpecialList = () => {
  const { getAllAvailablePets, loading, error, pets } = useQueryAllAvailablePets();

  const loaderJSX = loading && <p>loading...</p>;
  const errorJSX = error && <p>we have a problem{error.message}</p>;
  const petsJSX =
    pets &&
    pets.map(({ id, name, weight }) => (
      <p key={id}>
        <span>Name:{name}</span>
        <span>Weight:{weight}</span>
      </p>
    ));

  return (
    <>
      <button onClick={getAllAvailablePets}>download</button>
      {loaderJSX}
      {errorJSX}
      {petsJSX}
    </>
  );
};
