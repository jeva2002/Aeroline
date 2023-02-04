import { useGetInitialData } from '../../../../controller/hooks';
import Nav from './Nav/Nav';
import UserOptions from './UserOptions/UserOptions';

const Header: React.FunctionComponent = () => {
  useGetInitialData();

  return (
    <header>
      <section className='bg-slate-50 flex justify-between items-center px-28 py-2'>
        <h2 className='text-6xl'>etereal</h2>
        <UserOptions />
      </section>
      <Nav />
    </header>
  );
};

export default Header;
