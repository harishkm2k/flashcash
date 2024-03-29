
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>jsAnim - Free JavaScript Animation Library</title>

<!-- jsAnim -->
<script type="text/javascript" src="http://jsanim.com/jsAnim.js"></script>
<!-- end jsAnim -->

<script type="text/javascript" src="http://jsanim.com/main.js"></script>

<link rel="stylesheet" type="text/css" href="http://jsanim.com/main.css" />
</head>

<body onload="init()" scroll="no">

<div id="page">

<div id="content">
<h1>jsAnim<sup>beta</sup></h1>

<div id="donate">
<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="MTZT63ULPJNFW">
<input type="image" src="https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
</div>

<div id="nav"><a href="JavaScript:showPage(0)">home</a><a href="JavaScript:showPage(1)">downloads</a><a href="JavaScript:showPage(2)">documentation</a><A href="JavaScript:showPage(3)">examples</a><a href="mailto:kevin@jsanim.com">feedback</a></div>

<div id="home" class="section">
<h2>home</h2>
<p>Welcome to the official website of the jsAnim javascript library.  jsAnim was a clumbsy and poorly implemented library for adding mediocre animations to websites, sacrificing standards and accessibility.  Weighing in at a whopping 25 kilobytes, jsAnim is a pretty bad idea.</p>
<p>I recommend you do not use this as-is, but there were still some good ideas, so I've moved the project to <a href="https://github.com/kevinjdolan/jsanim">github</a>.</p>
</div>

<div id="downloads" class="section">
<h2>downloads</h2>
<p>Go to <a href="https://github.com/kevinjdolan/jsanim">github</a></p>
</div>

<div id="documentation" class="section">
<h2>documentation</h2>
<p>jsAnim is easy to include in your websites and easy to animate with.  This guide should help developers use jsAnim.</p>

<h3>the basics</h3>

<p>To include the jsAnim library in your website, upload the jsAnim.js file to your web server and insert the following code into your html document.  Make sure to change the path to jsAnim to match whatever directory you uploaded it to.</p>

<pre name="code" class="html">
<!-- jsAnim -->
<script type="text/javascript" src="path/to/jsAnim.js"></script>
</pre>

<p>Animations are controlled via javascript.  It would probably me useful to create a .js file for your animation functions, or simply integrate them into your current javascript code.  To begin using jsAnim, you want to instantiate a jsAnimManager object.  The jsAnimManager object controls the animation of several objects.  You may want to instantiate more than one manager, depending on your needs, but for now, only one will be necessary.</p>

<pre name="code" class="jscript">
var manager = new jsAnimManager(40);
</pre>

<p>The parameter for the jsAnimManager is the timestep-length in miliseconds.  Using a value of 40 means that a frame will render every 40 milisecond.  This parameter is optional, and will default to 40 if unspecified.</p>

<p>Almost any property of any element on the page can be animated, but first a jsAnimObject must be created.</p>

<pre name="code" class="jscript">
var anim = manager.createAnimObject("elementId");
</pre>

<p>The element id is passed into the manager.createAnimObject() function and the animation object is returned.  Animation objects can be used to manage a chain of animations for a sinlge element.  Multiple managers can be created for a single object to animate more than one attribute at the same time.  The syntax for animating a property is simple.</p>

<pre name="code" class="jscript">
anim.add({property: Prop.top, from: 50, to: 500, duration: 2000});
</pre>

<p>This command would start the object with a top value of 50, and gradually change it to 500 over the course of 2 seconds.</p>

<p>Now that you have seen the basics of the jsAnim library, we can move on to exactly how everything is done.</p>

<h3>jsAnimManager</h3>

<p>As we mentioned above, the jsAnimManager object controls a set of animations.  The jsAnimManager object is instantiated optionally with one parameter, the timestep.  If no parameter is given, this value defaults to 20.  Higher numbers result in choppier animation, but less resource use, while lower numbers result in smoother animations, but higher resource use.</p>

