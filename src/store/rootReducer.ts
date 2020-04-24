import { combineReducers } from 'redux';
import MainState from '../modules/data/data.reducer';
import DashboardState from '../modules/dashboard/dashboard.reducer';
import InfoPageState from '../modules/infoPage/infoPage.reducer';

const rootReducer = combineReducers({
    MainState,
    DashboardState,
    InfoPageState
});

export default rootReducer;
