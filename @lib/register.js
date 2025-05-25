const register = {
    appLevel: {},
};

register.appLevel.routes = ({ rootRoutes }) => {
	const _url = {};

	_url.locationHandler = async () => {
		const location = window.location.pathname; // get the url path
		if (location.length == 0) location = "/";
		//-------------------------
		const currentRoute = rootRoutes.filter(route => route.path === location)[0];
		//-------------------------
		const html = await fetch(currentRoute.template).then((response) => response.text());
		document.querySelector('#current-view').innerHTML = html;
		//-------------------------
		document.title = currentRoute.meta.title;
		document
			.querySelector('meta[name="description"]')
			.setAttribute("content", currentRoute.meta.description);
	};

	_url.route = (event) => {
		if (event) {
			event.preventDefault();
			window.history.pushState({}, "", event.target.href); // i.e .pushState(state, unused, target link);
			_url.locationHandler();
		}
	};

    //-------------------------
	document.addEventListener('click', (e) => {
		const { target } = e;
		if (!target.matches("nav a")) return;
		e.preventDefault();
		_url.route(e);
	});

    //-------------------------
    window.onpopstate = _url.locationHandler;
    window.route = _url.route;
    window.addEventListener('load', (e) => {
		e.preventDefault();
		_url.route(e);
	});

}

export { register };
