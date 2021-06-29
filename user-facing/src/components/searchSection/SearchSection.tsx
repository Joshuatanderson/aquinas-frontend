import React, {
	ChangeEvent,
	useState,
	Dispatch,
	useEffect,
	SetStateAction,
} from "react";
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
import { BIBLE_TO_AQUINAS, AQUINAS_TO_BIBLE } from "../../constants";
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
	TEXT_OPTIONS,
} from "../../data/SearchValues";
import NumberInput from "../selectInput/NumberInput";
import getChapterCeiling, {
	chapterCountMap,
} from "../../data/getChapterCeiling";

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

interface SearchSectionProps {
	searchMode: SearchOption;
	setSearchMode: Dispatch<
		SetStateAction<"Bible to Aquinas" | "Aquinas to Bible">
	>;
}

const SearchSection = ({ searchMode, setSearchMode }: SearchSectionProps) => {
	const classes = useStyles();

	const [bibleBook, setBibleBook] = useState<string>("Genesis");
	const [bibleChapter, setBibleChapter] = useState<string>("");

	const [text, setText] = useState<string>("SS");
	const [locationOne, setLocationOne] = useState<string>("");

	useEffect(() => {
		if (searchMode === BIBLE_TO_AQUINAS) {
			setText("");
			setLocationOne("");

			setBibleBook("Genesis");
		}
		if (searchMode === AQUINAS_TO_BIBLE) {
			setBibleBook("");
			setBibleChapter("");

			setText("SS");
		}
	}, [searchMode]);

	const handleSearchModeChange = (
		event: React.MouseEvent<HTMLElement>,
		mode: SearchOption
	) => {
		setSearchMode(mode);
	};

	// if bible book

	// TODO:
	// [x] Create flow for select process
	// [x] handle clear for mode select
	// handle filter table
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
						<ToggleButton value={BIBLE_TO_AQUINAS}>
							Bible to Aquinas
						</ToggleButton>
						<ToggleButton value={AQUINAS_TO_BIBLE}>
							Aquinas to Bible
						</ToggleButton>
					</ToggleButtonGroup>
				</Grid>
				{searchMode === BIBLE_TO_AQUINAS && (
					<Grid container spacing={3}>
						<Grid item>
							<SelectInput
								defaultValue={bibleBook}
								value={bibleBook}
								options={BIBLE_BOOK_OPTIONS}
								name={"Book"}
								handleChange={changeHandlerFactory(setBibleBook, bibleBook)}
							/>
						</Grid>
						{bibleBook && (
							<Grid item>
								<NumberInput
									defaultValue=""
									value={bibleChapter}
									name={"Chapter"}
									valueSetter={setBibleChapter}
									ceiling={getChapterCeiling(
										bibleBook as keyof typeof chapterCountMap
									)}
								></NumberInput>
							</Grid>
						)}
					</Grid>
				)}
				{searchMode === AQUINAS_TO_BIBLE && (
					<Grid container spacing={3}>
						<Grid item>
							<SelectInput
								defaultValue={text}
								value={text}
								name="Text"
								options={TEXT_OPTIONS}
								handleChange={changeHandlerFactory(setText, text)}
							/>
						</Grid>
						{text && (
							<Grid item>
								<SelectInput
									defaultValue={""}
									value={locationOne}
									name="Location 1"
									options={LOCATION_ONE_OPTIONS}
									handleChange={changeHandlerFactory(
										setLocationOne,
										locationOne
									)}
								/>
							</Grid>
						)}
					</Grid>
				)}
			</Grid>
		</Container>
	);
};

export default SearchSection;