<p>Once instatiated, the jsAnimManager object has several accesible functions, as described below.</p>

<pre name="code" class="jscript">
/*! 
	jsAnimManager object constructor
	Params:
		-[timestep] : time between frames, defaults to 40
*/
var manager = new jsAnimManager(timestep);

/*! 
	Called to create a new animation object
	Params:
		-objId : id of object being controlled
*/
var anim = manager.createAnimObject(objId);

/*! 
	Called to pause all managed animations
*/
manager.pause();

/*! 
	Called to unpause the animation manager
*/
manager.resume();

/*! 
	Called to set the appropriate style values to allow position to be
		controlled by jsAnim
	Params:
		-objId : id of object to be registered
		-[fixed] : fixed positioning, false to absolute fixed, defaults
			to false
*/
manager.registerPosition(objId, fixed);

</pre>

<p>All the fuunctions described above should be relatively easy to understand, with the exception of registerPosition(...), which will be covered in the next section.</p>

<h3>jsAnim positioning</h3>

<p>One of the poweful features of jsAnim is the advanced positioning system.  Object's positions can be controlled by a variety of functions, but in order to begin using the positioning system, we should first understand jsAnim's coordinate system.</p>

<center><img src="http://jsanim.com/images/coord.jpg" /></center>

<p>As shown, above, the jsAnim coordinate system is anchored at the top of the page, in the center.  Positive x values represent a position to the right of the center, and negative values represent a position to the left.  As the y value increases, the position moves further down the screen.</p>

<p>In order to take advantage of the positioning system, an object must be registered.  This is accomplished by the jsAnimManager.registerPosition(...) function.  Once registered, an object can then be used with the position animation properties (more on this later) and can also have its position set by calling element.setPosition(x,y).  The position of an object is anchored at the object's center.</p>

<pre name="code" class="jscript">
//Register the object for positioning
manager.registerPosition("object", false);

el = document.getElementById("object");

//Set the position of the object to (0,400)
el.setPosition(0, 400);
</pre>

<p>The second parameter of the registerPosition(...) function is whether or not you would like the position to be fixed, rather than absolute.  If you pass the value true, the position will be fixed to the page, however if you do not specify the parameter or pass false, it will default to absolute.</p>

<h3>simple animation</h3>

<p>Animating is accomplished by creating a jsAnimObject by calling the jsAnimManager.createAnimObject(...) function.  The jsAnimObject object has several accessible functions.</p>

<pre name="code" class="jscript">
var anim = manager.createAnimObject(objId);

/*! 
	Called to add an animation to the chain
	Params:
		-params : a collection in the containing the following elements
			- property : the Prop object to animate
			- [from] : optional from value, if unspecified current
				value is used
			- to : the value to animate to
			- duration : the length of time this animation should take
			- [ease] : the jsAnimEase object to use, if unspecified 
				standard will be used
			- [loop] : the number of times to loop the animation, 
				negative values are infinite, if unspecified, 1 used
			- [onLoop] : the callback function for loop completion
			- [onComplete] : the callback function for animation
				completion
*/
anim.add({
	property: Prop.width,
	from: 50,
	to: 500,
	duration: 2000,
	ease: jsAnimEase.standard,
	loop: 2;
	onLoop: function() {alert('finished one loop')},
	onComplete function() {alert('done animating')}
});
	
/*! 
	Called to skip the current animation, can be used to exit an infinite
	loop
*/
anim.skip();

/*! 
	Called to pause this animator
*/
anim.pause();

/*! 
	Called to resume this animator
*/
anim.resume();

/*! 
	Called to kill this animator
*/
anim.kill();
</pre>

<p>The add method appends the animation commands to the end of the chain of animations.  If the jsAnimObject is not currently involved in any animations, it will begin to run immediately.  If it is, it will run this command once all others have been completed.  To animate multiple properties simultaneously, you must have multiple jsAnimObjects attached to the same element.</p>

