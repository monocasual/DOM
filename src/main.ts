namespace DOM
{
	export function nodeListToEls(nodeList: any) : Array<El>
	{
		let out: Array<El> = [];
		for (let i = 0; i < nodeList.length; i++)
			out.push(new El(nodeList[i]));
		return out;
	}

	export function find(selector: string) : Array<El>
	{
		return nodeListToEls(document.querySelectorAll(selector));
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
