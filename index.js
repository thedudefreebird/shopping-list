//Adds Item to list with matching buttons and css.
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
		$('#shopping-list-entry').val(' ')
	});


	//Works on check button click for items that were provided.
	$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
		event.stopPropagation();
		let checkItem = $(this).closest('li').find('.shopping-item');
		checkItem.toggleClass('shopping-item__checked');
	});

	//Works on delete button click for items that were provided.
	$('.shopping-list').on('click', '.shopping-item-delete', function(event){
		event.stopPropagation();
		let deleteItem = $(this).closest('li');
		deleteItem.remove();
	});


}


$(addedItem);
