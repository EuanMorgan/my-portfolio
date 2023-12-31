import Divider from '~/components/Divider';
import Intro from '~/components/Intro';
import Profile from '~/components/Profile';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <Divider />
      <Profile />
      <Divider />
    </main>
  );
}
