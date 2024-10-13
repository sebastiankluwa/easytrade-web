import React, { useEffect } from "react";
import { GiPayMoney, GiTakeMyMoney, GiTap } from "react-icons/gi";
import { TbBusinessplan } from "react-icons/tb";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { Button, Pie, Stacked } from "..";
import { useStateContext } from "../../contexts/ContextProvider";
import SparkLine from "../Charts/SparkLine";

import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../../data/dummy';
import { GoPrimitiveDot } from "react-icons/go";

const BotDashboard = () => {
    const { currentMode, activeBotDetails, setActiveBotDetails, bots, currentColor, activeCreateBot, setActiveCreateBot } = useStateContext();
    const { botId } = useParams();
    
    return (
        <>
            <div className="mb-8">
                <div className="mb-2">
                    <h1 class="text-xl font-semibold dark:text-white">Capital</h1>
                </div>
                <div className="flex space-x-5">
                    <div class="shadow-sm shadow-gray-300 bg-gray-50 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-lg flex-1 flex-col h-20 md:w-56">
                        <div className="flex p-4">
                            <button
                                type="button"
                                className="text-2xl text-gray-500 opacity-0.9 rounded-full pr-5 hover:drop-shadow-xl"
                            >
                                <TbBusinessplan />
                            </button>
                            <div>
                                <p className="text-sm font-semibold text-gray-500">Allocation</p>
                                <p className="">
                                    <span className="text-lg font-semibold">$100,000</span>
                                </p>
                            </div>
                        </div>

                    </div>

                    <div class="shadow-sm shadow-gray-300 flex-1 flex-col bg-gray-50 h-20 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 rounded-lg ">
                        <div className="flex p-4">
                            <button
                                type="button"
                                className="text-2xl text-gray-500 opacity-0.9 rounded-full pr-5 hover:drop-shadow-xl"
                            >
                                <GiTap />
                            </button>
                            <div>
                                <p className="text-sm font-semibold text-gray-500">Net Liquid</p>
                                <p className="">
                                    <span className="text-lg font-semibold">$112,000</span>
                                </p>
                            </div>
                        </div>

                    </div>

                    <div class="shadow-sm shadow-gray-300 flex-1 flex-col bg-gray-50 h-20 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 rounded-lg ">
                        <div className="flex p-4">
                            <button
                                type="button"
                                className="text-2xl text-gray-500 opacity-0.9 rounded-full pr-5 hover:drop-shadow-xl"
                            >
                                <GiPayMoney />
                            </button>
                            <div>
                                <p className="text-sm font-semibold text-gray-500">Available</p>
                                <p className="">
                                    <span className="text-lg font-semibold">$112,000</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className="mb-2">
                    <h1 class="text-xl font-semibold dark:text-white">Performance</h1>
                </div>
                <div className="flex gap-10 flex-wrap justify-center shadow-sm shadow-gray-300 bg-gray-50 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-lg">
                    <div className=" m-3 p-4 md:w-780  ">
                        <div className="flex justify-between">
                            <p className="font-semibold text-xl">Earnings</p>
                            <div className="flex items-center gap-4">
                                <p className="flex items-center gap-2 text-red-600 hover:drop-shadow-xl">
                                    <span>
                                        <GoPrimitiveDot />
                                    </span>
                                    <span>Loss</span>
                                </p>
                                <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                                    <span>
                                        <GoPrimitiveDot />
                                    </span>
                                    <span>Profit</span>
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 flex gap-10 flex-wrap justify-center">
                            <div className=" border-r-1 border-color m-4 pr-10">
                                <div>
                                    <p>
                                        <span className="text-3xl font-semibold">$12,000</span>
                                        <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                                            12%
                                        </span>
                                    </p>
                                    <p className="text-gray-500 mt-1">Total earnings</p>
                                </div>

                                <div className="mt-5">
                                    <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
                                </div>
                            </div>
                            <div>
                                <Stacked currentMode={currentMode} width="320px" height="360px" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BotDashboard;