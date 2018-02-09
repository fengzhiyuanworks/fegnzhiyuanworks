var toArray = function() {
	var arr = null;
	try {
		arr = Array.prototype.slice.call(this, 0);
	} catch (e) {
		arr = new Array();
		for (var i = 0, len = this.length; i < len; i++) {
			arr.push(this[i]);
		}
	}
	return arr;
}



if(!("classList" in document.documentElement)) {  
	Object.defineProperty(HTMLElement.prototype, 'classList', {  
		get: function() {  
			var self = this;  
			function update(fn) {  
				return function(value) {  
					var classes = self.className.split(/\s+/g),  
					index = classes.indexOf(value);  
					
					fn(classes, index, value);  
					self.className = classes.join(" ");  
				}  
			}  
			return {                      
				add: update(function(classes, index, value) {  
					if (!~index) classes.push(value);  
				}),  
				
				remove: update(function(classes, index) {  
					if (~index) classes.splice(index, 1);  
				}),  
				
				toggle: update(function(classes, index, value) {  
					if (~index)  
						classes.splice(index, 1);  
					else  
						classes.push(value);  
				}),  
				
				contains: function(value) {  
					return !!~self.className.split(/\s+/g).indexOf(value);  
				},  
				
				item: function(i) {  
					return self.className.split(/\s+/g)[i] || null;  
				}  
			};  
		}  
	});  
} 







HTMLCollection.prototype.toArray = toArray;




var styleSheetMethods = {
	removeRule: function(n){
		if(typeof n == "number")
		{
			if(n<this.rules.length)
			{
				this.sheet.removeRule?this.sheet.removeRule(n):this.sheet.deleteRule(n);
			}
		}else
		{
			var i = this.indexOf(n);
			this.sheet.removeRule?this.sheet.removeRule(i):this.sheet.deleteRule(i);

		}
	},
	indexOf: function(selector){
		for(var i=0;i<this.rules.length;i++)
		{
			if(this.rules[i].selectorText==selector)
			{
				return i;
			}
		}
		return -1;
	},
	addRule: function(selector,styles,n){
		if(typeof n == "undefined")
		{
			n = this.rules.length;
		}
		this.sheet.insertRule?this.sheet.insertRule(selector + "{" + styles + "}", n):this.sheet.addRule(selector, styles, n);

	},
	setRuleStyle: function(selector,attribute,_value){
		var i = this.indexOf(selector);
		this.rules[i].style[attribute] = _value;
	}
}


for (method in styleSheetMethods) {
	StyleSheet.prototype[method] = styleSheetMethods[method]
}










var arrayMethods = {
	indexOf: function(val) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] == val) return i;
		}
		return -1;
	},
	remove: function(val) {
		var index = this.indexOf(val);
		if (index > -1) {
			this.splice(index, 1);
		}
	},
}

for (method in arrayMethods) {
	Array.prototype[method] = arrayMethods[method]
}






var elementMethods = {
	getStyle: function(getStyle) {
		if(this.currentStyle){   	
			return this.currentStyle[getStyle];   
		}   
		else{   	
			return document.defaultView.getComputedStyle(this,null)[getStyle];   	
		} 
	},
	filterChildren: function(className) {
		var nodes=[];
		for (let node of this.children) {
			node.classList.contains(className) && nodes.push(node)
		}
		return nodes;
	},
	filterParents: function(className) {
		var node;
		var el = this;
		function fitler(el, className) {
			if (el.parentNode) {
				if (el.parentNode.classList.contains(className)) {
					node = el.parentNode;
				} else {
					fitler(el.parentNode, className)
				}
			}
			return  node;
		}
		return fitler(el, className);
	},
	siblings: function(className) {
		var nodes=[];
		var prev=this.previousSibling; 

		while(prev){
			if(prev.nodeType===1 && (prev.classList.contains(className) || !className)){ 
				nodes.push(prev); 
			} 
			prev=prev.previousSibling; 
		} 
		nodes.reverse(); 
		var next=this.nextSibling; 
		while(next){ 
			if(next.nodeType===1 && (next.classList.contains(className) || !className)){ 
				nodes.push(next); 
			} 
			next=next.nextSibling; 
		} 
		return nodes.length>1 ? nodes : nodes[0]; 
	}
}


if (window.HTMLElement) {
	for (method in elementMethods) {
		HTMLElement.prototype[method] = elementMethods[method]
	}
} else {
	var elAll = document.all, lenAll = elAll.length;
	for (var iAll=0; iAll<lenAll; iAll+=1) {
		for (method in elementMethods) {
			elAll[iAll][method] = elementMethods[method]
		}
	}
}












