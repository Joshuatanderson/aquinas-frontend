import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { theme } from "./theme/theme";

import "./App.scss";
import Header from "./components/Header";
import SearchSection from "./components/searchSection/SearchSection";
import DataTableModel from "./components/dataTable/Model";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<SearchSection />
			<DataTableModel />
		</ThemeProvider>
	);
};

export default App;
