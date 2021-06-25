import { Grid, Container, Typography } from "@material-ui/core";
import { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";

import { DEV } from "../../config";
import { ApiDataItem } from "../../types/ApiDataItem";

const DataTable = () => {
	const [data, setData] = useState<ApiDataItem>();

	useEffect(() => {
		const fetchData = async () => {
			const resp = await fetch(DEV.DATA_ENDPOINT);
			const json = await resp?.json();
			console.debug(json);
			setData(json);
		};
		fetchData();
	}, []);

	useEffect(() => {
		const tableInit = () => {
			useTable({columns, data})
		}
	}, [data])

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

export default DataTable;
