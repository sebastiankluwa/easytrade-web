import React from 'react';

import { ChartComponent, SeriesCollectionDirective, AxesDirective, 
  AxisDirective, RowDirective, RowsDirective, SeriesDirective, Inject, 
  CandleSeries, Category, Tooltip, DateTime, Zoom, ScrollBar, Logarithmic, 
  StripLinesDirective, StripLineDirective, Crosshair, LineSeries, 
  AtrIndicator, StripLine, IndicatorsDirective, IndicatorDirective, Legend, 
  BollingerBands, MacdIndicator } from '@syncfusion/ej2-react-charts';

import { chartData } from '../../data/stock-chart-data';
import { PrimaryXAxis, PrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

import { Browser } from '@syncfusion/ej2-base';

export let zoomFactor;
export let zoomPosition;
export let pointColors = [];

const Cryptocurrency = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Cryptocurrency" title="BTCUSDT Historical" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          // load={load.bind(this)}
          primaryXAxis={PrimaryXAxis}
          primaryYAxis={PrimaryYAxis}
          tooltip={{ enable: true, shared: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          width={Browser.isDevice ? '100%' : '80%'} 
          crosshair={{ enable: true, lineType: 'Vertical' }} 
          // pointRender={renderPoint.bind(this)} 
          // axisLabelRender={axisLabelRender.bind(this)} 
          // sharedTooltipRender={sharedTooltipRender.bind(this)}
          chartArea={{ border: { width: 0 } }}
          legendSettings= {{ visible : false }}
          zoomSettings={{ enableMouseWheelZooming: true, enablePinchZooming: true,
            enableSelectionZooming: true, mode: 'X', enableScrollbar: true }}
        >
          <Inject services={[CandleSeries, Category, Tooltip, StripLine,
            Legend, DateTime, Logarithmic, Crosshair, LineSeries, AtrIndicator, 
            BollingerBands, MacdIndicator, Zoom, ScrollBar]} />
          <RowsDirective>
              <RowDirective height={'25%'} />
              <RowDirective height={'25%'}  />
              <RowDirective height={'50%'} />
          </RowsDirective>
          <AxesDirective>
            <AxisDirective 
              name='first'
              opposedPosition={true}>
            </AxisDirective>
            <AxisDirective 
              name='secondary' 
              opposedPosition={true} 
              rowIndex={0} 
              majorGridLines={{ width: 0 }} 
              lineStyle={{ width: 0 }} 
              majorTickLines={{ width: 0 }} 
              maximum={14}
              minimum={0} 
              interval={7} 
              title={'ATR'}>
                <StripLinesDirective>
                    <StripLineDirective 
                      start={0} 
                      end={14} 
                      text='' 
                      color='#6063ff' 
                      visible={true} 
                      opacity={0.1} 
                      zIndex='Behind'>
                    </StripLineDirective>
                </StripLinesDirective>
            </AxisDirective>
            <AxisDirective 
              opposedPosition={true} 
              rowIndex={1} 
              name='triple'
              majorGridLines={{ width: 0 }} 
              lineStyle={{ width: 0 }} 
              minimum={-3.5} 
              maximum={3.5} 
              interval={3.5}
              majorTickLines={{ width: 0 }} 
              title='MACD'>
                <StripLinesDirective>
                    <StripLineDirective 
                      start={-3.5} 
                      end={3.5} 
                      text='' 
                      color='black' 
                      visible={true}
                      opacity={0.03} 
                      zIndex={'Behind'}>
                    </StripLineDirective>
                </StripLinesDirective>
            </AxisDirective>
          </AxesDirective>
          <SeriesCollectionDirective>
            <SeriesDirective 
              dataSource={chartData} 
              width={2} 
              xName='x' 
              yName='y' 
              low='low' 
              high='high' 
              close='close' 
              volume='volume' 
              open='open' 
              name='Apple Inc' 
              bearFillColor='#2ecd71' 
              bullFillColor='#e74c3d' 
              type='Candle' 
              animation={{ enable: false }}>
            </SeriesDirective>
          </SeriesCollectionDirective>
          <IndicatorsDirective>
              <IndicatorDirective 
                yAxisName='secondary' 
                type='Atr' 
                fill='#6063ff' 
                seriesName='Apple Inc' 
                period={3} 
                animation={{ enable: true }}>
              </IndicatorDirective>
              <IndicatorDirective 
                type='BollingerBands' 
                field='Close' 
                seriesName='Apple Inc' 
                fill='#606eff' 
                period={14} 
                animation={{ enable: true }} 
                upperLine={{ color: '#ffb735', width: 1 }} 
                lowerLine={{ color: '#f2ec2f', width: 1 }}>
              </IndicatorDirective>
              <IndicatorDirective 
                type='Macd'
                period={3}
                fastPeriod={8}
                slowPeriod={5}
                seriesName='Apple Inc'
                macdType='Both'
                width={2}
                macdPositiveColor='#2ecd71'
                macdNegativeColor='#e74c3d'
                fill='#6063ff'
                yAxisName='triple'>
            </IndicatorDirective>
          </IndicatorsDirective>
        </ChartComponent>
      </div>
    </div>);
};

export default Cryptocurrency;