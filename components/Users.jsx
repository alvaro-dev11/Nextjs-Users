import Link from "next/link";
import React from "react";

const Users = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <Link href={`/users/${user.id}`}>
          <li
            key={user.id}
            className="bg-slate-400 mb-2 p-4 rounded-md flex justify-between">
            <div>
              <h5 className="text-gray-900 font-bold text-lg">
                {user.id}. {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-700">Correo: {user.email}</p>
            </div>
            <img src={user.avatar} className="rounded-full w-20" />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Users;
