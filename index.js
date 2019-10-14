function handledClickedItems(){
	$('#js-shopping-list-form').submit(event => { 
		event.preventDefault();
		const userTextElement = $(event.currentTarget).find('#shopping-list-entry');
		$('ul').append('<li>' + userTextElement + '</li>');
	
	});

	$('ul').on('click', function(event){
		this.add();
	});
}

$(handledClickedItems);