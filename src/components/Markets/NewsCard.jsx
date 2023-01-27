import React from 'react';

import { ChipDirective, ChipListComponent, ChipsDirective } from '@syncfusion/ej2-react-buttons';

const SAMPLE_CSS = `
    #chip-default .crypto {
        background-image: url('https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg');
    }
    `;

const NewsCard = () => {



    return (
        <div class="rounded-xl border p-5 w-full bg-white">
            <style>
                {SAMPLE_CSS}
            </style>
            <div class="flex w-full items-center justify-between border-b pb-3">
                <div class="flex items-center space-x-3">
                    <img class="h-8" src='https://s3.tradingview.com/news/logo/cointelegraph-en--theme-light.svg' />
                    {/* <div class="text-lg font-bold text-slate-700">Cointelegraph</div> */}
                </div>
                <div class="flex items-center space-x-8">
                    <ChipListComponent id="chip-default">
                        <ChipsDirective>
                            <ChipDirective leadingIconCss="crypto" text="COIN" ></ChipDirective>
                        </ChipsDirective>
                    </ChipListComponent>
                    <div class="text-xs text-neutral-500">2 hours ago</div>
                </div>
            </div>

            <div class="mt-4 mb-6">
                <div class="mb-3 text-xl font-bold truncate">Crypto-friendly Stripe weighs public offering: Report</div>
                <div class="text-sm text-neutral-600 truncate">
                    Internet payment processor Stripe is reportedly eyeing a public offering and has set a 12-month timeline to explore the possibility.
                    Stripe has hired Goldman Sachs and JPMorgan Chase to advise on the feasibility and timing of a public-market debut, according to a Jan. 26 report by The Wall Street Journal. A source with knowledge of the matter told the Journal that Stripe's executives will either take the company public or allow employees to sell shares in a private transaction.
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between text-slate-500">
                    <div class="flex space-x-4 md:space-x-8">
                        <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <span>125</span>
                        </div>
                        <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                            <span>4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;