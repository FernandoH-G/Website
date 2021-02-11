import './App.css';

import React from "react";
import { Switch, Route } from "react-router-dom";
import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navigation from './Component/Navigation';
import About from "./Endpoint/About"
import Home from "./Endpoint/Home"
import { myConfig } from "./config.js"

const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = myConfig.GH_API_TOKEN;
	// Return the headers to the context so httpLink can read them.
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		}
	}
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});


function App() {
	return (
		<ApolloProvider client={client}>
			<React.Fragment>
				<Navigation />
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/" exact component={Home} />
				</Switch>
			</React.Fragment>
		</ApolloProvider>
	)
}

export default App;
