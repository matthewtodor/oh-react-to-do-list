import React, { useState } from "react";
const styles = {
	container: {
		display: "block",
		width: "50%",
		margin: "auto",
	},
	input: {
		width: "100%",
	},
};

export default function BucketForm({ onSubmit, edit }) {
	// props.onSubmit == addBucketListItem
	const [input, setInput] = useState({
		text: "",
		importance: "low",
		isComplete: false,
	});

	const handleChange = (e) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({
			id: Math.floor(Math.random() * 1000),
			text: input.text,
			importance: input.importance,
			isComplete: input.isComplete,
		});
		setInput({
			text: "",
			importance: "low",
		});
	};

	return (
		<>
			{edit ? <h3>Update Item</h3> : ""}
			<div style={styles.container}>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Enter item here" style={styles.input} value={input.text} name="text" onChange={handleChange} />
					<select name="importance" value={input.importance} onChange={handleChange}>
						<option value="low">Low</option>
						<option value="medium">Medium</option>
						<option value="high">High</option>
					</select>
					<button onClick={handleSubmit}>Add to list</button>
				</form>
			</div>
		</>
	);
}