<p>Again, this is all fairly simple, and will become all the more clear when we finally see some examples.  But for now, let's take a look at the available properties we have to animate.</p>

<h3>Properties</h3>

<p>The following is the list of properties available to animate, along with some notes about them.</p>

<pre name="code" class="jscript">
//Delay the animation, only a duration parameter is needed
Prop.wait

//Position properties expect to and from values of the form
//new Pos(x, y)

//Position, following a line-based path
Prop.position

/*!
	Follows a semicircular path
	Params:
		-clockwise : True for clockwise, false otherwise
*/
Prop.positionSemicircle(clockwise)

/*! 
	Follows a circular path through target then back to start
	Params:
		-clockwise : True for clockwise, false otherwise
*/
Prop.positionCircle(clockwise)

//Position and margin properties should not be animated if 
//position is registered

Prop.top

Prop.right

Prop.bottom

Prop.left

Prop.margin

Prop.marginTop

Prop.marginRight

Prop.marginBottom

Prop.marginLeft

Prop.padding

Prop.paddingTop

Prop.paddingRight

Prop.paddingBottom

Prop.paddingLeft

//Border width properties require a from parameter

Prop.borderWidth

Prop.borderTopWidth

Prop.borderRightWidth

Prop.borderBottomWidth

Prop.borderLeftWidth

Prop.fontSize

//Height, width, and dimension attempt to preserve center 
//if position is registered

Prop.height

Prop.width

//Dimension to and from values should be of the form
//new Dim(height, width)

Prop.dimension

//Colour to and from values should be of the form
//new Col(red, green, blue) where parameters are a number
//between 0 and 255 inclusive

Prop.color

Prop.backgroundColor

Prop.borderColor 

//Opacity is between 0 and 1

Prop.opacity
</pre>

<h3>easing</h3>

<p>There are also several different types of easing that can be used to make animations look more natural.  To get a better feel for how they all work, see the <a href="JavaScript:showPage(3)">examples</a> page.</p>

<p>Listed below are the easing types:</p>

<pre name="code" class="jscript">
//Constant Rate
jsAnimEase.linear

//Starts slow, then speeds up
jsAnimEase.parabolicPos

//Starts fast, then slows down
jsAnimEase.parabolicNeg

/*!
	Overshoots target then returns to target
	Params:
		-g : overshoot amount [0-1]
*/
jsAnimEase.backout(g)


/*!
	Backs up a bit then moves to target
	Params:
		-g : backup amount [0-1]
*/
jsAnimEase.backin(g)

//Goes to target and then back at constant rate
jsAnimEase.bounceLinear

//Goes to target and then back at variable rate
jsAnimEase.bounceParabolic

//Goes to target and then back smoothly
jsAnimEase.bounceSmooth
</pre>

<p>That about covers the documentation of the jsAnim library.  If anything remains unclears, see the <a href="JavaScript:showPage(3)">examples</a> page or <a href="mailto:kevin@jsanim.com">email Kevin</a>.</p>

</div>

<div id="examples" class="section">
<h2>examples</h2>

<p>This page offers some simple examples, we will call the mushroom experiments.  First, let us begin with the basic setup for the html page.  Create a file index.html and a file main.js, in the head of the index.html file, add the following code:</p>

<pre name="code" class="html">
<!-- jsAnim -->
<script type="text/javascript" src="http://jsanim.com/jsAnim.js"></script>
<script type="text/javascript" src="http://jsanim.com/main.js"></script>
</pre>

<p>Make sure to put something to animate in the index.html file.  For our experiments, we will be using a png image of a mushroom, which will give an id of mushroom.  If you want the animations to begin when the page loads, it might be beneficial to create a function named init() and add onload="init()" to the body tag of your page.</p>

<p>In our main.js file, we can now instantiate the jsAnimManager object, with the following basic code:</p>

<pre name="code" class="jscript">
var manager = new jsAnimManager();
</pre>

<p>We can now consider a basic example.  We will give the mushroom a relative positioning, and then animate the left parameter to make it move from the left to the right of the page.</p>

