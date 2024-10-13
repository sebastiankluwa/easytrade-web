import React, { useEffect } from "react";
import { Filter, GridComponent, Page, Sort, VirtualScroll, Selection } from "@syncfusion/ej2-react-grids";
import { ColumnDirective, ColumnsDirective, Inject } from "@syncfusion/ej2-react-charts";
import { botTradesData, botTradesGrid } from "./data";
import { useStateContext } from "../../contexts/ContextProvider";

const BotTrades = () => {
    const selectionsettings = { persistSelection: true };

    const { activeBotDetails} = useStateContext();

    useEffect(() => {
        
    }, [activeBotDetails]);

    return (
        <>
            <div>
                <div className="mb-2">
                    <h1 class="text-xl font-semibold dark:text-white">Trade history</h1>
                </div>
                <GridComponent
                    dataSource={activeBotDetails != null && activeBotDetails.orders}
                    pageSettings={{ pageCount: 5 }}
                    selectionSettings={selectionsettings}
                    allowSorting
                    width='100%'
                    className='dark:bg-secondary-dark-bg dark:bg-gray-700 dark:border-gray-600'
                >
                    <ColumnsDirective>
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        {botTradesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                    </ColumnsDirective>
                    <Inject services={[Filter, Page, Sort, Selection]} />
                </GridComponent>
            </div>
        </>
    )
}

export default BotTrades;