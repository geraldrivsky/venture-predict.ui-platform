let initialState = {
  response: null,
  error: null,
  data: null,
  nodes: null,
  activeStartupId: null,
};

export const receiveResponse = (response: any) => {
  return {
    type: 'LAYOUT_RECEIVED',
    response,
  };
};

export const closeStartupInfoPage = () => {
  return {
    type: 'CLOSE_STARTUP_INFO_PAGE',
  };
};

export const buildDataMap = (data: any) => {
  return {
    type: 'DATA_MAP_BUILDED',
    data,
  };
};

export const treeIsReady = (data: any) => {
  return {
    type: 'COMPONENTS_TREE_IS_READY',
    data,
  };
};

export const componentsValidationFinish = () => {
  return {
    type: 'COMPONENTS_VALIDATION_FINISHED',
  };
};

export const componentsValidationFailed = (error: any) => {
  return {
    type: 'COMPONENTS_VALIDATION_FAILED',
    error,
  };
};

export const showStartupInfoPage = (activeStartupId: number) => {
  return {
    type: 'SHOW_STARTUP_INFO_PAGE',
    activeStartupId,
  };
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case 'LAYOUT_RECEIVED':
      return {
        ...state,
        response: action.response,
      };
    case 'CLOSE_STARTUP_INFO_PAGE':
      return {
        ...state,
        activeStartupId: null,
      };
    case 'COMPONENTS_VALIDATION_FAILED':
      return {
        ...state,
        error: action.error,
      };
    case 'DATA_MAP_BUILDED':
      return {
        ...state,
        data: action.data,
      };
    case 'COMPONENTS_TREE_IS_READY':
      return {
        ...state,
        nodes: action.data,
      };
    case 'SHOW_STARTUP_INFO_PAGE':
      return {
        ...state,
        activeStartupId: action.activeStartupId,
      };
    default:
      return state;
  }
}
