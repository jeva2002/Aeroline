import { Link } from 'react-router-dom';
import { useGetInitialData } from '../../../../controller/hooks';
import Nav from './Nav/Nav';
import UserOptions from './UserOptions/UserOptions';

const Header: React.FunctionComponent = () => {
  useGetInitialData();

  return (
    <header>
      <section className='bg-slate-50 flex lg:justify-between justify-center items-center lg:px-28 py-2 md:mb-0'>
        <Link to='/' className='text-6xl hidden lg:block'>
          etereal
        </Link>
        <UserOptions />
      </section>
      <Nav />
    </header>
  );
};

export default Header;
