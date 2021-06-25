import { Grid, Container, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";

import { DEV } from "../../config";

const DataTable = () => {
	const [data, setData] = useState<any>();

	useEffect(() => {
		const fetchData = async () => {
			const resp = await fetch(DEV.DATA_ENDPOINT);
			const json = await resp?.json();
			console.debug(json);
			setData(json);
		};
		fetchData();
	}, []);

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
