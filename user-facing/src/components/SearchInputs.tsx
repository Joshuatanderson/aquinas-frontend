import { Button, TextField, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import {
	BIBLE_BOOK_OPTIONS,
	LOCATION_FOUR_OPTIONS,
	LOCATION_ONE_OPTIONS,
	LOCATION_THREE_OPTIONS,
	LOCATION_TWO_OPTIONS,
} from "../data/SearchValues";
import { theme } from "../theme/theme";

const useStyles = makeStyles({
	cont: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(3),
	},
});

interface SearchInputsProps {
	setGlobalSearch: (search: string) => void;
}

const SearchInputs = ({ setGlobalSearch }: SearchInputsProps) => {
	const classes = useStyles();

	const [searchInput, setSearchInput] = useState<string>("");

	const handleSearch = () => {
		setGlobalSearch(searchInput);
		setSearchInput("");
	};

	return (
		<div className={classes.cont}>
			<TextField
				variant="outlined"
				label="Search By"
				onChange={(e) => setSearchInput(e.target.value)}
				value={searchInput}
			/>
			<Button
				variant="contained"
				color="secondary"
				onClick={() => handleSearch()}
			>
				Go
			</Button>
			{/* <Autocomplete 
				renderInput={() => <TextField label="search" helperText="input anything you'd like to search"/>}
				freeSolo={true} 
				options={[...BIBLE_BOOK_OPTIONS, ...LOCATION_ONE_OPTIONS, ...LOCATION_TWO_OPTIONS, ...LOCATION_THREE_OPTIONS, ...LOCATION_FOUR_OPTIONS]}
			/> */}
		</div>
	);
};

export default SearchInputs;
