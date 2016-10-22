$(document).ready(function() {
	console.log('Hello World');
	var navbar = $('#navbar-fixed');
	var scroll_pos = 0;
	var navBio =  $('#navBio'),
	    navExp =  $('#navExperience'),
	    profile = $('#profile');

	$(document).scroll(function(){
		scroll_pos = $(this).scrollTop();
		if(scroll_pos > 200){
			//navbar.css("background-color", "#6d2529");
			navbar.addClass('theme--white');
		}
		else {
			//navbar.css("background-color", "transparent");
			navbar.removeClass('theme--white');
			navbar.css({
				'transition':'.5s all ease-out'
			});
		}
	});

	navBio.on('click', function() {
		$('body').animate({ scrollTop: 925}, 'slow');
	});

	navExp.on('click', function() {
		$('body').animate({ scrollTop: 1470}, 'slow');
	});

	$('#Container').mixItUp();

	profile.on('click', function() {
		profile.attr('src', 'http://1.bp.blogspot.com/-kJTYjb0BsOs/VbCRdKLt1ZI/AAAAAAAAEBQ/2mB9vOflAD0/s1600/Guti%2Ben%2Bel%2BChiringuito%2Bde%2BChupitos%2Bde%2BJugones.jpg')
	});

	new WOW().init();
});




































/*'use strict';

var arrowDown    = $('#arrow-down');
var navbar       = $('.navbar-default');
var navHome      = $('.navHome');
var navAbout     = $('.navAbout');
var navResume    = $('.navResume');
var navPortfolio = $('.navPortfolio');
var navContact   = $('.navContact');
var navBlog      = $('.navBlog'); 

$(document).on('ready', function(){
	var scroll_pos = 0;
	$(document).scroll(function(){
		scroll_pos = $(this).scrollTop();
		if(scroll_pos > 800){
			navbar.addClass('navbar-fixed-top');
		}
		else {
			navbar.removeClass('navbar-fixed-top');
		}
	});

	arrowDown.on('click', function() {
		$('body').animate({ scrollTop: 800}, 'slow');
	});

	navHome.on('click', function() {
		$('body').animate({ scrollTop: 800}, 'slow');
	});

	navAbout.on('click', function() {
		$('body').animate({ scrollTop: 900}, 'slow');
	});

	navResume.on('click', function() {
		$('body').animate({ scrollTop: 2000}, 'slow');
	});

	navContact.on('click', function() {
		$('body').animate({ scrollTop: 8400}, 'slow');
	});

	navPortfolio.on('click', function() {
		$('body').animate({ scrollTop: 4600}, 'slow');
	});

  	$(function() {
  		$(".container").mixItUp();
	})
});*/