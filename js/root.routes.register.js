import { register } from '../@lib/register.js';

const appName = 'Scratch Router App';

const routes = [
	{
		path: '/',
		template: '/templates/index.html',
		meta: {
			title: `Home | ${appName}`,
			description: `${appName}'s home page`,
		},
	},
	{
		path: '/about',
		template: '/templates/about.html',
		meta: {
			title: `About | ${appName}`,
			description: `${appName}'s about page`,
		},
	},
	{
		path: '/contact',
		template: '/templates/contact.html',
		meta: {
			title: `Contact | ${appName}`,
			description: `${appName}'s contact page`,
		},
	},
];

register.appLevel.routes({ rootRoutes: routes });
