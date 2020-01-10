import React, { Fragment, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import AddButton from './components/layout/AddButton';
import Bugs from './components/bugs/Bugs';
import AddBugModal from './components/bugs/AddBugModal';
import EditBugModal from './components/bugs/EditBugModal';
import AddDevModal from './components/devs/AddDevModal';
import DevListModal from './components/devs/DevListModal';
import { Provider } from 'react-redux';
import store from './store';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddButton />
          <AddBugModal />
          <EditBugModal />
          <AddDevModal />
          <DevListModal />
          <Bugs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
