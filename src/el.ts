namespace DOM
{
	export class El 
	{
		node: HTMLElement;
		
		constructor(node: Node) 
		{
			this.node = (<HTMLElement> node);
		}

		append(el: El) : void
		{
			this.getParent().appendChild(el.node);
		}

		remove() : void
		{
			this.getParent().removeChild(this.node);
		}

		getParent()
		{
			return this.node.parentNode;
		}

		getChildren()
		{
			return this.node.children;
		}

		find(selector: string)
		{
			return this.node.querySelectorAll(selector);
		}

		addClass(c: string) : void
		{
			this.node.classList ? this.node.classList.add(c) : this.node.className += ' ' + c;
		}

		removeClass(c: string) : void
		{
			if (this.node.classList)
				this.node.classList.remove(c);
			else
				this.node.className = this.node.className.replace(new RegExp('(^|\\b)' + c.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}

		empty() : void
		{
			this.node.innerHTML = '';
		}

		on(event: string, callback: () => any) : void
		{
			this.node.addEventListener(event, callback);
		}

		off(event: string, callback: () => any) : void
		{
			this.node.removeEventListener(event, callback);
		}

		trigger(event: string, data: object) : void
		{
			let e;
			if (window.hasOwnProperty('CustomEvent'))
			  e = new CustomEvent(event, {detail: data});
			else 
			{
			  e = document.createEvent('CustomEvent');
			  e.initCustomEvent(event, true, true, data);
			}
			this.node.dispatchEvent(e);
		}
	}
}
