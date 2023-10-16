import React from "react";
import "./InputField.css";

const InputField = ({ label = "", value, onChange, type = "text" }) => {
	return (
		<div className='input-group2 mb-3'>
			<label className='input-group-text2'>{label}</label>
			<input
				className='form-control2'
				aria-label='With textarea'
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};

export default InputField;
