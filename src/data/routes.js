import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { TbChartCandle } from 'react-icons/tb';
import { FiShoppingBag } from 'react-icons/fi';
import { TiChartBarOutline } from 'react-icons/ti';

export const routes = [
    {
      title: 'Dashboard',
      routes: [
        {
          path: 'investment',
          name: 'Investment',
          icon: <FiShoppingBag />,
        },
      ],
    },
    {
      title: 'Markets',
      routes: [
        {
          path: 'markets/cryptocurrencies/prices-overview',
          name: 'Prices',
          icon: <TiChartBarOutline />,
        },
        {
          path: 'investor',
          name: 'investor',
          icon: <AiOutlineCalendar />,
        },
        {
          path: 'backtesting',
          name: 'backtesting',
          icon: <AiOutlineCalendar />,
        },
        {
          path: 'orders',
          name: 'orders',
          icon: <AiOutlineCalendar />,
        },
        {
          path: 'employees',
          name: 'employees',
          icon: <AiOutlineCalendar />,
        },
        {
          path: 'customers',
          name: 'customers',
          icon: <AiOutlineCalendar />,
        },
      ],
    },
    {
      title: 'Products',
      routes: [
        {
          path: 'chart',
          name: 'Chart',
          icon: <TbChartCandle />,
        }
      ],
    }
  ];