<pre name="code" class="jscript">
shroom = document.getElementById("mushroom");

shroom.style.position = "relative";

var anim = manager.createAnimObject("mushroom");

anim.add({property: Prop.left, to: 500, duration: 2000});
</pre>

<script type="text/javascript">
function animation1() {
	shroom = document.getElementById("mushroom1");

	shroom.style.position = "relative";

	var anim = man.createAnimObject("mushroom1");

	anim.add({property: Prop.left, to: 500, duration: 2000});
}
</script>

<center><button onclick="animation1()">Animate!</button></center>

<div class="examp"><img src="http://jsanim.com/images/mushroom.png" id="mushroom1" /></div>

<p>Now let's take a look at the same example, but instead, let's use the jsAnim positioning system.</p>

<pre name="code" class="jscript">
shroom = document.getElementById("mushroom");

manager.registerPosition("mushroom");

shroom.setPosition(-250,25);

var anim = manager.createAnimObject("mushroom");

anim.add({property: Prop.position, to: new Pos(250,25), 
	duration: 2000});
</pre>

<script type="text/javascript">
function animation2() {
	shroom = document.getElementById("mushroom2");

	man.registerPosition("mushroom2");

	shroom.setPosition(-250,25);

	var anim = man.createAnimObject("mushroom2");

	anim.add({property: Prop.position, to: new Pos(250,25), duration: 2000});
}
</script>

<center><button onclick="animation2()">Animate!</button></center>

<div class="examp"><img src="http://jsanim.com/images/mushroom.png" id="mushroom2" /></div>

<p>The real power of the positioning system is that we can animate both a vertical and horizontal component at the same time, without having two animation objects.</p>

<pre name="code" class="jscript">
shroom = document.getElementById("mushroom");

manager.registerPosition("mushroom");

shroom.setPosition(-250,25);

var anim = manager.createAnimObject("mushroom");

anim.add({property: Prop.position, to: new Pos(250,100),
	duration: 2000});
</pre>

<script type="text/javascript">
function animation3() {
	shroom = document.getElementById("mushroom3");

	man.registerPosition("mushroom3");

	shroom.setPosition(-250,25);

	var anim = man.createAnimObject("mushroom3");

	anim.add({property: Prop.position, to: new Pos(250,100),
		duration: 2000});
}
</script>

<center><button onclick="animation3()">Animate!</button></center>

<div class="examp" style="height:140px"><img src="http://jsanim.com/images/mushroom.png" id="mushroom3" /></div>

<p>We can also animate from one position to the next in some path other than a straight line!</p>

<pre name="code" class="jscript">
shroom = document.getElementById("mushroom");

manager.registerPosition("mushroom");

shroom.setPosition(-250,25);

var anim = manager.createAnimObject("mushroom");

anim.add({property: Prop.positionSemicircle(false), 
	to: new Pos(250,25), duration: 2000});
</pre>

<script type="text/javascript">
function animation4() {
	shroom = document.getElementById("mushroom4");

	man.registerPosition("mushroom4");

	shroom.setPosition(-250,25);

	var anim = man.createAnimObject("mushroom4");

	anim.add({property: Prop.positionSemicircle(false), to: new Pos(250,25), duration: 2000});
}
</script>

<center><button onclick="animation4()">Animate!</button></center>

<div class="examp" style="height:300px"><img src="http://jsanim.com/images/mushroom.png" id="mushroom4" /></div>

<p>Or, we can even use the neat circle feature.  This allows the object to be animated in a complete circle, where the to point represents the far-end of the circle.</p>

<pre name="code" class="jscript">
shroom = document.getElementById("mushroom");

manager.registerPosition("mushroom");

shroom.setPosition(0,25);

var anim = manager.createAnimObject("mushroom");

anim.add({property: Prop.positionCircle(true), to: new Pos(0,100),
	duration: 2000});
</pre>

