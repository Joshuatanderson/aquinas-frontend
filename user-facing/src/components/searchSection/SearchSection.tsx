import React, { useState } from "react";
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

const useStyles = makeStyles({
	searchSection: {
		marginTop: theme.spacing(8), // accounting for the app bar
	},
});

const SearchSection = () => {
	const classes = useStyles();
	const [searchMode, setSearchMode] = useState<SearchOption>(
		SEARCH_MODES.BIBLE_TO_AQUINAS as SearchOption
	);

	const handleSearchModeChange = (
		event: React.MouseEvent<HTMLElement>,
		mode: SearchOption
	) => {
		setSearchMode(mode);
	};

	return (
		<Container>
			<Grid container spacing={3} className={classes.searchSection}>
				<Grid item>
					<Typography>Search by:</Typography>
				</Grid>
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
					<Select value="Test">
						<option value={1}>Test</option>
						<option value={2}>Test2</option>
					</Select>
				</Grid>
			</Grid>
		</Container>
	);
};

export default SearchSection;
