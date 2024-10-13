import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import CreateBotModal from './CreateBotModal';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiFillSetting } from 'react-icons/ai';

const breadcrumbTemplate = ({ title, botName }) => (
    <nav class="flex mb-3" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
                <Link to="/bots/management" class="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-200">
                    {title}
                </Link>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span class="text-3xl font-extrabold tracking-tight text-gray-500 dark:text-gray-200">{botName}</span>
                </div>
            </li>
        </ol>
    </nav>
)

const BotsHeader = ({ category, title }) => {
    const { activeBotDetails } = useStateContext();

    return (
        <div className="mb-10 flex justify-between">
            <div>
                <p className="text-lg text-gray-400">{category}</p>
                {activeBotDetails === null || activeBotDetails === undefined ?
                    (
                        <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-200">
                            {title}
                        </p>
                    ) : (
                        breadcrumbTemplate({ title, botName: activeBotDetails.name })
                    )
                }
            </div>
            {activeBotDetails &&
                <div class="flex flex-col justify-end">
                    <div class="flex justify-between  align-middle space-x-2">
                        <div class="flex justify-center flex-col">
                            <label class="relative inline-flex items-center cursor-pointer">
                                {activeBotDetails.isActive ? (<input type="checkbox" checked value="" class="sr-only peer" />)
                                : (<input type="checkbox" value="" class="sr-only peer" />) } 
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                            </label>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};

export default BotsHeader;