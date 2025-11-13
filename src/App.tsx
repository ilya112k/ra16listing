import data from './data/etsy.json';
import EtsyList from './components/list/etsy-list.tsx';

import './App.css';

function App() {
  return (
    <>
      <EtsyList items={data} />
    </>
  );
}

export default App;
