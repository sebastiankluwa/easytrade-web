import React from 'react';

import { 
    GridComponent, 
    ColumnsDirective, 
    ColumnDirective, 
    Page, 
    Selection,
    Inject, 
    Edit, 
    Toolbar, 
    Sort, 
    Filter,
    Freeze
} from '@syncfusion/ej2-react-grids';

import { 
    marketsGrid, 
    marketsData 
} from './markets';

const MarketsComponent = () => {
    const selectionsettings = { persistSelection: true };
  
    return (
        <GridComponent
            dataSource={marketsData}
            enableHover={false}
            allowPaging
            pageSettings={{ pageCount: 5 }}
            selectionSettings={selectionsettings}
            allowSorting
            frozenColumns={1}
            width='100%'
            className='dark:bg-secondary-dark-bg'
            // enableAdaptiveUI={true}
        >
            <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {marketsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
            <Inject services={[Freeze, Page, Selection, Edit, Sort, Filter]} />
        </GridComponent>
    );
  };

  export default MarketsComponent;