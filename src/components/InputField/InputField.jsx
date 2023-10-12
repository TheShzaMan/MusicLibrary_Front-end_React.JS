import React from "react";
import "./InputField.css";

const InputField = ({ label = "", value, onChange, type = "text" }) => {
	return (
		<div className='input-field'>
			<label>{label}</label>
			<input
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};

export default InputField;