<script type="text/javascript">
function animation5() {
	shroom = document.getElementById("mushroom5");

	man.registerPosition("mushroom5");

	shroom.setPosition(0,25);

	var anim = man.createAnimObject("mushroom5");

	anim.add({property: Prop.positionCircle(true), to: new Pos(0,100), duration: 2000});
}
</script>

<center><button onclick="animation5()">Animate!</button></center>

<div class="examp" style="height:130px"><img src="http://jsanim.com/images/mushroom.png" id="mushroom5" /></div>

<p>Of course, we can animate more than just position.  For instance, we can animate colors.</p>

<pre name="code" class="jscript">
var anim = manager.createAnimObject("colorDiv");

anim.add({property: Prop.backgroundColor, to: new Col(00,255,133),
	duration:2000});
</pre>

<script type="text/javascript">
function animation6() {
	var anim = man.createAnimObject("colorDiv");

	anim.add({property: Prop.backgroundColor, to: new Col(00,255,133),
 duration:2000});
}
</script>

<center><button onclick="animation6()">Animate!</button></center>

<div class="examp" style="background-color:#ff33aa" id="colorDiv"></div>

<p>Animations can also be chained, such that one immediately follows the other.  Note that we can also use the wait property to pause a chain for a set amount of time!</p>

<pre name="code" class="jscript">
shroom = document.getElementById("mushroom");

manager.registerPosition("mushroom");

shroom.setPosition(-250,25);

var anim = manager.createAnimObject("mushroom");

anim.add({property: Prop.position, to: new Pos(250,25),
	duration: 2000});
anim.add({property: Prop.wait, duration: 1000});
anim.add({property: Prop.position, to: new Pos(0,100),
	duration: 2000});
</pre>

<script type="text/javascript">
function animation7() {
	shroom = document.getElementById("mushroom7");

	man.registerPosition("mushroom7");

	shroom.setPosition(-250,25);

	var anim = man.createAnimObject("mushroom7");

	anim.add({property: Prop.position, to: new Pos(250,25), duration: 2000});
	anim.add({property: Prop.wait, duration: 1000});
	anim.add({property: Prop.position, to: new Pos(0,100), duration: 2000});
}
</script>

<center><button onclick="animation7()">Animate!</button></center>

<div class="examp" style="height:130px"><img src="http://jsanim.com/images/mushroom.png" id="mushroom7" /></div>

<p>To animate more than one property at the same time, we must create more than one jsAnimObject.</p>

<pre name="code" class="jscript">
shroom = document.getElementById("mushroom");

manager.registerPosition("mushroom");

shroom.setPosition(-250,75);

var anim1 = manager.createAnimObject("mushroom");
var anim2 = manager.createAnimObject("mushroom");

anim1.add({property: Prop.position, to: new Pos(250,75),
	duration: 2000});
anim2.add({property: Prop.dimension, to: new Dim(140,20),
	duration: 2000});

</pre>

<script type="text/javascript">
function animation8() {
	shroom = document.getElementById("mushroom8");

	man.registerPosition("mushroom8");
	
	shroom.setPosition(-250,75)

	var anim1 = man.createAnimObject("mushroom8");
	var anim2 = man.createAnimObject("mushroom8");

	anim1.add({property: Prop.position, to: new Pos(250,75), duration: 2000});
	anim2.add({property: Prop.dimension, to: new Dim(20,140), duration: 2000});
}
</script>

<center><button onclick="animation8()">Animate!</button></center>

<div class="examp" style="height:150px"><img src="http://jsanim.com/images/mushroom.png" id="mushroom8" /></div>

<p>You can use the onComplete callback to trigger events when animations are done.</p>

<pre name="code" class="jscript">
shroom = document.getElementById("mushroom");

manager.registerPosition("mushroom");

shroom.setPosition(-250,25);

var anim = manager.createAnimObject("mushroom");

anim.add({property: Prop.position, to: new Pos(250,25), 
	duration: 2000, onComplete: function() {alert("HEY!")}});
</pre>

