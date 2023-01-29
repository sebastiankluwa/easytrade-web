import React from "react";
import { Header } from '../../components';
import { useStateContext } from "../../contexts/ContextProvider";

const Configuration = () => {
    const { currentColor } = useStateContext();

    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Bots" title="Configuration" />
            <p class="mb-4 font-light dark:text-white">Connect bots to your account on the binance exchange using API keys. To trade on Binance, you need to <a href="https://www.binance.com/en/my/settings/api-management" target="_blank" class="font-medium text-blue-600 hover:underline dark:text-blue-500">generate</a> an API key. Make sure it has the right permissions (Reading and Spot & Margin Trading).</p>

            <div id="alert-additional-content-1" class="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                <div class="flex items-center">
                    <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Info</span>
                    <h3 class="text-lg font-medium">Restrict access to trusted IPs only</h3>
                </div>
                <div class="mt-2 text-sm">
                    Whitelist these IP addresses at the <a href="https://www.binance.com/en/my/settings/api-management" target="_blank" class="font-medium text-red-500 hover:underline dark:text-red-500">Binance</a> exchange:
                    <p> - 54.46.134.72</p>
                    <p> - 55.48.135.71</p>
                </div>
            </div>

            <form>
                <div class="mb-6">
                    <label for="api-key" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Binance API Key</label>
                    <input type="api-key" id="api-key" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-6">
                    <label for="api-key" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Binance API Secret</label>
                    <input type="api-key" id="api-key" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" style={{ backgroundColor: currentColor }} class={`text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-blue-800`}>Save</button>
            </form>
        </div>
    );
}

export default Configuration;