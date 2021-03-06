import './App.css';

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
import Test from "./Endpoint/Test"

const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = process.env.REACT_APP_GH_API_KEY;
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
			<>
				<Navigation />
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/" exact component={Home} />
					<Route path="/test" exact component={Test} />
				</Switch>
			</>
		</ApolloProvider>
	)
}

export default App;
