import React from "react";
import BucketItem from "./BucketItem";
export default function Bucket({ list, updateList }) {
	const completeBucketItem = (id) => {
		// if the item is checked complete, isComplete = true
		let updatedBucketList = list.map((item) => {
			if (item.id === id) {
				console.log("is same");
				item.isComplete = !item.isComplete;
			}
			return item;
		});
		updateList(updatedBucketList);
	};
	const deleteBucketItem = (id) => {
		const updatedBucketList = [...list].filter((item) => item.id !== id);
		updateList(updatedBucketList);
	};
	const updateBucketItem = (id, newValue) => {
		updateList((prev) => prev.map((item) => (item.id === id ? newValue : item)));
	};
	return (
		<div>
			Bucket
			{list.map((item) => {
				return (
					<BucketItem
						key={item.id}
						id={item.id}
						text={item.text}
						importance={item.importance}
						complete={completeBucketItem}
						isComplete={item.isComplete}
						onDelete={deleteBucketItem}
						onUpdate={updateBucketItem}
					/>
				);
			})}
		</div>
	);
}
