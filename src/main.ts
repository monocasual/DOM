namespace DOM
{
	export function find(selector: string) 
	{
		let out: Array<El> = [];
		let els: NodeList = document.querySelectorAll(selector);
		for (let i = 0; i < els.length; i++)
			out.push(new El(els[i]));
		return out;
	}

	/* ready
	Fired when the DOM (and the DOM only) is ready. */

	export function ready(callback: () => any) : void
	{
		document.addEventListener('DOMContentLoaded', callback);
	}

	/* load
	Fired when the DOM and its resources (images, css, frames) are ready. */

	export function load(callback: () => any) : void
	{
		document.addEventListener('load', callback);
	}
}
