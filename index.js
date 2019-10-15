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


	/*let addItem = $('button').submit();
	addItem.on('click', function(event){
		event.preventDefault();
		let userTextElement = $(event.currentTarget).find('shopping-list-entry').value;
		$('.shopping-list').append(`
			<li>
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
	});*/

}


$(addedItem);
