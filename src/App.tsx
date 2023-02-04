import './App.scss';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './view/components/common/Header/Header';
import store from './model/store/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export default App;
