import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

const TWO_HUNDRED_MS = 200;

interface GlobalFilterProps {
	globalFilter: string;
	setGlobalFilter: (filterValue: any) => void;
}

export default function GlobalFilter({
	globalFilter,
	setGlobalFilter,
}: GlobalFilterProps) {
	console.log(setGlobalFilter);
	const [value, setValue] = useState("");
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, TWO_HUNDRED_MS);

	return (
		<TextField
			type="text"
			value={value || ""}
			onChange={(e) => {
				setValue(e.target.value);
				onChange(e.target.value);
			}}
			placeholder={`Search`}
		/>
	);
}
