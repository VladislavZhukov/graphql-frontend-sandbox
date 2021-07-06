import React from "react";

//hooks
import { useQueryProfile } from "./hooks/useQueryProfile";

export const Profile = () => {
  const { getProfile, loading, error, profile } = useQueryProfile();
// console.log(profile)
  const loadProfile = () => {
    getProfile({
      variables: {
        id: "C-1",
      },
    });
  };
  const loaderJSX = loading && <p>loading...</p>;
  const errorJSX = error && <p>we have a problem{error.message}</p>;
  const profileJSX = profile && <p>{profile.name}</p>; 

  return (
    <>
      <h1>Profile</h1>
      <button onClick={loadProfile}>Download</button>
      {loaderJSX}
      {errorJSX}
      {profileJSX}
    </>
  );
};
