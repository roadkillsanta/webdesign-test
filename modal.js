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
aboutmodal.setContent(`
<h1>About Our TSA Chapter</h1>
<div>
<h2>TSA Info, Competitions, Awards</h1>
The Technology Student Association (TSA) is national nonprofit organization for middle and high school students that promotes STEM through 60+ competitive events ranging from robotics to coding to fashion design. Since its founding in 1978, 4 million students have come and gone as members.<br>
The competition structure of TSA is organized into three levels: regional, state, national. Individuals and teams must qualify at one level (i.e. usually top ten) to proceed to to the next. This ensures intense competition and ample motivation.<br>
The Lower Merion High School Chapter (LM-TSA) was established fifteen years ago by Mr. Mark Piotrowski, Mr. Steve Barbato, and Mr. Rich Kressly.
Last year, LM-TSA received 44 top ten finishes at the regional conference, 31 at the state conference, and 8 at the national conference.<br>
In 2018, LM-TSA won second place nationally for LEAP Legacy Chapter, a comprehensive leadership recognition program.
</div>
<div>
<h2>Activities and Community Service Projects</h2>
Every March, the FIRST Jr. Lego League Expo (Jr. FLL) is held at a local elementary school. In this competition, students in grades K-3 must build a lego model of the given year’s theme. For the 2018/2019 season, the theme MISSION MOONSM challenges students to design a moon base that accounts for the numerous challenges of lunar cohabitation such as food and water access, entertainment, and oxygen management.<br>
During the school year, LM-TSA runs a robotics camp for a few weeks at a local elementary school. The kids divide into groups where they compete against one another in a design challenge. Members of LM-TSA supervise the kids, helping them as needed, and run the final competition.
</div>
<div>
<h2>Fundraisers</h2>
LM-TSA hold a plethora of fundraisers throughout the year to raise money for the American Cancer Society and to reduce travel fees for our members. Some examples include working with local chains of restaurants, such as Chipotle and Panera, to get a cut of a given day’s profits, running car-washes, selling concessions at our school district’s STEM Night, and selling donuts to friends and family.
</div>`);

aboutmodal.addFooterBtn('See Engineering Programs', 'tingle-btn tingle-btn--primary', function() {
aboutmodal.close();
window.location.href="index.html#stem";
});
aboutmodal.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
aboutmodal.close();
});

var merchmodal = new tingle.modal({
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
merchmodal.setContent(`
<h1>Buy Merch</h1>
<div>

</div>`);

merchmodal.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
merchmodal.close();
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