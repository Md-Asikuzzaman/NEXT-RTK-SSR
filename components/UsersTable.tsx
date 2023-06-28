const UsersTable = ({ users }: { users: User[] }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.username}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default UsersTable;
