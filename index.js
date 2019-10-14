function handledClickedItems(){
	$('.js-shopping-list-form').submit(event => { 
		event.preventDefault();
		const userTextElement = $(event.currentTarget).find('.shopping-list-entry');
		$("#shopping-list").append("li" + userTextElement);
	
	});

	$('ul').on('click','li', function(event){
		this.add();
	});
}

$(handledClickedItems);