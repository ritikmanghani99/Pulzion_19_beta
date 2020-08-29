var UI = (function() {

	var color = {
		teal2: '#00ffc3',
		teal: '#59b29e',
		darK: '#0c0614',
		red: '#f63b4c',
		light: '#afe3d7'
	};

	var ease = {
		power: Power4.easeOut,
		elastic: Elastic.easeOut.config(1, 1),
		none: Power0.easeNone,
		rough: RoughEase.ease.config({
			points: 100,
			strength: 4,
			clamp: true,
			randomize: true,
		}),
		back: Back.easeOut.config(1)
	};

	var $window = $(window);
	var header = $('#header');
	var uiHud = $('.ui-hud');
	var hudBox = $('.hud-box');
	var hudBoxBorder = hudBox.find('.hud-box-border');
	var h1Title = header.find('h1.title');
	var h2Title = $('#essay .header-title .title');
	var paragraph = $('#essay p');
	var borderTB = uiHud.find('.border.b, .border.t');
	var borderLR = hudBox.find('.border.l, .border.r');
	var tics = hudBox.find('.tics');
	var tic = tics.find('.tic');
	var borderV = uiHud.find('.border-v');
	var borderH = uiHud.find('.border-h');
	var borderEnds = $('.cap, .x-hair, .batt');
	var graph = hudBox.find('.ui-graph');
	var logoBox = uiHud.find('.ui-logo');
	var logo = logoBox.find('.logo-mark');
	var logoRing = logoBox.find('.ring');
	var logoCorners = logoBox.find('.corners');
	var borderX = uiHud.find('.border-x');
	var borderV2 = uiHud.find('.ui-border-v2');
	var circles = uiHud.find('.circle');
	var textBoxH5 = uiHud.find('.ui-text-box').find('h5');
	var textBoxP = uiHud.find('.ui-text-box').find('.text');
	var button = $('.ui-button');
	var figure = $('.wrap figure');

	function animate() {

		var introTL = new TimelineMax();
		var h1Letters = new SplitText(h1Title, {
			type: 'words chars',
			wordsClass: 'word word++'
		});
		var h1Chars = h1Letters.chars;
		// var audioText 	= new Audio('assets/sound/digital-text-02.mp4');
		// audioText.volume = 0.3;

		var borderDur = 6;

		introTL
			.fromTo(borderV, borderDur, {
				scaleY: 0,
			}, {
				ease: ease.elastic,
				scaleY: 1,
			}, 'borders')
			.fromTo(borderH, borderDur, {
				scaleX: 0,
			}, {
				ease: ease.elastic,
				scaleX: 1,
			}, 'borders')
			.fromTo(borderEnds, borderDur, {
				opacity: 0,
			}, {
				opacity: 1,
				ease: ease.rough,
			}, 'borders')
			.fromTo(borderX, borderDur, {
				scale: 0,
			}, {
				scale: 1,
				ease: ease.elastic,
			}, 'borders')
			.fromTo(borderTB, borderDur, {
				scaleX: 0,
			}, {
				scaleX: 1,
				ease: ease.elastic,
			}, 'borders')
			.fromTo(borderLR, borderDur, {
				scaleY: 0,
			}, {
				scaleY: 1,
				ease: ease.elastic,
			}, 'borders')
			.fromTo(borderV2, borderDur, {
				y: '-100%',
			}, {
				y: '0%',
				ease: ease.elastic,
			}, 'borders')
			.from(tic, borderDur / 2, {
				ease: ease.elastic,
				scaleY: 0
			}, 'borders+=0.5')
			.staggerFromTo(circles, borderDur, {
				autoAlpha: 0,
				scale: 0,
				y: '-50%'
			}, {
				scale: 1,
				ease: ease.elastic,
				autoAlpha: 1,
				repeat: -1,
				repeatDelay: 30,
				y: '0%'
			}, 0.1, 'borders+=0.5')
			.fromTo(logoBox, 1, {
				scale: 0
			}, {
				scale: 1,
				ease: ease.elastic
			}, 'borders')
			.fromTo(logoRing, 2.5, {
				scale: 0,
				autoAlpha: 0,
			}, {
				delay: 2.5,
				scale: 1,
				autoAlpha: 1,
				rotation: 360,
				ease: ease.elastic
			}, 'borders')
			.fromTo(logoCorners, 2.5, {
				scale: 2,
				autoAlpha: 0
			}, {
				scale: 1,
				delay: 2.5,
				autoAlpha: 1,
				ease: ease.elastic
			}, 'borders')
			.fromTo(logo, 1, {
				autoAlpha: 0,
				fill: '#fff',
			}, {
				autoAlpha: 1,
				fill: '#00ffc3',
				ease: ease.rough,
				repeat: -1,
				repeatDelay: 30,
			}, 'borders+=1')
			//- Text Box
			.add('textBox', 5)
			.fromTo(textBoxP, 5, {
				height: 0
			}, {
				height: 140,
				repeat: -1,
				repeatDelay: 3,
				yoyo: true,
				ease: ease.none,
			}, 'textBox')
			.fromTo(textBoxH5, 1, {
				visibility: 'hidden',
			}, {
				visibility: 'visible',
				ease: ease.none,
			}, 'textBox')
			.to(textBoxH5, 1, {
				text: 'Status: Ready',
				repeat: -1,
				repeatDelay: 3,
				yoyo: true,
				ease: ease.none,
			}, 'textBox')

		//- HUD Box
		.add('hudBox', 0)
			.fromTo(hudBoxBorder, borderDur / 2, {
				scale: 0
			}, {
				scale: 1,
				ease: ease.elastic
			}, 'hudBox')
			.fromTo(button, 1, {
				autoAlpha: 0,
				scale: 0
			}, {
				ease: ease.elastic,
				autoAlpha: 1,
				scale: 1,
			}, 'hudBox+=1.2')
			.fromTo(graph, 1, {
				scale: 0,
				autoAlpha: 0
			}, {
				ease: ease.elastic,
				scale: 1,
				autoAlpha: 1,
			}, 'hudBox+=0')
			.staggerFromTo(h1Chars, 1, {
				visibility: 'hidden',
				y: Math.random() * 10,
				background: 'rgba(0, 255, 195, 0.3)',
				ease: ease.power,
			}, {
				visibility: 'visible',
				background: 'none',
				onStart: function() {
					// audioText.play();
				},
				ease: ease.power,
			}, 0.05, 'hudBox+=1')
			.staggerFromTo('h1.title .word2', 3, {
				color: color.light,
				// background  : 'rgba(0, 255, 195, 0.3)',
				ease: ease.rough
			}, {
				color: color.teal2,
				background: 'rgba(0, 255, 195, 0)',
				ease: ease.rough
			}, 0.5, 'hudBox+=2');
	}

	//-----------------------------------------------------------

	return {
		animate: animate
	};

}());

