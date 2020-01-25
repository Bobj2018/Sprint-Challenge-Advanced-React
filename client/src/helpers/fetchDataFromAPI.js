export function fetchDataFromAPI(link) {
	let data;

	fetch(link)
		.then(res => res.json())
		.then(res => (data = res))
		.catch(err => console.log(err));

	return data;
}
