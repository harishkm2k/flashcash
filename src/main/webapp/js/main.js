function get(id) {
	return document.getElementById(id);
}

function showPage(which) {
	get('home').style.display = "none";
	get('downloads').style.display = "none";
	get('documentation').style.display = "none";
	get('examples').style.display = "none";
	
	if(which == 0)
		get('home').style.display = "block";
	else if(which == 1)	
		get('downloads').style.display = "block";
	else if(which == 2)
		get('documentation').style.display = "block";
	else
		get('examples').style.display = "block";
		
	get('content').scrollTop = 0;
}

function init() {
	dp.SyntaxHighlighter.ClipboardSwf = '/flash/clipboard.swf';
	dp.SyntaxHighlighter.HighlightAll('code');
	
	get("cloud1").style.display = "block";
	get("cloud2").style.display = "block";
	get("cloud3").style.display = "block";
	get("cloud4").style.display = "block";
	
	man = new jsAnimManager();
	
	man.registerPosition("cloud1");
	c1 = get("cloud1");
	c1.setPosition(-1200,170);

	man.registerPosition("cloud2");
	c2 = get("cloud2");
	c2.setPosition(1100,160);
	
	man.registerPosition("cloud3");
	c3 = get("cloud3");
	c3.setPosition(-1600,270);
	
	man.registerPosition("cloud4");
	c4 = get("cloud4");
	c4.setPosition(1700,300);
	
	cm1 = man.createAnimObject("cloud1");
	cm2 = man.createAnimObject("cloud2");
	cm3 = man.createAnimObject("cloud3");
	cm4 = man.createAnimObject("cloud4");
	
	cm1.add({property: Prop.positionSemicircle(true), to: new Pos(-198,170), duration: 5000});
	cm2.add({property: Prop.position, to: new Pos(-116,160), duration: 5000, ease: jsAnimEase.backout(0.6)});
	cm3.add({property: Prop.position, to: new Pos(-225,270), duration: 5000, ease: jsAnimEase.backout(0.6)});
	cm4.add({property: Prop.positionSemicircle(true), to: new Pos(-15,300), duration: 5000, ease: jsAnimEase.standard, onComplete: doRainbow});
	
	cm1.add({property: Prop.wait, duration: 10000});
	cm2.add({property: Prop.wait, duration: 10000});
	cm3.add({property: Prop.wait, duration: 10000});
	cm4.add({property: Prop.wait, duration: 10000});
	
	cm1.add({property: Prop.position, to: new Pos(-208,170), duration: 13000, loop:-1, ease: jsAnimEase.bounceSmooth});
	cm2.add({property: Prop.position, to: new Pos(-96,160), duration: 15000, loop:-1, ease: jsAnimEase.bounceSmooth});
	cm3.add({property: Prop.position, to: new Pos(-225,290), duration: 16000, loop:-1, ease: jsAnimEase.bounceSmooth});
	cm4.add({property: Prop.position, to: new Pos(-15,270), duration: 14000, loop:-1, ease: jsAnimEase.bounceSmooth});
}

function doRainbow() {
	man.registerPosition("ball");

	tball = get("ball");
	tball.style.width = "100px";
	tball.style.display = "block";
	tball.style.zIndex = 35;
	
	tball.setPosition(-205,85);
	
	bmp = man.createAnimObject("ball");
	bms = man.createAnimObject("ball");
	rb = man.createAnimObject("rainbowBackImg");
	rm = man.createAnimObject("rainbowMiddleImg");
	rf = man.createAnimObject("rainbowFrontImg");
	con = man.createAnimObject("content");
	
	//Duration : 5100
	bmp.add({property: Prop.positionCircle(true), to: new Pos(10,200), duration: 5000});
	bmp.add({property: Prop.position, to: new Pos(-325,265), duration:100});
	bms.add({property: Prop.dimension, to: new Dim(200,120), duration: 2500});
	bms.add({property: Prop.wait, duration:500});
	bms.add({property: Prop.dimension, to: new Dim(100,60), duration:2000});
	
	rb.add({property: Prop.wait, duration: 600});
	rb.add({property: Prop.width, to: 282, duration: 2390});
	
	rm.add({property: Prop.wait, duration: 5800});
	rm.add({property: Prop.height, to: 86, duration: 1000, onComplete: function() {tball.style.zIndex=80}});
	
	rf.add({property: Prop.wait, duration: 7100});
	rf.add({property: Prop.width, to: 260, duration: 680});
	rf.add({property: Prop.dimension, to: new Dim(400,243), duration: 1140});
	rf.add({property: Prop.dimension, to: new Dim(500,320), duration: 1550});
	rf.add({property: Prop.dimension, to: new Dim(519,383), duration: 100});
	
	//Duration : 5000
	bmp.add({property: Prop.positionSemicircle(false), to: new Pos(-425,365), duration:2000});
	bmp.add({property: Prop.position, to: new Pos(-180,500), duration:2000});
	bmp.add({property: Prop.position, to: new Pos(-70,595), duration:1000});
	bms.add({property: Prop.dimension, to: new Dim(340, 203), duration: 5000});
	
	bmp.add({property: Prop.wait, duration: 200});
	bmp.add({property: Prop.position, to: new Pos(-70,1605), duration:2000, ease: jsAnimEase.parabolicPos, onComplete: function() {get("ball").style.display="none"}});
	
	con.add({property: Prop.wait, duration: 11000});
	con.add({property: Prop.top, to: 80, duration: 2000, ease: jsAnimEase.backout(0.6)});
}