
import { useUser } from "../context/userContext";
import React from 'react';

const PrivateComponent = ({ roleList, children }) => {
  const { userData } = useUser();
    
  if (userData.correo !== "") {
    return children;
  }
  return <></>;
};

export default PrivateComponent;