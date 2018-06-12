class TagsCloudElem {
	buildDOM(data) {
		const listElem = document.querySelector("#tags-cloud");

		listElem.innerHTML = data.map(item => {
			return (
				`<li class="item">
					<a class="tag" href="#${item.name}" title="">${item.name}</a>
				</li>`
			);
		}).join('');
	}
}

export default TagsCloudElem;