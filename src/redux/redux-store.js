import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import userReducer from './user-reducer';
import navbarReducer from './navbar-reducer';
import usersPageReducer from './users-page-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  userData: userReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

window.__store__ = store;

export default store;
