function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
};
jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}

//метод jQuery.prototype.text(), который возвращает или изменяет текстовое содержимое выбранных элементов
jQuery.prototype.text = function(content=null){
	if (content === null) {
		let text_cont = '';
		this.each(element => text_cont += element.textContent);
		return text_cont;
	}
	else {
		return this.each(element => element.textContent = content);
	}
}

//метод jQuery.prototype.html(), который возвращает или изменяет html-содержимое выбранных элементов
jQuery.prototype.html = function(content=null){
	if (content === null) {
		let text_cont = '';
		this.each(element => text_cont += element.innerHTML);
		return text_cont;
	}
	else {
		return this.each(element => element.innerHTML = content);
	}
}

$(document).ready(function(){
	const $ = (e) => new jQuery(e);
	
	//эта кнопка демонстрирует работу метода text() для элемента с id='demo'
	$('#button1').click(() => alert("Метод без параметра возвращает тескстовое содержимое элемента: \n" + $('#demo').text()));
	
	//эта кнопка  демонстрирует работу метода text() с параметром ('This is NEW demo!!! text.') для элемента с id='demo'
	$('#button2').click(() => alert("Если новый текст передать как параметр в методе - произойдет замена старого", $('#demo').text('This is NEW demo!!! text.')));
	
	//эта кнопка вспомагательная, возвращает первоначальное значение элемента с id='demo'
	$('#button3').click(() => $('#demo').html('This is <b>demo</b> text.</p>'));
});