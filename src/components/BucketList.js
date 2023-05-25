import React, { useState } from "react";
import BucketForm from "./BucketForm";
import Bucket from "./Bucket";
export default function BucketList() {
	const [list, setList] = useState([]);
	console.log(list);
	const addBucketListItem = (item) => {
		if (!item.text) {
			return;
		}
		const newBucketItem = [item, ...list];
		setList(newBucketItem);
	};
	return (
		<main>
			<h1>BucketList</h1>
			<BucketForm onSubmit={addBucketListItem} />
			<Bucket list={list} updateList={setList} />
		</main>
	);
}
