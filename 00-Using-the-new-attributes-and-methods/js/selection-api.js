function selectText() {
	var input = document.getElementById("textbox");
	input.selectionStart = parseInt(document.getElementById("starting").value);
	input.selectionEnd = parseInt(document.getElementById("ending").value);
}

function selectText2() {
	var input = document.getElementById("textbox");
	var start = parseInt(document.getElementById("starting").value);
	var end = parseInt(document.getElementById("ending").value);
	input.selectionRange(start, end);
}

function showSelection() {
	var input = document.getElementById("textbox");
	alert("Starting:" + input.selectionStart + " End: " + input.selectionEnd);
}
