'use client';

import { fetchUsers } from '@/redux/features/userSlice';
import { store } from '@/redux/store';
import { useRef } from 'react';

const Preloader = ({ users }: { users: User[] }) => {
  const loaded = useRef(false);

  if (!loaded.current) {
    store.dispatch(fetchUsers(users));
    loaded.current = true;
  }

  return null;
};

export default Preloader;
