import React, { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { BotsHeader, BotsSummary } from '../../components';
import { botsData, botsSummaryData } from "../../components/Bots/data";
import { useStateContext } from "../../contexts/ContextProvider";
import { httpClient } from "../../utils/http-client";

const Management = () => {
    const { bots, setBots } = useStateContext();

    useEffect(() => {
        async function getBots() {
            const response = await httpClient.get("/bots");
            setBots(response.data);
            console.log(response.data);
          }

        if (bots.length == 0) {
            getBots();
            // setBots(JSON.parse(JSON.stringify(botsData)));
        }
    }, []);


    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <BotsHeader category="Bots" title="Management" />
            <Outlet />

        </div>
    )
}

export default Management;