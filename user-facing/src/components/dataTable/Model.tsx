import { Typography } from "@material-ui/core";
import React, { useMemo, useEffect, useState, Fragment } from "react";
import { DEV } from "../../config";
import { makeStyles } from "@material-ui/core/styles";
import { ApiDataItem } from "../../types/ApiDataItem";
import { theme } from "../../theme/theme";
import { Column } from "./types";
import DataTableView from "./View";

const useStyles = makeStyles({
	cont: {
		marginTop: theme.spacing(9),
		marginLeft: theme.spacing(3),
	},
});

interface DataTableModelProps {
	globalSearch: string;
}

const DataTableModel = ({ globalSearch }: DataTableModelProps) => {
	const classes = useStyles();
	const [data, setData] = useState<ApiDataItem[]>();

	useEffect(() => {
		// const fetchData = async () => {
		// 	const resp = await fetch(DEV.DATA_ENDPOINT);
		// 	const json = await resp?.json();
		// 	setData(json.data);
		// };
		// fetchData();
	}, []);

	// TS typing error fixed with this: https://github.com/tannerlinsley/react-table/discussions/2664
	const columns: Column[] = useMemo(
		() => [
			{
				Header: "Bible Chapter",
				accessor: "Bible Chapter" as keyof ApiDataItem, // accessor is the "key" in the data
			},
			{
				Header: "Bible Book",
				accessor: "Bible book" as keyof ApiDataItem,
			},
			{
				Header: "Bible Verse",
				accessor: "Bible verse" as keyof ApiDataItem,
			},
			{
				Header: "Location 1",
				accessor: "Location 1" as keyof ApiDataItem,
			},
			{
				Header: "Location 2",
				accessor: "Location 2" as keyof ApiDataItem,
			},
			{
				Header: "Location 3",
				accessor: "Location 3" as keyof ApiDataItem,
			},
			{
				Header: "Location 4",
				accessor: "Location 4" as keyof ApiDataItem,
			},
			{
				Header: "Text",
				accessor: "Text" as keyof ApiDataItem,
			},
			{
				Header: "Id",
				accessor: "_id" as keyof ApiDataItem,
			},
			{
				Header: "Yes",
				accessor: "Yes" as keyof ApiDataItem,
			},
			{
				Header: "Vulgate Chapter",
				accessor: "Vulgate Chapter" as keyof ApiDataItem,
			},
			{
				Header: "Vulgate Verse",
				accessor: "Vulgate verse" as keyof ApiDataItem,
			},
		],
		[]
	);

	return (
		<Fragment>
			<div className={classes.cont}>
				{data?.length && <DataTableView data={data} columns={columns} />}
				{!data?.length && (
					<Typography variant="body1">Data loading...</Typography>
				)}
			</div>
		</Fragment>
	);
};

export default DataTableModel;
