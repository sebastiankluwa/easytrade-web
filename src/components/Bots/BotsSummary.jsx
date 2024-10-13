import React, { useEffect, useState } from "react";

import {
    botsGrid,
    botsSummaryData
} from './data';

import { NumericFormat, PatternFormat } from "react-number-format";
import { useStateContext } from "../../contexts/ContextProvider";
import CreateBotModal from "./CreateBotModal";
import { Link } from "react-router-dom";

const botSummaryTemplate = (props) => (
    <div className="flex items-center">
        <span class="flex-initial ml-4 align-middle text-left font-normal text-base text-gray-900 dark:text-gray-400">{props.name}</span>
    </div>
);

const botStatusTemplate = (props) => (
    <div class="flex items-center">
        {
            props.isActive === true ?
                (
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> <span>Online</span>
                    </div>
                ) :
                (
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> <span>Offline</span>
                    </div>
                )
        }
    </div>
);

const BotProfitTemplate = ({ profit, startValue }) => {
    return (
        <div className="flex flex-col align-middle">
            {profit !== undefined && profit !== null && profit !== "0" ?
                (
                    <div>
                        <div className="flex justify-center">
                            <NumericFormat
                                value={profit}
                                prefix='$'
                                thousandSeparator={true}
                                displayType='text'
                                className={profit < 0 ? "text-red-500 text-lg font-medium" : "text-green-500 text-lg font-medium"}
                            />
                        </div>
                        <div className="flex justify-center">
                            <NumericFormat
                                value={(profit / startValue * 100)}
                                suffix='%'
                                decimalScale={2}
                                thousandSeparator={true}
                                displayType='text'
                            />
                        </div>
                    </div>
                )
                :
                (
                    <div>
                        <div className="flex justify-center">
                            --
                        </div>
                    </div>
                )
            }
        </div>)
};

const BotsSummeryRow = ({ item }) => {
    return (
        <>
            <tr class="font-light text-base bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <Link
                        to={`${item.id}/dashboard`}
                    >
                        {botSummaryTemplate(item)}
                    </Link>
                </th>
                <td class="px-6 py-4 text-center">
                    <NumericFormat
                        value={item.allocation}
                        prefix='$'
                        thousandSeparator={true}
                        displayType='text'
                    />
                </td>
                {/* <td class="px-6 py-4 text-center">
                    {item.Pos !== undefined && item.Pos !== null && item.Pos !== "0" ? item.Pos : "--"}
                </td> */}
                <td class="px-6 py-4">
                    <BotProfitTemplate profit={item.dayProfit} startValue={item.allocation} />
                </td>
                <td class="px-6 py-4">
                    <BotProfitTemplate profit={item.totalProfit} startValue={item.allocation} />
                </td>
                <td class="px-6 py-4">
                    {botStatusTemplate(item)}
                </td>
            </tr>
        </>
    )
}

const botsOverviewBoxTemplate = ({ title, value, isColored }) => (
    <div class="flex-1 p-6 border-t-1 border-gray-100 bg-white rounded-lg shadow-sm shadow-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="text-base font-medium tracking-tight text-gray-500 dark:text-white">{title}</h5>
        <p class="text-lg font-normal text-gray-800 dark:text-gray-400">
            <NumericFormat
                value={value}
                prefix='$'
                thousandSeparator={true}
                displayType='text'
                className={isColored && (value < 0 ? "text-red-500" : "text-green-500")}
            />
        </p>
    </div>
);

const BotsSummary = () => {
    const { bots, currentColor, activeCreateBot, setActiveCreateBot } = useStateContext();
    const [filteredData, setFilteredData] = useState(bots);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        setFilteredData(bots);
        console.log(bots);
    }, [bots]);

    useEffect(() => {
        if (filterValue.length < 3) {
            setFilteredData(bots);
            return;
        }

        const filtered = bots.filter(bot => bot.name.toLowerCase().includes(filterValue.toLowerCase()));
        setFilteredData(filtered);
    }, [filterValue]);

    const handleChangeFilter = (event) => {
        const { value } = event.target;
        setFilterValue(value);
    };

    const clearFilter = () => {
        setFilterValue('');
    };

    return (
        <div>
            <div class="flex flex-auto mb-5 justify-between space-x-3">
                {botsOverviewBoxTemplate({ title: "Allocation", value: botsSummaryData.Allocation })}
                {botsOverviewBoxTemplate({ title: "Net Liquid", value: botsSummaryData.NetLiquid })}
                {/* {botsOverviewBoxTemplate({ title: "Maint Req", value: botsSummaryData.MaintReq })} */}
                {botsOverviewBoxTemplate({ title: "24 hours P/L", value: botsSummaryData.DayProfit, isColored: true })}
                {botsOverviewBoxTemplate({ title: "Total P/L", value: botsSummaryData.TotalProfit, isColored: true })}
            </div>

            <div className="flex space-x-4 mb-5 dark:border-gray-600 border-t-1 border-gray-100 rounded-lg shadow-sm shadow-gray-300 p-3 pt-4">
                <form class="flex-1">
                    <div class="flex">
                        <div class="relative w-full">
                            <input onChange={handleChangeFilter} type="search" value={filterValue} id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-r-lg  border-l-1 rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Bots..." required />
                            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-r-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
                <div className='flex '>
                    <button onClick={() => setActiveCreateBot(true)} style={{ backgroundColor: currentColor, color: 'white' }} data-modal-target="defaultModal" data-modal-toggle="defaultModal" type="button" class="font-medium rounded-lg text-sm px-5 py-2.5 text-center over:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        New Bot
                    </button>
                    {activeCreateBot && <CreateBotModal />}
                </div>
            </div>


            <div class="relative overflow-x-auto shadow-sm shadow-gray-300 sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {botsGrid.map((item) =>
                                <th scope="col" class="px-6 py-3 text-center">
                                    {item.headerText}
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => <BotsSummeryRow item={item} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BotsSummary;