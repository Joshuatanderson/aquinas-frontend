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
import SearchSection from "./components/searchSection/SearchSection";
import DataTableModel from "./components/dataTable/Model";
import { BIBLE_TO_AQUINAS, AQUINAS_TO_BIBLE } from "./constants";
import { SearchOption } from "./types/searchOption";

const App = () => {
	const [searchMode, setSearchMode] = useState<
		typeof BIBLE_TO_AQUINAS | typeof AQUINAS_TO_BIBLE
	>(BIBLE_TO_AQUINAS);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<SearchSection searchMode={searchMode} setSearchMode={setSearchMode} />
			<DataTableModel />
		</ThemeProvider>
	);
};

export default App;
