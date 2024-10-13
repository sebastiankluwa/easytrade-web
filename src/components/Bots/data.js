const botSummaryTemplate = (props) => (
    <div className="flex items-center">
        <span class="flex-initial font-light ml-4 align-middle text-left text-base text-gray-900">{props.Name}</span>
        <span class="flex-1 ml-4 font-light text-left text-sm text-gray-500">{props.Status}</span>
    </div>
);

const botStatusTemplate = (props) => (
    <div class="flex items-center">
        {
            props.IsActive === "true" ?
                (
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> <span>Online</span>
                    </div>
                ) :
                (
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> <span>Offline</span>
                    </div>
                )
        }
    </div>
);

export const botsGrid = [
    {
        headerText: 'Bot',
        width: '250',
        template: botSummaryTemplate,
        textAlign: 'Left'
    },
    {
        field: 'Allocation',
        headerText: 'Allocation',
        width: '130',
        format: 'C2',
        textAlign: 'Right',
        headerTextAlign: 'Right'
    },
    // {
    //     field: 'Pos',
    //     headerText: 'Positions',
    //     width: '120',
    //     textAlign: 'Right',
    //     headerTextAlign: 'Right',
    //     // template: (props) => <span className={getPriceChangeClasses(props['24hCloseChange'])}>{props.column.formatFn(props['24hCloseChange']/100)}</span>
    // },
    {
        field: 'DayProfit',
        headerText: '24h P/L',
        width: '100',
        textAlign: 'Right',
        headerTextAlign: 'Right',
        // template: (props) => <span>{formatCurrency(props['24hVolCmc'])}</span>
    },
    {
        field: 'TotalProfit',
        headerText: 'Total P/L',
        width: '100',
        textAlign: 'Right',
        headerTextAlign: 'Right'
    },
    {
        field: 'IsActive',
        headerText: 'Status',
        width: '100',
        textAlign: 'Right',
        headerTextAlign: 'Right',
        template: botStatusTemplate
    }
];

export const botsData = [
    {
        "Id": "36fecbd6-85b6-4328-bf01-c102427eaba6",
        "Name": "MACD Bot",
        "Allocation": "2000",
        "Pos": "1",
        "TotalProfit": "472",
        "DayProfit": "-41",
        "IsActive": "true",
        "Symbols": [
            "BTCUSDT"
        ],
        "MaxOpenPositions": 5,
        "MinimumAllocation": 12
    },
    {
        "Id": "390a434d-96ee-40a2-a688-75f5dbcc22ea",
        "Name": "Buy the Dip",
        "Allocation": "2000",
        "Pos": "2",
        "TotalProfit": "348",
        "DayProfit": "127",
        "IsActive": "true",
        "Symbols": [
            "BTCUSDT"
        ],
        "MaxOpenPositions": 5,
        "MinimumAllocation": 10
    },
    {
        "Id": "e8909c58-e9b2-44a3-9de4-f17a6e6a6c17",
        "Name": "Flash Crash Heghe",
        "Allocation": "500",
        "Pos": "3",
        "TotalProfit": "-237",
        "DayProfit": "14",
        "IsActive": "false",
        "Symbols": [
            "BTCUSDT"
        ],
        "MaxOpenPositions": 5,
        "MinimumAllocation": 10
    }
]

export const botsSummaryData = {
    "Allocation": "115075",
    "NetLiquid": "130075",
    "MaintReq": "1200",
    "DayProfit": "0",
    "TotalProfit": "15000"
}

export const botTradesGrid = [
    { 
		headerText: 'Pair',
		width: '100',
        field: 'pair',
		textAlign: 'Left',
        headerTextAlign: 'Left' 
    },
    { 
		headerText: 'Type',
		width: '90',
        field: 'side',
		textAlign: 'Left',
        headerTextAlign: 'Left',
        template: (props) => <span className={getTradeTypeClasses(props.side)}>{props.side.toUpperCase()}</span>
    },
    { 
		headerText: 'Date',
		width: '180',
        field: 'orderDate',
		textAlign: 'Left',
        headerTextAlign: 'Left',
        template: (props) => <span>{(new Date(props.orderDate)).toLocaleString()}</span>
    },
    { 
		headerText: 'Amount',
		width: '100',
        field: 'amount',
		textAlign: 'Left',
        headerTextAlign: 'Left'
    },
    { 
		headerText: 'Rate',
		width: '100',
        field: 'rate',
		textAlign: 'Left',
        headerTextAlign: 'Left' 
    },
    // { 
	// 	headerText: 'Fee',
	// 	width: '100',
    //     field: 'fee',
	// 	textAlign: 'Left',
    //     headerTextAlign: 'Left' 
    // },
    { 
		headerText: 'Total',
		width: '100',
        field: 'total',
		textAlign: 'Left',
        headerTextAlign: 'Left' 
    },
    { 
		headerText: 'Result',
		width: '120',
        field: 'profitLoss.result',
		textAlign: 'Left',
        headerTextAlign: 'Left',
        format: 'P2',
        template: (props) => (props.side === "Sell" &&<span className={getPriceChangeClasses(props.profitLoss.result)}>{props.profitLoss.result}</span>)
    },
    { 
		headerText: 'Status',
		width: '100',
        field: 'status',
		textAlign: 'Left',
        headerTextAlign: 'Left' 
    }
  ];

