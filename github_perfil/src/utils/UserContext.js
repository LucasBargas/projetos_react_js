import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [bio, setBio] = useState(null);
  const [website, setWebsite] = useState(null);

  return (
    <UserContext.Provider 
    value={{ 
      name,
      username,
      bio,
      website,
      setName,
      setUsername,
      setBio,
      setWebsite
     }}
    >
      {children}
    </UserContext.Provider>
  )
}
