import React from 'react';

import { Header, NewsCard } from '../../components';
import { newsData } from './index';

const CryptocurrenciesNews = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Markets" title="News" />
    <div class="flex flex-col space-y-5">
      {newsData.map((item) => {
        var card = <NewsCard {...item} CommentsCount='125' LikesCount='4' />
        console.log(card);
        return card;
      })}
    </div>
  </div>
);

export default CryptocurrenciesNews;