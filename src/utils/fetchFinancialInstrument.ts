import data from '../data/financialInstruments';

export const fetchData = async (): Promise<any> => {
   const data: string = await fetchApi();
   return   JSON.parse(data);
}

const fetchApi = (): Promise<string> => {
   const NETWORK_DELAY = 500
   return new Promise((resolve) => {
      setTimeout(()=> resolve(JSON.stringify(data) ), NETWORK_DELAY)
   });
}
