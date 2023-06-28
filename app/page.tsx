import UsersTable from '@/components/UsersTable';
import { fetchUsers } from '@/redux/features/userSlice';
import { store } from '@/redux/store';

export default async function Home() {
  // SSR
  const req = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: User[] = await req.json();

  store.dispatch(fetchUsers(data));

  return (
    <main>
      <UsersTable users={store.getState().user.users} />
    </main>
  );
}
