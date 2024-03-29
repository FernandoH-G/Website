import './App.css';

import { useState } from "react"
import { Routes, Route } from "react-router-dom/";
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
import Videos from "./Endpoint/Videos"
// import Test from "./Endpoint/Test"


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
	const [headerMessage, setHeaderMessage] = useState({ title: "", subtitle: "" })

	return (
		<ApolloProvider client={client}>
			<>
				<Navigation
					headerMessage={headerMessage}
				/>
				<Routes>
					<Route
						path="/"
						element={<Home setHeaderMessage={setHeaderMessage} />}
					/>
					<Route
						path="about"
						element={<About setHeaderMessage={setHeaderMessage} />}
					/>
					<Route
						path="videos"
						element={<Videos setHeaderMessage={setHeaderMessage} />}
					/>
					{/* <Route path="/test" element={<Test>} /> */}
				</Routes>
			</>
		</ApolloProvider>
	)
}

export default App;
