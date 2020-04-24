import DataApi from './data.api';
import * as DataReducer from './data.reducer';
import * as Panels from '../../panels';
import * as Widgets from '../../widgets';
import * as Visualisers from '../../visualisers';
import { store } from '../../index';

const Components = {
	...Panels,
	...Widgets,
	...Visualisers
}



class Error{
	message:string;
	description:string;
    constructor(message:string, description:string){
        this.message = message;
        this.description = description;
    }
}

const validateIt = (res:any, data:any)=>{
	let error = null;
	

	function loop(node:any){
		let ControlName = node.name,
			Control = (Components as any)[ControlName];

		// Контрола нет в библиотеке. С сервера пришел не валидный json.
		if(Control === undefined){
			error = new Error(
				`Component with name: «‎${ControlName}» is not existed in the component library`,
				JSON.stringify(node, null, 3)
			)
			return false;
		}

		// Не валидное создание контрола на клиенте. Указать тип.
		if (!Control.types) {
			error = new Error(
				`Invalid component's creation («‎${ControlName}»). Add property types.`,
				`${ControlName}`
			)
			return false;
		}

		// Контрол из дерева не содержит обязательных параметров.
		if (Control.types) {
			for (let type in Control.types ){
				if(
					(Control.types[type].contract === 'required' && !node.properties[type])
					|| (Control.types[type].contract === 'required' && Control.types[type].posValues && Control.types[type].posValues.indexOf(node.properties[type].value) < 0)
				){
					error = new Error(
						`Component «‎${ControlName}» hasn't required properties`,
						`Required properties:\n${Object.keys(Control.types)}: ${Control.types[type].posValues}\n\nNode:\n${JSON.stringify(node, null, 3)}`
					)
					return false;
				}
			}
		}

		// Не удается смапить ref на данные. Не хватает данных.
		if (node.properties) {
			let e = false;

			Object.keys(node.properties).forEach((key) => {
				if (
					node.properties[key].type === 'ref'
					&& !data[node.properties[key].value]
				){
					e = true;
				}
			});

			if (e) {
				error = new Error(`Component «‎${ControlName}» has empty reference`,
					`${JSON.stringify(node, null, 3)}`
				);

				return false;
			}
		}

		if (node.childComponents && node.childComponents.length) node.childComponents.forEach((n:any) => loop(n));
	}



	loop(res.Tree);
	return error;
}

const resolveDataRefs = (tree:any, data:any)=>{

	function loop(node:any){
		if (node.properties) {
			Object.keys(node.properties).forEach((key) => {
				if (
					node.properties[key].type === 'ref'
					&& data[node.properties[key].value]
				){
					node.properties[key].value = data[node.properties[key].value]
				}
			});
		}
		if (node.childComponents && node.childComponents.length) node.childComponents.forEach((n:any) => loop(n));
	}
	loop(tree);
	return tree;
}

export const getMock = (query:any) => (dispatch:any) => {
	return DataApi.getMock(query)
		.then(response => {
			if (response) {
				const state = store.getState();
				const data = state.MainState.data;
				// 1 Дата пришла с сервера
				dispatch(DataReducer.receiveResponse(response));
				// 1 Валидируем json
				let validResult = validateIt(response, data);
				if(!validResult){
					// Сигнрализируем, что данные валидны
					dispatch(DataReducer.componentsValidationFinish());
					// Кладем дерево нодов уже с реальными данными
					dispatch(DataReducer.treeIsReady( resolveDataRefs(response.Tree, data)) );
				}else{
					// Если есть ошибка, диспатчим ее
					dispatch(DataReducer.componentsValidationFailed(validResult));
				}
			}
		})
		.catch(error => {
			throw error;
		});
};

export const getData = (query:any) => (dispatch:any) => {
	return DataApi.getData(query)
		.then(response => {
			if (response) {
				dispatch(DataReducer.buildDataMap(response));
			}
		})
		.catch(error => {
			throw error;
		});
};
