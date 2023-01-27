import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { TbChartCandle } from 'react-icons/tb';
import { FiShoppingBag } from 'react-icons/fi';
import { TiChartBarOutline } from 'react-icons/ti';
import { HiOutlineNewspaper } from 'react-icons/hi';

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
          path: 'markets/cryptocurrencies/prices',
          name: 'Prices',
          icon: <TiChartBarOutline />,
        },
        {
          path: 'markets/cryptocurrencies/news',
          name: 'News',
          icon: <HiOutlineNewspaper />,
        }
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