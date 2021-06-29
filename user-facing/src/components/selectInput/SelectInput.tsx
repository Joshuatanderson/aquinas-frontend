import React, { ChangeEvent, useState } from "react";
import { Select, SelectProps } from "@material-ui/core";

interface SelectInputProps extends SelectProps {
	options: string[] | number[];
	name: string;
}

const SelectInput = (props: SelectInputProps) => {
	const [value, setValue] = useState<any>(props.options[0]);
	const createOptions = props.options.map((option) => (
		<option value={option} key={`option-${option}`}>
			{option}
		</option>
	));

	const handleChange = (
		event: React.ChangeEvent<{ name?: string; value: unknown }>
	) => {
		if (event.target.value === value) {
			return;
		}

		setValue(event.target.value);
	};

	return (
		<Select
			defaultValue={props.options[0]}
			value={value}
			onChange={handleChange}
			name={props.name}
			id={`${props.name}-select`}
		>
			{createOptions}
		</Select>
	);
};

export default SelectInput;
