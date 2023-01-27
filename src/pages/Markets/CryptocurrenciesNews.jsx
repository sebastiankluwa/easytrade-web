import React from 'react';

import { Header, NewsCard } from '../../components';

const CryptocurrenciesNews = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Markets" title="News" />
    <NewsCard />
  </div>
);

export default CryptocurrenciesNews;