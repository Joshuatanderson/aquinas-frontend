import { useMemo, useState } from "react";
import {
	Grid,
	Container,
	Typography,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Icon,
} from "@material-ui/core";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { useTable, useFilters, useGlobalFilter, useSortBy } from "react-table";

import { ApiDataItem } from "../../types/ApiDataItem";
import { Column } from "./types";
// import GlobalFilter from "../globalFilter/GlobalFilter";
import { AQUINAS_TO_BIBLE, BIBLE_TO_AQUINAS } from "../../constants";
import SearchSection from "./searchSection/SearchSection";

interface DataTableViewProps {
	data: ApiDataItem[];
	columns: Column[];
}

const DataTableView = ({ data, columns }: DataTableViewProps) => {
	const memoizedData = useMemo(() => data, [data]);
	const [searchMode, setSearchMode] = useState<
		typeof BIBLE_TO_AQUINAS | typeof AQUINAS_TO_BIBLE
	>(BIBLE_TO_AQUINAS);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		setFilter,
	} = useTable({ columns, data: memoizedData }, useFilters, useSortBy);

	return (
		<Container>
			<Grid container spacing={3}>
				{/* <SearchSection
					searchMode={searchMode}
					setSearchMode={setSearchMode}
					setFilter={setFilter}
				/> */}

				{/* <GlobalFilter
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
				/> */}
			</Grid>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Table {...getTableProps()}>
						<TableHead>
							{
								// Loop over the header rows
								headerGroups.map((headerGroup) => (
									// Apply the header row props
									<TableRow {...headerGroup.getHeaderGroupProps()}>
										{
											// Loop over the headers in each row
											headerGroup.headers.map((column) => (
												// Apply the header cell props
												<TableCell
													{...column.getHeaderProps(
														column.getSortByToggleProps()
													)}
												>
													{column.render("Header")}
													{/* Add a sort direction indicator */}
													<span>
														{column.isSorted ? (
															column.isSortedDesc ? (
																<KeyboardArrowDown />
															) : (
																<KeyboardArrowUp />
															)
														) : (
															""
														)}
													</span>
												</TableCell>
											))
										}
									</TableRow>
								))
							}
						</TableHead>
						{/* Apply the table body props */}
						<TableBody {...getTableBodyProps()}>
							{
								// Loop over the table rows
								rows.map((row) => {
									// Prepare the row for display
									prepareRow(row);
									return (
										// Apply the row props
										<TableRow {...row.getRowProps()}>
											{
												// Loop over the rows cells
												row.cells.map((cell) => {
													// Apply the cell props
													return (
														<TableCell {...cell.getCellProps()}>
															{
																// Render the cell contents
																cell.render("Cell")
															}
														</TableCell>
													);
												})
											}
										</TableRow>
									);
								})
							}
						</TableBody>
					</Table>
				</Grid>
			</Grid>
		</Container>
	);
};

export default DataTableView;
