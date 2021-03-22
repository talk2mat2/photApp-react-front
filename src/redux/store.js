/* eslint-disable prettier/prettier */
import { createStore, combineReducers } from "redux";
import { UserReducers, NotesReducer ,photgraphersReducer,MyLocationReducer} from "./reducer";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for our  web app

const rootReducer = combineReducers({
  user: UserReducers,
  notes: NotesReducer,
 photographers: photgraphersReducer,
 sessionVenue:MyLocationReducer,
});
const authPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
};
const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
