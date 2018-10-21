import React from "react";
import ReactDOM from "react-dom";
irootReducer";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,

	document.getElementById("root")
);
registerServiceWorker();
