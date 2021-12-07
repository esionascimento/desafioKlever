import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import LoginReducer from './login/Login.reducer';
import AuthReducer from './auth/Auth.reducer';
import DashboardContato from './dashboard/Dashboard.reducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  login: LoginReducer,
  auth: AuthReducer,
  dashboard: DashboardContato,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
