import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import configureStore from "./Redux/Store";
import { Provider } from "react-redux";

const client = new ApolloClient({
  uri: "http://localhost:4000/", //put the http addresss here / endpoint
  cache: new InMemoryCache(),
});

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
