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
import DataTable from "./components/dataTable/DataTable";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<SearchSection />
			<DataTable/>
		</ThemeProvider>
	);
};

export default App;
