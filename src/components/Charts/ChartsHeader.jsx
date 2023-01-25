import React, { useEffect, useState } from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Query } from '@syncfusion/ej2-data';

import { useStateContext } from '../../contexts/ContextProvider';
import { httpClient } from '../../utils/http-client';
import { createSpinner, showSpinner } from '@syncfusion/ej2/popups';

const SAMPLE_CSS = `
    .crypto-select {
        padding: 0px !important;
    }

    .itemRow{
      display: flex;
      justify-content: space-between;
    }

    .itemRowCellInfo{
      max-width: 240px;
      overflow: hidden;
      padding-right: 24px;
      border-bottom: 1px solid #f0f3fa;
      cursor: default;
      text-align: left;
      // min-width: 25%;
      flex-basis: 10rem;
    }

    .itemRowCellDescription{
      flex-grow: 3;
      min-width: 0;
      border-bottom: 1px solid #f0f3fa;
      cursor: default;
      text-align: left;
    }

    .container span.dropdownList{
      background-color: rgba(255, 255, 255, var(--tw-bg-opacity)) !important;
      --tw-bg-opacity: 1 !important;
      --tw-border-opacity: 1 !important;
      border-color: rgba(229, 231, 235, var(--tw-border-opacity)) !important;
      border-width: 1px !important;
      border-radius: 0.25rem !important;
    }

    .circle-logo{
      height: 19px;
      width: 19px;
      border-radius: 50%;
      color: #fff;
      display: inline-flex;
      font-style: normal;
      font-weight: 700;
      justify-content: center;
      overflow: hidden;
      align-items: center;
      margin-left: 0px;
      margin-right: 8px;
    }
    `;

const ChartsHeader = ({ category, title, chartType })  => {
  const { setCryptoPair, symbols, setSymbols } = useStateContext();
  const localFields = { text: 'name', value: 'name' };
  let spinnerInstance = null;

  useEffect(() => {
    async function getSymbols() {
      const response = await httpClient.get("/symbols");
      setSymbols(response.data.data);
    }

    !symbols ? getSymbols() : symbols;
  }, []);

  const handleCryptoSelect = (e) => {
    setCryptoPair(e.itemData.Code);
  }

  //set the value to item template
  function itemTemplate(data) {
    return (
      <div class="itemRow">
        <div class="itemRowCellInfo">
          <img class="circle-logo" decoding='async' src={data.baseAssetUrl} />
          <span class="text-base text-gray-900">{data.name}</span> 
        </div>
        <div class="itemRowCellDescription">
            <span class="text-sm text-gray-500">{data.description}</span> 
        </div>
      </div>
    );
  }

  function onFiltering(e) {
    let query = new Query();
    //frame the query based on search string with filter type.
    query = (e.text !== '') ? query.where('name', 'startswith', e.text, true) : query;
    //pass the filter data source, filter query to updateData method.
    e.updateData(symbols, query);
  };

  function onCreated() {
    if (spinnerInstance){
      spinnerInstance.style.display = "none";
    }
  }

  return (
  <div className="mb-10">
    <style>
        {SAMPLE_CSS}
    </style>
    <div id='container'>
      <p className="text-lg text-gray-400">{chartType}</p>
      <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900 mb-1">{category}</p>
      {symbols 
        ? <DropDownListComponent 
            cssClass="dropdownList ml-1 h-10 flex border border-gray-200 rounded items-center" 
            id="cryptoPairs" 
            dataSource={symbols}
            fields={localFields} 
            placeholder="Select a cryptocurrency pair" 
            popupHeight="220px"
            // popupWidth="220px"
            width="400px"
            itemTemplate={itemTemplate}
            valueTemplate={itemTemplate}
            // "<span class='text-base text-gray-900'><img class='circle-logo' decoding='async' src=${baseAssetUrl} />${name}</span>"
            filtering={onFiltering.bind(this)}
            filterBarPlaceholder='Search' 
            allowFiltering={true}
            index='0'
            select={handleCryptoSelect}
            created={onCreated.bind(this)}/>
        : <div ref={spinner => spinnerInstance = spinner} role="status">
              <svg aria-hidden="true" class="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
          </div>
      }
    </div>
    <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">{title}</p>
  </div>);
}

export default ChartsHeader;