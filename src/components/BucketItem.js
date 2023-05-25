import React, { useState } from "react";
import BucketForm from "./BucketForm";

export default function BucketItem({ id, text, importance, complete, isComplete, onDelete, onUpdate }) {
	const [edit, setEdit] = useState({
		id: null,
		text: text,
		importance: importance,
	});
	const importanceColor = () => {
		if (isComplete) {
			return "#808080";
		} else {
			if (importance === "high") {
				return "red";
			}
			if (importance === "medium") {
				return "yellow";
			} else {
				return "green";
			}
		}
	};
	const styles = {
		container: {
			background: importanceColor(),
		},
	};
	const completeBucketItem = (e) => {
		e.preventDefault();
		complete(parseInt(e.target.id));
	};
	const deleteBucketItem = (e) => {
		e.preventDefault();
		onDelete(parseInt(e.target.id));
	};
	const updateBucketItem = (value) => {
		onUpdate(edit.id, value);
		setEdit({ id: id, value: text, importance: importance });
	};
	if (edit.id) {
		return <BucketForm edit={edit} onSubmit={updateBucketItem} />;
	}
	return (
		<div style={styles.container}>
			<h3>{text}</h3>
			<button onClick={completeBucketItem} id={id}>
				Complete
			</button>
			<button onClick={deleteBucketItem} id={id}>
				Delete
			</button>
			<button onClick={updateBucketItem} id={id}>
				Edit
			</button>
		</div>
	);
}
