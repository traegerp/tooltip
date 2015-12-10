function ToolTip(options){
	if(Object.prototype.toString.call(options) === '[object Object]'){
		this.array 		= options.tooltips || []; 
		this.applied 	= false;
	}
	return this;
}

ToolTip.prototype.css = function(){
	var classes = {};
	classes.tooltip 			= '.tooltip{display: inline;position: relative;}';
	classes.tooltipHoverAfter 	= [
		'.tooltip:hover:after{',
    	'background: #333;',
    	'background: rgba(0,0,0,.8);',
    	'border-radius: 5px;',
    	'bottom: 26px;',
    	'box-shadow: 2px 2px 1px #888888;',
    	'color: #fff;',
    	'content: attr(title);',
    	'left: 20%;',
    	'padding: 5px 15px;',
    	'position: absolute;',
    	'z-index: 98;',
    	'width: 220px;',
		'}'
	];

	classes.tooltipHover = [
		'.tooltip:hover:before{',
    	'border: solid;',
    	'border-color: #333 transparent;',
    	'border-width: 6px 6px 0 6px;',
    	'bottom: 20px;',
    	'content: "";',
    	'left: 50%;',
    	'position: absolute;',
    	'z-index: 99;',
		'}'			
	];

    var node = document.createElement('style');
    node.innerHTML = classes.tooltip + classes.tooltipHoverAfter.join('') + classes.tooltipHover.join('');
    document.body.appendChild(node);

};

ToolTip.prototype.attach = function(options){
	if(Object.prototype.toString.call(options) === '[object Object]'){
		var element 		= document.getElementById(options.id);
		element.className 	= 'tooltip';

		if(options.tip){
			element.title 	= options.tip;
		}
	}
};

ToolTip.prototype.create = function(){
	if(this.array){
		if(!this.applied){
			this.css();
			this.applied = true;
		}
		for(var i = 0; i < this.array.length; i++){
			this.attach({
				id 	: this.array[i].id,
				tip : this.array[i].text
			});
		}
	}
};