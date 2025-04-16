import React, { useState, useMemo } from "react";

const generateUsers = () => {
  const users = [];
  for (let i = 1; i <= 10000; i++) {
    users.push(`User${i}`);
  }
  return users;
};

const FilterUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // TODO: Generate a large list of user names (10,000+)
  const users = useMemo(() => generateUsers(), [])

  // TODO: useMemo to memoize the filtered list based on searchTerm
  const filteredUsers = useMemo(() => (
    users.filter((user) => 
        user.toLowerCase().includes(searchTerm.toLowerCase())
    )
  ), [searchTerm, users]);

  return (
    <div>
      <h1>User Filter</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>{/* TODO: Display filtered users here */}
        {
            filteredUsers.map((user) => (
                <li>{user}</li>
            ))
        }
      </ul>
    </div>
  );
};

export default FilterUsers;
