import React, { useEffect } from 'react';
import { ChartsHeader } from '../../components';
import { RichStockChartComponent } from '../../components';

const StockChart = () => {
    return (
    <div id="stockChartComponent" className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Chart" chartType="Product"/>
        
        <RichStockChartComponent /> 
    </div>);
}

export default StockChart;
