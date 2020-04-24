import React from 'react';
import * as Panels from '../../panels';
import * as Widgets from '../../widgets';
import * as Visualisers from '../../visualisers';

const Components = {
	...Panels,
	...Widgets,
	...Visualisers
}


const createComponent = function (node:any) {

	if ( (Components as any)[node.name]) {
		let properties = {
			properties: node.properties,
			nodes: node.childComponents,
			TreeCreator: createComponent
		};
		
		return React.createElement( (Components as any)[node.name], properties);
	}
};

function MyComponent(props:any) {
	return (
		<>
			{createComponent(props.nodes)}
		</>
	)
}

export default MyComponent;