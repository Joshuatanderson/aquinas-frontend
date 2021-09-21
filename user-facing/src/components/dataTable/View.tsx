import { useMemo, useState } from "react";
import { Grid, Container, Typography } from "@material-ui/core";
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
					<table {...getTableProps()}>
						<thead>
							{
								// Loop over the header rows
								headerGroups.map((headerGroup) => (
									// Apply the header row props
									<tr {...headerGroup.getHeaderGroupProps()}>
										{
											// Loop over the headers in each row
											headerGroup.headers.map((column) => (
												// Apply the header cell props
												<th
													{...column.getHeaderProps(
														column.getSortByToggleProps()
													)}
												>
													{column.render("Header")}
													{/* Add a sort direction indicator */}
													<span>
														{column.isSorted
															? column.isSortedDesc
																? " 🔽"
																: " 🔼"
															: ""}
													</span>
												</th>
											))
										}
									</tr>
								))
							}
						</thead>
						{/* Apply the table body props */}
						<tbody {...getTableBodyProps()}>
							{
								// Loop over the table rows
								rows.map((row) => {
									// Prepare the row for display
									prepareRow(row);
									return (
										// Apply the row props
										<tr {...row.getRowProps()}>
											{
												// Loop over the rows cells
												row.cells.map((cell) => {
													// Apply the cell props
													return (
														<td {...cell.getCellProps()}>
															{
																// Render the cell contents
																cell.render("Cell")
															}
														</td>
													);
												})
											}
										</tr>
									);
								})
							}
						</tbody>
					</table>
				</Grid>
			</Grid>
		</Container>
	);
};

export default DataTableView;
