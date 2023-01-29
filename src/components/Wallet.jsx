import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';

const Wallet = () => {

    return (
        <div className="drop-shadow-xl nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-64">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <p className="font-medium text-sm text-gray-400 dark:text-gray-900">Total balance</p>
                    <p className="font-semibold text-lg dark:text-gray-200">0 USD</p>
                    <p className="font-semibold text-sm dark:text-gray-200">≈ 0 BTC</p>
                </div>
                <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
            </div>
        </div>
    );
};

export default Wallet;