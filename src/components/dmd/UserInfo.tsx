import React from 'react';

interface UserInfoProps {
  lastName: string;
  firstName: string;
  department: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({ lastName, firstName, department }) => (
  <div className="mx-2">
    <h2 className="text-lg font-semibold">{lastName}, {firstName}</h2>
    <p className="text-sm text-gray-600">{department}</p>
  </div>
);

