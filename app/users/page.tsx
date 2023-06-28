'use client';

import { fetchUsers } from '@/redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';

const TestUser = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);

  return (
    <div>
      <h1 className='text-xl'>Client Side Data Fetching with Redux</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default TestUser;
