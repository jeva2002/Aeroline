import './Home.scss'
import SearchFly from '../components/home/searchFly/SearchFly';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <main className='home pt-14 md:pl-32 sm:pl-10 pl-3'>
      <SearchFly />
    </main>
  );
};

export default Home;
