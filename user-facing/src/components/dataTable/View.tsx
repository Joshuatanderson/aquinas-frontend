import { Grid, Container, Typography } from "@material-ui/core";
import { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";

import { DEV } from "../../config";
import { ApiDataItem } from "../../types/ApiDataItem";
import { Column } from "./types";

interface DataTableViewProps {
	data: ApiDataItem[];
	columns: Column[];
}

const DataTableView = ({ data, columns }: DataTableViewProps) => {
	console.log(data);

	const tableInstance = useTable({ columns, data });

	return (
		<Container>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography variant="h6">Results</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default DataTableView;
