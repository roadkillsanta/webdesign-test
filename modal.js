// instanciate new modal
var aboutmodal = new tingle.modal({
	footer: true,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['custom-class-1', 'custom-class-2'],
beforeClose: function() {
	return true; // close the modal
	return false; // nothing happens
}
});
// set content
aboutmodal.setContent('<h1>Our LM TSA Chapter</h1>');

aboutmodal.addFooterBtn('See Engineering Programs', 'tingle-btn tingle-btn--primary', function() {
aboutmodal.close();
window.location.href="index.html#stem";
});
aboutmodal.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
aboutmodal.close();
});

var modal0 = new tingle.modal({
	footer: true,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['custom-class-1', 'custom-class-2'],
beforeClose: function() {
	return true; // close the modal
	return false; // nothing happens
}
});
// set content
modal0.setContent('<h1>here\'s some content</h1>');

// add a button
modal0.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
// here goes some logic
modal0.close();
});
var modal1 = new tingle.modal({
	footer: true,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['custom-class-1', 'custom-class-2'],
beforeClose: function() {
	return true; // close the modal
	return false; // nothing happens
}
});
var modal2 = new tingle.modal({
	footer: true,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['custom-class-1', 'custom-class-2'],
beforeClose: function() {
	return true; // close the modal
	return false; // nothing happens
}
});
var modal3 = new tingle.modal({
	footer: true,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['custom-class-1', 'custom-class-2'],
beforeClose: function() {
	return true; // close the modal
	return false; // nothing happens
}
});
var modal4 = new tingle.modal({
	footer: true,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['custom-class-1', 'custom-class-2'],
beforeClose: function() {
	return true; // close the modal
	return false; // nothing happens
}
});
var modal5 = new tingle.modal({
	footer: true,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['custom-class-1', 'custom-class-2'],
beforeClose: function() {
	return true; // close the modal
	return false; // nothing happens
}
});



// add another button
modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function() {
// here goes some logic
modal.close();
});