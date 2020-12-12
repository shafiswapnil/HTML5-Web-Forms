// Custom placeholder function

function makePlaceholders() {
	// list of input types
	$inputs = $("input[type=text],input[type=email],input[type=tel],input[type=number],input[type=url");

	// loops through inputs
	$inputs.each(
		// adds placeholder text to placeholder field
		function () {
			var $this = jQuery(this);
			this.placeholderVal = $this.attr("placeholder");
			$this.val(this.placeholderVal);
		})
		.bind("focus", function () {
			// when focused, clear out input field
			var $this = jQuery(this);
			var val = $.trim($this.val());
			if (val == this.placeholderVal || val == "") {
				$this.val();
			}
		})
		.bind("blur", function () {
			// when blured, bring again the placeholder text
			var $this = jQuery(this);
			var val = $.trim($this.val());
			if (val == this.placeholderVal || val == "") {
				$this.val(this.placeholderVal);
			}
		});
}