import React from 'react';
import { Header, MarketsComponent } from '../../components';

const CryptocurrenciesPrices = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Markets" title="Prices" />
    <MarketsComponent />
  </div>
);
export default CryptocurrenciesPrices;