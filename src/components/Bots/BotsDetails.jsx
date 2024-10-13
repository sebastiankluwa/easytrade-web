import React, { useEffect } from "react";
import { GiPayMoney, GiTakeMyMoney, GiTap } from "react-icons/gi";
import { TbBusinessplan } from "react-icons/tb";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { Button, Pie, Stacked } from "..";
import { useStateContext } from "../../contexts/ContextProvider";
import SparkLine from "../Charts/SparkLine";

import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../../data/dummy';
import { GoPrimitiveDot } from "react-icons/go";

const BotsDetails = () => {
    const { currentMode, activeBotDetails, setActiveBotDetails, bots, currentColor, activeCreateBot, setActiveCreateBot } = useStateContext();
    const { botId } = useParams();

    useEffect(() => {
        const bot = bots.find(x => x.id == botId);
        setActiveBotDetails(bot);
        return () => {
            setActiveBotDetails(null);
        }
    }, [bots]);

    const activeLink = 'inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg active focus:outline-none dark:bg-gray-700 dark:text-white';
    const normalLink = 'inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50  focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700';


    return (
        <>
            <ul class="mb-8 hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li class="w-full">
                    <NavLink
                        to='dashboard'
                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li class="w-full">
                    <NavLink
                        to='positions'
                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                        Trade history
                    </NavLink>
                </li>
                <li class="w-full">
                    <NavLink
                        to='settings'
                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                        Settings
                    </NavLink>
                </li>
            </ul>

            <Outlet />
        </>
    );
}

export default BotsDetails;