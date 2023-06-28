'use client';

import Preloader from '@/components/Preloader';
import { store } from './store';
import { Provider } from 'react-redux';
import { fetchUsers } from './features/userSlice';

export async function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const req = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: User[] = await req.json();

  store.dispatch(fetchUsers(data));
  return (
    <>
      <Preloader users={data} />
      <Provider store={store}>{children}</Provider>;
    </>
  );
}