export const botTradesData = [
	{
		"Id": "8909c58-e9b2-44a3-9de4-f17a6e6a6c18",
        "BotId": "36fecbd6-85b6-4328-bf01-c102427eaba6",
        "Currency": "DGB",
        "OrderCurrency": "USDT",
        "Type": "sell",
        "OrderDate": '2022-06-17T11:06:50.369Z',
        "Amount": 491,
        "Fee": 0.01,
        "Pair": "DGBUSDT",
        "Rate": 2,
        "Total": 982, //Rate * Amount = Total
        "Result": 5, //Total sell value / total buy value
        "Trigger": "Profit"
    },
    {
		"Id": "8909c58-e9b2-44a3-9de4-f17a6e6a6c18",
        "BotId": "36fecbd6-85b6-4328-bf01-c102427eaba6",
        "Currency": "DGB",
        "OrderCurrency": "USDT",
        "Type": "buy",
        "OrderDate": '2022-06-17T11:06:50.369Z',
        "Amount": 491,
        "Fee": 0.01,
        "Pair": "DGBUSDT",
        "Rate": 2,
        "Total": 982, //Rate * Amount = Total
        "Result": 5, //Total sell value / total buy value
        "Trigger": "Profit"
    },
    {
		"Id": "8909c58-e9b2-44a3-9de4-f17a6e6a6c18",
        "BotId": "36fecbd6-85b6-4328-bf01-c102427eaba6",
        "Currency": "DGB",
        "OrderCurrency": "USDT",
        "Type": "sell",
        "OrderDate": '2022-06-17T11:06:50.369Z',
        "Amount": 491,
        "Fee": 0.01,
        "Pair": "DGBUSDT",
        "Rate": 2,
        "Total": 982, //Rate * Amount = Total
        "Result": 5, //Total sell value / total buy value
        "Trigger": "Profit"
    },
    {
		"Id": "8909c58-e9b2-44a3-9de4-f17a6e6a6c18",
        "BotId": "36fecbd6-85b6-4328-bf01-c102427eaba6",
        "Currency": "DGB",
        "OrderCurrency": "USDT",
        "Type": "sell",
        "OrderDate": '2022-06-17T11:06:50.369Z',
        "Amount": 491,
        "Fee": 0.01,
        "Pair": "DGBUSDT",
        "Rate": 2,
        "Total": 982, //Rate * Amount = Total
        "Result": 5, //Total sell value / total buy value
        "Trigger": "Profit"
    }
]

export const pairsData = [
    { "Pair": "BTCUSDT" },
    { "Pair": "ETHUSDT" },
    { "Pair": "DGBUSDT" },
    { "Pair": "MANAUSDT" }
]

export const fieldsData = { text: 'Pair', value: 'Pair' };

const redBadgeClasses = 'bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300';
const greenBadgeClasses = 'bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300';

const redBadgeTypeClasses = 'bg-red-400 text-white text-xs font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300';
const greenBadgeTypeClasses = 'bg-green-400 text-white text-xs font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300';


const getTradeTypeClasses = (type) => (
    type === 'sell' ? redBadgeTypeClasses : greenBadgeTypeClasses
);

const getPriceChangeClasses = (side) => (
    side < 0 ? redBadgeClasses : greenBadgeClasses
);

function formatCurrency(value) {
    const abbreviation = ["", "K", "M", "B", "T"];
    let index = 0;
    while (value >= 1000 && index < 4) {
        value /= 1000;
        index++;
    }

    return Number(value).toFixed(3) + abbreviation[index] + " USD";
}