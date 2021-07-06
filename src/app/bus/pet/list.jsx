import React from "react";

//hooks
import { useQueryAllPets } from "./hooks/useQueryAllPets";

export const List = () => {
  const { loading, error, pets } = useQueryAllPets();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  const petsJSX = pets.map(({ id, name, weight }) => (
    <p key={id}>
      <span>Name: {name}</span>
      <span>Weight: {weight}</span>
    </p>
  ));

  return (
    <>
      <h1>petsJSX</h1>
      {petsJSX}
    </>
  );
};
