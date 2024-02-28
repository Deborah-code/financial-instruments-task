import { describe, expect, it } from 'vitest';
import { FinancialInstrument, sortData } from '../utils/sort';

describe('sortData', () => {
  const mockData: FinancialInstrument[] = [
    {  ticker: 'AAPL', price: 150, assetClass: 'Equities' },
    {  ticker: 'GOOG', price: 100, assetClass: 'Commodities' },
    {  ticker: 'MSFT', price: 200, assetClass: 'Credit' },
  ];

  it('should sort by ticker in ascending order', () => {
    const result: FinancialInstrument[] = sortData(mockData, 'ticker', 'ascending');
    const tickers: string[] = result.map(item => item.ticker);
    expect(tickers).toEqual(['AAPL', 'GOOG', 'MSFT']);
  });

  it('should sort by ticker in descending order', () => {
    const result: FinancialInstrument[] = sortData(mockData, 'ticker', 'descending');
    const tickers: string[] = result.map(item => item.ticker);
    expect(tickers).toEqual(['MSFT', 'GOOG', 'AAPL']);
  });

  it('should sort by price in descending order', () => {
    const result: FinancialInstrument[] = sortData(mockData, 'price');
    const prices: number[] = result.map(item => item.price);
    expect(prices).toEqual([200, 150, 100]);
  });

  it('should sort by assetClass based on predefined order', () => {
    const result: FinancialInstrument[] = sortData(mockData, 'assetClass');
    const assetClasses: string[] = result.map(item => item.assetClass);
    expect(assetClasses).toEqual(['Commodities', 'Equities', 'Credit']);
  });
});