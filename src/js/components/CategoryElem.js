class CategoryElem {
	buildDOM(data) {
		const listElem = document.querySelector("#blog-category");

		listElem.innerHTML = data.map(item => {
			return (
				`<li class="item">
					<span class="name">${item.name}</span>
					<span class="count">${item.count}</span>
				</li>`
			);
		}).join('');
	}
}

export default CategoryElem;