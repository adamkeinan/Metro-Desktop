module.exports = {
	// Your LAN IP or host where you would want the live server
	// Override this if you know your correct external IP (LAN)
	// Otherwise, the system will always try to get a LAN ip.
	// This will also create some issues with file watching because for
	// some reason, service-worker doesn't work on localhost?
	// https://github.com/BrowserSync/browser-sync/issues/1295
	// So it is recommended to change this to your LAN IP.
	// If you intend to access it from your LAN (probably do?)
	host: undefined,
	// Your WordPress development server address
	proxy: 'http://localhost:8080',
	distPublicPath: '/wp-one/wp-content/plugins/<slug>/<outputPath>/',
};