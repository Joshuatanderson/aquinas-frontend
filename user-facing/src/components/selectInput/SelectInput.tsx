import React, { ChangeEvent, Fragment, useState } from "react";
import { NativeSelect, InputLabel } from "@material-ui/core";
import { NativeSelectInputProps } from "@material-ui/core/NativeSelect/NativeSelectInput";

interface SelectInputProps extends NativeSelectInputProps {
	options: string[];
	name: string;
	handleChange: (
		event: React.ChangeEvent<{
			name?: string | undefined;
			value: string;
		}>
	) => void;
	value: string | number;
}

const SelectInput = (props: SelectInputProps) => {
	const [value, setValue] = useState<any>(props.options[0]);
	const createOptions = props.options.map((option) => (
		<option value={option} key={`option-${option}`} selected={value === option}>
			{option}
		</option>
	));

	return (
		<Fragment>
			<InputLabel>{props.name}</InputLabel>
			{/* Used native select to get around MUI/react incompatabiltiy https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode  */}
			<NativeSelect
				value={value}
				onChange={props.handleChange}
				id={`${props.name}-select`}
			>
				{createOptions}
			</NativeSelect>
		</Fragment>
	);
};

export default SelectInput;
