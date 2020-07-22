import React from 'react';

// Components
import Search from './games/Search';
import Games from './games/Games';

function Index() {
  return (
    <div>
      <Search />
      <div className="mb-3"></div>
      <Games />
      <div className="mb-3"></div>
    </div>
  );
}

export default Index;
