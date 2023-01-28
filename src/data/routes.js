import React from 'react';
import { SiProbot } from 'react-icons/si';
import { TbChartCandle } from 'react-icons/tb';
import { TbLayoutDashboard } from 'react-icons/tb';
import { TiChartBarOutline } from 'react-icons/ti';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { AiOutlineSetting, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';

export const routes = [
    {
      title: 'Dashboard',
      routes: [
        {
          path: 'overview',
          name: 'Overview',
          icon: <TbLayoutDashboard />,
        },
      ],
    },
    {
      title: 'Bots',
      routes: [
        {
          path: 'bots/management',
          name: 'Management',
          icon: <SiProbot />,
        },
        {
          path: 'bots/configuration',
          name: 'Configuration',
          icon: <AiOutlineSetting />,
        }
      ],
    },
    {
      title: 'Markets',
      routes: [
        {
          path: 'markets/prices',
          name: 'Prices',
          icon: <TiChartBarOutline />,
        },
        {
          path: 'markets/news',
          name: 'News',
          icon: <HiOutlineNewspaper />,
        },
        {
          path: 'markets/chart',
          name: 'Chart',
          icon: <TbChartCandle />,
        }
      ],
    },
    {
      title: 'Support',
      routes: [
        {
          path: 'support/faq',
          name: 'FAQ',
          icon: <AiOutlineQuestionCircle />,
        },
        {
          path: 'support/contact',
          name: 'Contact',
          icon: <BsChatDots />,
        }
      ],
    }
  ];