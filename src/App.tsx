import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { theme } from "./theme/theme";
import { useState } from "react";

import "./App.scss";
import Header from "./components/Header";
import DataTableModel from "./components/dataTable/Model";
import { BIBLE_TO_AQUINAS, AQUINAS_TO_BIBLE } from "./constants";
import { SearchOption } from "./types/searchOption";
import SearchInputs from "./components/SearchInputs";

const App = () => {
	const [globalSearch, setGlobalSearch] = useState<string>("");

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<SearchInputs setGlobalSearch={setGlobalSearch} />
			<DataTableModel globalSearch={globalSearch} />
		</ThemeProvider>
	);
};

export default App;
