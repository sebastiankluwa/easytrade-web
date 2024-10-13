import React, { useEffect, useState } from "react";
import { GiPayMoney, GiTakeMyMoney, GiTap } from "react-icons/gi";
import { TbBusinessplan } from "react-icons/tb";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { Button, Pie, Stacked } from "..";
import { useStateContext } from "../../contexts/ContextProvider";
import SparkLine from "../Charts/SparkLine";

import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../../data/dummy';
import { GoPrimitiveDot } from "react-icons/go";
import { MultiSelectComponent } from "@syncfusion/ej2-react-dropdowns";
import { fieldsData, pairsData } from "./data";

const BotSettings = () => {
    const [maxOpenPositions, setMaxOpenPositions] = useState(undefined);

    const nameRef = React.useRef();
    const allocRef = React.useRef();
    const symbolRef = React.useRef();
    const maxOpenPosRef = React.useRef();
    const minAllocRef = React.useRef();

    const { currentMode, activeBotDetails, setActiveBotDetails, currentColor, activeCreateBot, setActiveCreateBot, handleBotSubmit, bots } = useStateContext();
    const { botId } = useParams();

    useEffect(() => {
        if (activeBotDetails !== null && activeBotDetails !== undefined) {
            setMaxOpenPositions(activeBotDetails.maxOpenPositions);
            nameRef.current.defaultValue = activeBotDetails.name
            allocRef.current.defaultValue = activeBotDetails.allocation
            symbolRef.current.value = activeBotDetails.symbols
            minAllocRef.current.defaultValue = activeBotDetails.minimumAllocation
            maxOpenPosRef.current.defaultValue = activeBotDetails.maxOpenPositions
        }

        return () => {
            setMaxOpenPositions(undefined);
        }
    }, [activeBotDetails]);

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = nameRef.current.value
        const alloc = allocRef.current.value
        const symbol = symbolRef.current.value
        const minAlloc = minAllocRef.current.value
        const maxOpenPos = maxOpenPosRef.current.value

        const json = {
            "Name": name,
            "Allocation": alloc,
            "Symbols": [symbol],
            "Pos": "0",
            "TotalProfit": "0",
            "DayProfit": "0",
            "IsActive": "false",
            "MinimumAllocation": minAlloc,
            "MaxOpenPositions": maxOpenPos
        };

        console.log(json);

        //update request - successful response? -> process
        handleBotSubmit(json);
        // setActiveCreateBot(false);
    };

    const handleRangeChange = (event) => {
        const val = maxOpenPosRef.current.value
        setMaxOpenPositions(val);
    };

    return (
        <>
            <div className="mb-8">
                <div className="mb-2">
                    <h1 class="text-xl font-semibold dark:text-white">Bot settings</h1>
                </div>
                <form id="form-id" onSubmit={handleSubmit}>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bot name</label>
                        <input ref={nameRef} type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <div class="mb-6">
                        <label for="allocation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Allocation</label>
                        <div class="flex">
                            <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                USDT
                            </span>
                            <input ref={allocRef}
                                // defaultValue={activeBotDetails !== undefined && activeBotDetails !== null && activeBotDetails.Allocation} 
                                type="number" min="10" id="allocation" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="pairs" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select pairs</label>
                        <MultiSelectComponent ref={symbolRef}
                            // value={activeBotDetails !== undefined && activeBotDetails !== null && activeBotDetails.Symbols} 
                            id="boxelement" dataSource={pairsData} mode="Box" fields={fieldsData} defaultValue="BTCUSDT" />
                    </div>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimum allocation per order</label>
                        <div class="flex">
                            <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                USDT
                            </span>
                            <input ref={minAllocRef}
                                // defaultValue={activeBotDetails !== undefined && activeBotDetails !== null && activeBotDetails.MinimumAllocation} 
                                type="number" min="10" id="allocation" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>
                    <div class="mb-6">
                        <div class="relative pt-1">
                            <label for="customRange1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Max open positions: {maxOpenPositions !== null && maxOpenPositions !== undefined && maxOpenPositions}</label>
                            <input
                                ref={maxOpenPosRef}
                                type="range"
                                class="dark:bg-gray-700 bg-gray-200 rounded-lg form-range appearance-none w-full h-2 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
                                id="customRange1"
                                onInput={handleRangeChange}
                                min="1"
                                max="20"
                            // defaultValue={maxOpenPositions !== undefined && maxOpenPositions !== null && maxOpenPositions}
                            />
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="papertrading" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Paper trading</label>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                        </label>
                    </div>
                    <button
                        style={{ backgroundColor: currentColor }}
                        type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}

export default BotSettings;