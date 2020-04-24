import { default as mock } from './mock';
import { default as dataMock1 } from './dataMock1';
import JsonData from './MOCK_DATA';
import StartupInfoData from './startupInfoMock';

let mocks: any = {
  mock,
  dataMock1,
};

class DataApi {
  static getMock(query: any) {
    return Promise.resolve(JSON.parse(JSON.stringify(mocks[query])));
    // return fetch(`some_endpoint_root`, {
    // 	method: 'GET',
    // 	credentials: 'include'
    // })
    // 	.then(response => response.json())
    // 	.then(handleTokenErrors)
    // 	.catch(error => {
    // 		throw error;
    // 	});
  }

  static getData(query: any) {
    return Promise.resolve(JSON.parse(JSON.stringify(mocks[query])));
    // return fetch(`some_endpoint_root`, {
    // 	method: 'GET',
    // 	credentials: 'include'
    // })
    // 	.then(response => response.json())
    // 	.then(handleTokenErrors)
    // 	.catch(error => {
    // 		throw error;
    // 	});
  }

  static getJsonData() {
    return Promise.resolve(JsonData.slice(0, 10));
  }

  static getStartupInfoData() {
    return Promise.resolve(StartupInfoData);
  }
}

export default DataApi;
