class PopularPostersElem {
	buildDOM(data) {
		const listElem = document.querySelector("#popular-postes");

		listElem.innerHTML = data.map(item => {
			return (
				`<li class="item">
					<figure class="pic" style="background-image: url(${item.img})"></figure>
					<div class="info">
						<a class="desc" href="#" title="${item.desc}">${item.desc}</a>
						<time class="time">${item.time}</time>
					</div>
				</li>`
			);
		}).join('');
	}
}

export default PopularPostersElem;