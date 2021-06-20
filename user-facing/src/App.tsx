import React, { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@material-ui/core/styles"
import {CssBaseline} from "@material-ui/core"
import {theme} from "./theme/theme";

import "./App.scss";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<div className="app">
				<header className="App-header">
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		</ThemeProvider>
	);
};

export default App;
