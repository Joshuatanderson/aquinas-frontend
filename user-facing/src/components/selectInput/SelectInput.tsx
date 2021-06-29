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
	const createOptions = props.options.map((option) => (
		<option value={option} key={`option-${option}`}>
			{option}
		</option>
	));
	createOptions.push(<option value="" key={`option-empty`} />);

	return (
		<Fragment>
			<InputLabel>{props.name}</InputLabel>
			{/* Used native select to get around MUI/react incompatabiltiy https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode  */}
			<NativeSelect
				value={props.value}
				onChange={props.handleChange}
				id={`${props.name}-select`}
			>
				{createOptions}
			</NativeSelect>
		</Fragment>
	);
};

export default SelectInput;
