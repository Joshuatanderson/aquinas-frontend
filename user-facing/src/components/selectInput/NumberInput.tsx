import React, { ChangeEvent } from "react";
import { TextField, StandardTextFieldProps } from "@material-ui/core";

interface NumberInputProps extends StandardTextFieldProps {
	ceiling: number;
	name: string;
	valueSetter: (next: string) => void;
	value: string;
}

const NumberInput = (props: NumberInputProps) => {
	const guardedHandleChange = (nextValue: string) => {
		const next = parseInt(nextValue);
		if (next > props.ceiling || next < 0) {
			return;
		}
		props.valueSetter(nextValue);
	};
	return (
		<TextField
			onChange={(
				e: ChangeEvent<{
					name?: string | undefined;
					value: string;
				}>
			) => guardedHandleChange(e.target?.value)}
			value={props.value}
			name={props.name}
			type="number"
			label={props.name}
			id={`${props.name}-input`}
		/>
	);
};

export default NumberInput;
