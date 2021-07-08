//core
import React from "react";

//hooks
import { useQueryAvailablePets } from "./hooks/useQueryAvailablePets";

export const Counter = () => {
  const { loading, error, data, refetch, networkStatus } = useQueryAvailablePets();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return <p>AvailablePets:{data.availablePets}</p>;
};
