import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // use this to disable caching or else use next.js revalidate property
    next: {
      revalidate: 10, // revalidate every 10 seconds
    },
  });
  const users: User[] = await data.json();
  return (
    <div>
      <h1>Users</h1>
      <table className="table table-bordered table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td> {user.name}</td>
              <td> {user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
