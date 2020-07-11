((global) => {
	console.log(global);
	const document = global.document;
	const mainDiv = document.createElement('div', { class: 'container' });
	document.body.appendChild(mainDiv);
	var para = document.createElement('p');
	var node = document.createTextNode('This is new.');
	para.appendChild(node);

	var element = document.getElementById('div1');
	element.appendChild(para);
})(window);
