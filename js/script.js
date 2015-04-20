$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: false,
        anchors:['intro','paso1','paso2','paso3','paso4','paso5','paso6','paso7','paso8','paso9','paso10','paso11','paso12','paso13','paso14','paso15','paso16','paso17','paso18','paso19','paso20','creditos'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['intro','paso1','paso2','paso3','paso4','paso5','paso6','paso7','paso8','paso9','paso10','paso11','paso12','paso13','paso14','paso15','paso16','paso17','paso18','paso19','paso20','creditos'],
        showActiveTooltips: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        sectionsColor : ['#ABCDEF','#ccc', '#fff','#ccc', '#fff','#ccc', '#fff','#ccc', '#fff','#ccc', '#fff','#ccc', '#fff','#ccc', '#fff','#ccc', '#fff','#ccc', '#fff','#ccc', '#fff','#ABCDEF'],
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '#header, .footer',
        responsive: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
});