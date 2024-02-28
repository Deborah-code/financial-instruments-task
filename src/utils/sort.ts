export interface FinancialInstrument {
    ticker: string;
    price: number;
    assetClass: string;
  }
  export function sortData(data: FinancialInstrument[], sortBy: string, direction: string = 'ascending'): FinancialInstrument[] {
      const sortStrategy = (a: number | string, b: number | string, isAscending: boolean = true) => {
          if (a < b) return isAscending ? -1 : 1;
          if (a > b) return isAscending ? 1 : -1;
          return 0;
      };
      
      switch (sortBy) {
          case 'assetClass':
              data.sort((a, b) => {
                  const order = ['Commodities', 'Equities', 'Credit'];
                  const indexA = order.indexOf(a.assetClass); 
                  const indexB = order.indexOf(b.assetClass);
                  return sortStrategy(indexA, indexB);
              });
              break;
          case 'price':
              data.sort((a, b) => {
                  return sortStrategy(b.price, a.price);
              });
              break;
          case 'ticker':
              data.sort((a, b) => {
                  const tickerA = a.ticker.toUpperCase();
                  const tickerB = b.ticker.toUpperCase();
                  const isAscending = direction === 'ascending';
                  return sortStrategy(tickerA, tickerB, isAscending);
              });
              break;
          default:
              break;
      }
      return data;
  }
  