class PortfolioElem {
	buildDOM(data) {
		const listElem = document.querySelector("#portfolio-list");

		listElem.innerHTML = data.map(item => {
			return (
				`<li class="item">
					<div class="card" style="background-image: url(${item.image})">
						<div class="buttons"><button class="btn full-size"></button><button class="btn link"></button></div>
						<div class="description">
							<h3>${item.description}</h3>
							<p>${item.keywords}</p>
						</div>
					</div>
				</li>`
			);
		}).join('');
	}
}

export default PortfolioElem;