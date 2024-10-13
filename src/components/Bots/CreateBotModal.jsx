import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { useStateContext } from '../../contexts/ContextProvider';
import { fieldsData, pairsData } from './data';



const CreateBotModal = () => {
    const { setActiveCreateBot, handleBotSubmit, bots } = useStateContext();

    const nameRef = React.useRef();
    const allocRef = React.useRef();
    const symbolRef = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = nameRef.current.value
        const alloc = allocRef.current.value
        const symbol = symbolRef.current.value

        const json = {
            "Name": name,
            "Allocation": alloc,
            "Symbols": symbol,
            "Pos": "0",
            "TotalProfit": "0",
            "DayProfit": "0",
            "IsActive": "false",
        };
        //create request - successful response? -> process
        handleBotSubmit(json);
        setActiveCreateBot(false);

    };

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Bot Creator
                            </h3>
                            <button
                                type="button"
                                onClick={() => setActiveCreateBot(false)}
                                style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
                                className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                            >
                                <MdOutlineCancel />
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto min-w-[40rem]">
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
                                        <input ref={allocRef} type="number" defaultValue="100" min="10" id="allocation" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <label for="pairs" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select pairs</label>
                                    <MultiSelectComponent ref={symbolRef} value={["BTCUSDT"]} id="pairs" dataSource={pairsData} mode="Box" fields={fieldsData} defaultValue="BTCUSDT" />
                                    {/* <label for="pairs" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select symbol</label>
                                    <select ref={symbolRef} id="pairs" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>BTCUSDT</option>
                                        <option>ETHUSDT</option>
                                        <option>ADAUSDT</option>
                                    </select> */}
                                </div>
                            </form>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setActiveCreateBot(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                                form="form-id"
                            >
                                Create Bot
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default CreateBotModal;