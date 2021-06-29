import React, { ChangeEvent, useState } from "react";
import {
	Typography,
	Grid,
	makeStyles,
	Container,
	Input,
	TextField,
	Select,
} from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

import { theme } from "../../theme/theme";
import { SearchOption } from "../../types/searchOption";
import { SEARCH_MODES } from "../../constants";
import SelectInput from "../selectInput/SelectInput";
import {
	BIBLE_BOOK_OPTIONS,
	BIBLE_CHAPTER_OPTIONS,
	BIBLE_VERSE_OPTIONS,
	VULGATE_CHAPTER_OPTIONS,
	VULGATE_VERSE_OPTIONS,
	LOCATION_FOUR_OPTIONS,
	LOCATION_ONE_OPTIONS,
	LOCATION_THREE_OPTIONS,
	LOCATION_TWO_OPTIONS,
} from "../../data/SearchValues";

const useStyles = makeStyles({
	searchSection: {
		marginTop: theme.spacing(8), // accounting for the app bar
	},
});

function changeHandlerFactory(
	setStateFunc: React.Dispatch<React.SetStateAction<string>>,
	currentVal: string
) {
	return function (event: ChangeEvent<{ name?: string; value: unknown }>) {
		if (event.target.value === currentVal) {
			return;
		}
		setStateFunc(event.target.value as string);
	};
}

const SearchSection = () => {
	const classes = useStyles();
	const [searchMode, setSearchMode] = useState<SearchOption>(
		SEARCH_MODES.BIBLE_TO_AQUINAS as SearchOption
	);

	const [bibleBook, setBibleBook] = useState<string>("Genesis");
	const [bibleChapter, setBibleChapter] = useState<string>();

	const handleSearchModeChange = (
		event: React.MouseEvent<HTMLElement>,
		mode: SearchOption
	) => {
		setSearchMode(mode);
	};

	// if bible book

	// TODO:
	// Create flow for select process
	// handle clear for mode select
	// handle lazy load table
	// prettify table

	return (
		<Container>
			<Grid container spacing={3} className={classes.searchSection}>
				<Grid item>
					<ToggleButtonGroup
						color="primary"
						value={searchMode}
						exclusive
						onChange={handleSearchModeChange}
						aria-label="change search mode"
					>
						<ToggleButton value={SEARCH_MODES.BIBLE_TO_AQUINAS}>
							Bible to Aquinas
						</ToggleButton>
						<ToggleButton value={SEARCH_MODES.AQUINAS_TO_BIBLE}>
							Aquinas to Bible
						</ToggleButton>
					</ToggleButtonGroup>
				</Grid>
				<Grid>
					<SelectInput
						defaultValue={bibleBook}
						value={bibleBook}
						options={BIBLE_BOOK_OPTIONS}
						name={"Book"}
						handleChange={changeHandlerFactory(setBibleBook, bibleBook)}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default SearchSection;