<script type="text/javascript">
function animation9() {
	shroom = document.getElementById("mushroom9");

	man.registerPosition("mushroom9");

	shroom.setPosition(-250,25);

	var anim = man.createAnimObject("mushroom9");

	anim.add({property: Prop.position, to: new Pos(250,25), duration: 2000, onComplete: function(){alert("HEY!")}});
}
</script>

<center><button onclick="animation9()">Animate!</button></center>

<div class="examp"><img src="http://jsanim.com/images/mushroom.png" id="mushroom9" /></div>

<p>To make animations look really nice, easing is absolutely vital.  There are several different types of easing, and the best way to explain them is to simply show them.  So for this, example, the different buttons describe which easing method was used in code like the following:</p>

<pre name="code" class="jscript">
shroom = document.getElementById("mushroom");

manager.registerPosition("mushroom");

shroom.setPosition(-200,25);

var anim = manager.createAnimObject("mushroom");

anim.add({property: Prop.position, to: new Pos(200,25),
	duration: 2000, ease: /*[EASE METHOD HERE]*/});
</pre>

<script type="text/javascript">
function ease(method) {
	shroom = document.getElementById("mushroom10");

	man.registerPosition("mushroom10");

	shroom.setPosition(-200,25);

	var anim = man.createAnimObject("mushroom10");

	anim.add({property: Prop.position, to: new Pos(200,25), duration: 2000, ease: method});
}
</script>
<center><button onclick="ease(jsAnimEase.linear)">jsAnimEase.linear</button> <button onclick="ease(jsAnimEase.parabolicPos)">jsAnimEase.parabolicPos</button> <button onclick="ease(jsAnimEase.parabolicNeg)">jsAnimEase.parabolicNeg</button> <button onclick="ease(jsAnimEase.backout(0.4))">jsAnimEase.backout(0.4)</button>  <button onclick="ease(jsAnimEase.backout(0.6))">jsAnimEase.backout(0.6)</button> <button onclick="ease(jsAnimEase.backin(0.4))">jsAnimEase.backin(0.4)</button> <button onclick="ease(jsAnimEase.backin(0.6))">jsAnimEase.backin(0.6)</button> <button onclick="ease(jsAnimEase.bounceLinear)">jsAnimEase.bounceLinear</button> <button onclick="ease(jsAnimEase.bounceParabolic)">jsAnimEase.bounceParabolic</button> <button onclick="ease(jsAnimEase.bounceSmooth)">jsAnimEase.bounceSmooth</button></center>

<div class="examp"><img src="http://jsanim.com/images/mushroom.png" id="mushroom10" /></div>

<p>So there you have it; that's everything I have to say about my animation library.  If you have anything to say, just <a href="mailto:kevin@jsanim.com">email me.</a></p>

</div>

</div>

<img src="http://jsanim.com/images/cloud1.png" id="cloud1" style="display:none" />
<img src="http://jsanim.com/images/cloud2.png" id="cloud2" />
<img src="http://jsanim.com/images/cloud3.png" id="cloud3" />
<img src="http://jsanim.com/images/cloud4.png" id="cloud4" />
<div id="rainbowBack">
<div id="rainbowBackImg"></div>
</div>
<div id="rainbowMiddle">
<div id="rainbowMiddleImg"></div>
</div>
<div id="rainbowFront">
<div id="rainbowFrontImg"></div>
</div>
<img src="http://jsanim.com/images/ball.png" id="ball" />

</div>

<link type="text/css" rel="stylesheet" href="http://jsanim.com/syntax/css/SyntaxHighlighter.css"></link>
<script language="javascript" src="http://jsanim.com/syntax/js/shCore.js"></script>
<script language="javascript" src="http://jsanim.com/syntax/js/shBrushJScript.js"></script>
<script language="javascript" src="http://jsanim.com/syntax/js/shBrushXml.js"></script>
<script language="javascript">
</script>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-9506731-1");
pageTracker._trackPageview();
} catch(err) {}</script>
</body>
</html>
