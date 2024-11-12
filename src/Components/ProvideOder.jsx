import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvuder';

const ProvideOder = ({ children }) => {
  const { user } = useContext(AuthContext);

  // if (loading) {
  //   return <span className="loading loading-infinity loading-lg"></span>;
  // }
  if (user) {
    return children;
  }
  return (
    <div>
      <navigator to="/login"></navigator>;
    </div>
  );
};

export default ProvideOder;
