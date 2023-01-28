import { React } from 'react';

import { ChipDirective, ChipListComponent, ChipsDirective } from '@syncfusion/ej2-react-buttons';

const SAMPLE_CSS = (parsedSymbol, Icon) => `
    #${parsedSymbol} .card {
        background-image: url(${Icon});
    }
    `;

const Badge = ({ Symbol, Icon }) => {
    var parsedSymbol = Symbol.split('.').join("");

    return (
        <div>
            <style>
                {SAMPLE_CSS(parsedSymbol, Icon)}
            </style>
            <ChipListComponent id={parsedSymbol}>
                <ChipsDirective>
                    <ChipDirective leadingIconCss="card" text={Symbol} ></ChipDirective>
                </ChipsDirective>
            </ChipListComponent>
        </div>
    );
}

export default Badge;