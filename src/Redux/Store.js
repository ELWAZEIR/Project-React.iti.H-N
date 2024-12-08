import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CombineRedusers from "./Reducers/CombineRedusers";
import thunk from "redux-thunk";  // استيراد thunk بشكل صحيح (default import)

const MyStore = createStore(
  CombineRedusers,
  composeWithDevTools(applyMiddleware(thunk))  // إضافة middleware thunk
);

export default MyStore;