$(window).on('load', function() {
	$('body').css('opacity', 1);
	UI.animate();
})





//Text Animation
var paragraph = document.getElementsByTagName('p')[0];

function textEffect(animationName) {
  var text = paragraph.innerHTML,
		chars = text.length,
		newText = '',
		animation = animationName,
		char,
		i;

	for (i = 0; i < chars; i += 1) {
		newText += '<i>' + text.charAt(i) + '</i>';
	}

	paragraph.innerHTML = newText;

	var wrappedChars = document.getElementsByTagName('i'),
		wrappedCharsLen = wrappedChars.length,
		j = 0;

	function addEffect () {
		setTimeout(function () {
			wrappedChars[j].className = animation;
			j += 1;
			if (j < wrappedCharsLen) {
				addEffect();
			}
		}, 100)
	}

	addEffect();
};

textEffect('fly-in-out');

//Space
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var DeepSpace = function(size, number, speed)
{
  this.size = size;
	this.number = number;
	this.speed = speed;
	this.objects = new Array();

	this.initialize = function()
	{
		this.creationImage();
		this.drawCircle();
		this.animate();
	}

	this.creationImage = function()
	{
		for(var i = 0; i < this.number; i++)
		{
			var star = {
				'x' : Math.random()*2000,
				'y' : Math.random()*900,
				'radius' : Math.random()*this.size+1,
			}
			this.objects.push(star);
		}
	}

	this.drawCircle = function(x, y, radius)
	{
		with(ctx)
		{
			beginPath();
			arc(x, y, radius, 0, 2*Math.PI);
			fillStyle = 'white';
			fill();
			stroke();
			closePath();
		}
	}

	this.animate = function()
	{
		for(var j in this.objects)
		{
			var x = this.objects[j].x--;
			var y = this.objects[j].y;
			var radius = this.objects[j].radius;
      
      if(x < -2) this.objects[j].x = 2000;

			this.drawCircle(x, y, radius);
      
		}
	}
  
  setInterval(this.animate.bind(this), this.speed);
}

var space = new DeepSpace(0.1, 1000, 2);
space.initialize();
var space = new DeepSpace(.7, 1000, 3);
space.initialize();
var space = new DeepSpace(1.5, 10, 1);
space.initialize();
particlesJS("particles-js", {"particles":{"number":{"value":411,"density":{"enable":true,"value_area":570.264765784114}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;