/*global require*/
'use strict';
require.config({
    paths: {
        jquery: 'jquery.min',
        scrollto: 'jquery.scrollTo.min',
        magnificPopup: 'jquery.magnific-popup.min',
        jscookie: 'js.cookie',
        modernizr: 'modernizr-2.8.3.min',
        'pilot-lib/taster-offsite-panel': 'http://www.bbc.co.uk/taster/pilot-lib'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        jscookie: 
        {
            deps: ['jquery'],
            exports: 'Cookies'
        },
        scrollto: 
        {
            deps: ['jquery']
        },
        magnificPopup: 
        {
            deps: ['jquery']
        },
        modernizr: 
        {
            exports: 'Modernizr'
        }
    }
});

require(['jquery','pilot-lib/taster-offsite-panel','modernizr','jscookie','scrollto','magnificPopup'
], function($,Panel,Modernizr, Cookies) {
    
    var panel = new Panel('.taster-offsite-panel');

    $(document).ready(function () 
    {  
        var _viewportWidth = $(window).width(),
       _viewportHeight = $(window).width();
       

        /*******************************/
        /*****     COOKIES         *****/
        /*******************************/

        /* show cookie panel if they haven't allowed it */
        if(!Cookies.get('bbccookiesallowed'))
        {
            $(".cookie-warning").slideDown();   
        }

        $(".cookie-ok").click(function(e)
        {
            e.preventDefault();
            $(".cookie-warning").slideUp();
            Cookies.set('bbccookiesallowed', 'true');
        });

        $(".hero").addClass("animate-in");

        /*******************************/
        /*****     SCROLLING      *****/
        /*******************************/
        if (window.addEventListener)
        {
              window.addEventListener('scroll', onScroll, false);
        }
        else if (window.attachEvent)
        {
            window.attachEvent('scroll', onScroll);
        }

        function onScroll()
        {
            var doc = document.documentElement,
            oldtop = top;
            var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

            /* check if scroll height and compate to each panel to play and rewind animations accordingly */
            var panels = $(".video-panel");
            for(var i=1; i <= $(".video-panel").length; i++)
            {
                if(top + (_viewportHeight/2) > $("#panel"+i).offset().top + $("#panel"+i).height())
                {     
                    var currentPanel = $(panels[i-1]);
                    currentPanel.addClass("active");       
                }
            }

            if(top + (_viewportHeight/2) > ($(".text-panel").offset().top +  $(".text-panel").height() / 2))
            {
                $(".text-panel").addClass("animate-in");
            }
        }
        onScroll();

        $(window).resize(function() 
        {
           _viewportWidth = $(window).width(),
           _viewportHeight = $(window).width();
        });   

        /*******************************/
        /*****     CLICKABLES      *****/
        /*******************************/

        $(".arrow-btn").click(function(e)
        {
            e.preventDefault();
            var target = $(this).attr('href');
            $("body").scrollTo($(target), 500, {axis: "y"});
        });

        $('.popup-vimeo').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160
        });
    });
});