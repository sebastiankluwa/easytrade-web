import React from 'react';

import Badge from './Badge';
import { convertDateToTimeAgo } from '../../utils/date-time';
import { useStateContext } from '../../contexts/ContextProvider';

const NewsCard = ({ 
    ProviderLogo, 
    Provider, 
    ProviderUrl,
    Created, 
    ArticleTitle, 
    Badges
}) => {
    const { currentMode } = useStateContext();

    return (
        <div class="rounded-xl dark:bg-secondary-dark-bg border p-5 w-full bg-white">
            <div class="flex w-full items-center justify-between border-b pb-3">
                <div class="flex items-center space-x-3">
                    {ProviderLogo !== null && currentMode !== 'Dark' ? (
                        <img class="h-8" src={ProviderLogo} />
                    ) : (
                        <div class="text-lg font-bold text-slate-700 dark:text-gray-200">{Provider}</div>
                    )}
                </div>
                <div class="flex items-center">
                    {Badges.map((badge) => <Badge {...badge}/>)}
                    <div class="text-xs text-neutral-500 dark:text-gray-200">{convertDateToTimeAgo(Created)}</div>
                </div>
            </div>

            <div class="mt-4 mb-6">
                <div class="mb-3 text-xl font-bold truncate dark:text-gray-200">{ArticleTitle}</div>
            </div>

            <div>
                <div class="flex items-center justify-between text-slate-500 dark:text-gray-200">
                    <div class="flex">
                        <a href={ProviderUrl} target="_blank">
                            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Read more</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;