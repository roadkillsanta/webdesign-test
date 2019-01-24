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


modal1.setContent(`

<h1>Computer Aided Drafting & Design</h1>

<br><h4>Computer Aided Drafting & Design (CADD) is a in introductory course that teaches students how create technical drawings and 3D models to design products and aide in the problem solving  process. Students are taught how to stimulate real life conditions on their CAD models to ensure maximum efficacy if that product were to be truly produced.
</h4>

<p>CADD is an introductory course in the application of technical communications, drawing, and computer aided design as part of the design and problem solving process. Students will apply Science, Technology, Engineering, and Mathematics skills, to a variety of projects covering fields of study such as Architecture, Product Design, Computer Modeling and Prototyping. Created to give students a hand-on, introductory experience in design, CADD I allows students to use a variety of tools and processes to study how their products will work under real world conditions. This course is highly encouraged for those students who enjoy hands-on problem solving and/or considering a degree in engineering, design, or related field.</p>




	`);

// add a button
modal1.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
// here goes some logic
modal1.close();
});

modal0.setContent(`

<h1>Foundations of Engineering & Design</h1>

<br><h4>Foundations of Engineering & Design teaches students to how to use engineering principles for the designing of real-life products and devices. It incorporates STEM skills to create a variety of projects such as a mechanical powered vehicle, robotic system, and Rube Goldberg device. Students also have access to CADD software to aide in rapid prototyping.
</h4>

<p>Foundations of Engineering & Design involves the application of knowledge, resources, materials, tools, and information in designing, producing, and using products, structures and systems. It incorporates students’ skills in Science, Technology, Engineering, and Mathematics. Students will be given the opportunity to design, build, and evaluate a variety of projects such as mechanical powered vehicle, robotic system, and a Rube Goldberg device. They will also be given the opportunity to explore and use electronics, pneumatics, computer numeric control, computer aided drafting, and rapid prototyping. This course is highly encouraged for those students who enjoy hands-on problem solving and/or considering a degree in engineering, design, or related field.
</p>




	`);

// add a button
modal0.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
// here goes some logic
modal0.close();
});





modal5.setContent(`

<h1>AP Physics C: Mechanics</h1>

<br><h4>AP Physics C: Mechanics is a calculus based course for students who want to further study science or science related disciplines. Main topics include kinematics, Newton’s Laws, friction forces, momentum, energy, rotational kinematics and dynamics, and simple harmonic motion. Students will perform experiments and complete formal lab reports in order to enhance written communication skills.</h4>

<p>AP Physics C: Mechanics is a calculus based course for students who have a high interest in science along with a strong mathematical background. Topics will include kinematics, Newton’s Laws, momentum, energy, rotational kinematics and dynamics, and simple harmonic motion. Students will be expected to perform experiments and write formal lab reports. These reports are intended to develop the students’ written communication skills. This class is designed for students who wish to be prepared for further study of science or science related disciplines. Completion of the course prepares students for the Advanced Placement Physics C – Mechanics Examination.</p>




	`);

// add a button
modal5.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
// here goes some logic
modal5.close();
});





modal4.setContent(`

<h1>AP Computer Science A</h1>

<br><h4>AP Computer Science A prepares students to take the AP exam by applying advanced concepts to a project-based curriculum. These concepts include, arrays and arraylists, string methods, interfaces, inheritance, algorithms, modularization and much more. 
</h4>

<p>AP Computer Science A prepares students to take the Advanced Placement examination in computer science. In the class, students learn object-oriented programming using Java. The topics include program design and definition, data types, algorithm development, modularization, methods, arrays, sorting and searching, classes, abstractions, and the AP Computer Science Case Study. Emphasis will be placed on problem solving, algorithm methodology, and the ability to debug and troubleshoot.</p>




	`);

// add a button
modal4.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
// here goes some logic
modal4.close();
});




modal3.setContent(`

<h1>Architectual Design</h1>

<br><h4>AP Physics Mechanics is a calculus based course for students who want to further study science or science related disciplines. Main topics include kinematics, Newton’s Laws, friction forces, momentum, energy, rotational kinematics and dynamics, and simple harmonic motion. Students will perform experiments and complete formal lab reports in order to enhance written communication skills.
</h4>
<p>AP Physics Mechanics is a calculus based course for students who have a high interest in science along with a strong mathematical background. Topics will include kinematics, Newton’s Laws, momentum, energy, rotational kinematics and dynamics, and simple harmonic motion. Students will be expected to perform experiments and write formal lab reports. These reports are intended to develop the students’ written communication skills. This class is designed for students who wish to be prepared for further study of science or science related disciplines. Completion of the course prepares students for the Advanced Placement Physics C – Mechanics Examination.</p>




	`);

// add a button
modal3.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
// here goes some logic
modal3.close();
});





modal2.setContent(`

<h1>Innovation & Invention - Robotics</h1>

<br><h4>Architectural Design is a beginner course that introduces topics such as interior design, frame construction, landscape architecture, green construction, and how they relate to each other. Students learn to interpret construction drawings of residential, commercial, and industrial structures and apply basic model building techniques. With these skills, students complete hands-on projects including the rendering of 2D and 3D drawings and the construction of a scale-model residential structure.</h4<
<p>Students are introduced to 2-D and 3-D communication and presentation techniques that are widely used in architecture. Application of basic model building and the use of drawing as a problem abstraction and diagramming technique are also included in instruction. Additionally, students learn to interpret construction drawings for residential, commercial and industrial structures. Major hands-on projects include the rendering of 3-D drawings and the construction of a scale-model residential structure.
</p>




	`);

// add a button
modal2.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
// here goes some logic
modal2.close();
});

