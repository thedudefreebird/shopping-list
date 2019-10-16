function addedItem(){
	$('#js-shopping-list-form').on('submit', function(event){
		event.preventDefault();
		let userTextElement = $('#shopping-list-entry').val();
		$('.shopping-list').append(`<li>
			<span class="shopping-item"> `+ userTextElement +` </span>
			<div class="shopping-item-controls">
				<button class="shopping-item-toggle">
					<span class="button-label">check</span>
				</button>
				<button class="shopping-item-delete">
					<span class="button-label">delete</span>
				</button>
			</div>
		</li>
			`);
	});

	$('.shopping-item-toggle').on('click', function(event){
		$('.shopping-item').addClass('shopping-item__checked');
	});

	$('.shopping-item-delete').on('click', function(event){
		$('.shopping-item').remove();
	});
}


$(addedItem);




/*let listChecked = $('.shopping-list');
listChecked.find('.shopping-item-toggle').on('click', function(event){
	$('.shopping-item').addClass('.shopping-item__checked');
});*/
