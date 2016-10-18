(function ($) {



    //image gallery
    $("#gallery li img").hover(function () {
        $('#main-img').attr('src', $(this).attr('src'));
    });

        $("#gallery-ImCarousel li img").hover(function () {
        $("#gallery-ImCarousel img[id$=imgTop]").attr('src', $(this).attr('src'));
    });

    $(document).ready(function () {
        // bind a click event to the 'skip' link
        $(".scroll").click(function (event) {
            var that = this;
            var scrollTo = '#' + that.href.split('#')[1]
            $("body, html").animate({ scrollTop: $(scrollTo).offset().top }, 600, function () {
                $(scrollTo).attr('tabindex', '-1').on('blur focusout', function () {
                    // when focus leaves this element, 
                    // remove the tabindex attribute
                    $(this).removeAttr('tabindex');
                }).focus(); // focus on the content container           
            });

        });
    });


    //external links
    $('a[rel="external"]').attr('target', '_blank');

    //external links
    $('a[rel="pdf"]').attr('target', '_blank');

    //external links
    $('a[rel="doc"]').attr('target', '_blank');

    //timetbale hover
    $(function () {
        $(".session").hover(function () {
            $(this).find(".sessionInfo").show();
        }
                        , function () {
                            $(this).find(".sessionInfo").hide();
                        }
                       );
    });


    //stop popover from jumping to top
    $('a.popoverInfo').on('click', function (e) { e.preventDefault(); return true; });

    //stop popover from jumping to top
    $('a.noLink').on('click', function (e) { e.preventDefault(); return true; });

    //stop popover from jumping to top
    $('.sessionInfo h4 a').on('click', function (e) { e.preventDefault(); return true; });

    //timetable filter toggle
    $('a.showClassFilters').click(function () {
        $('.classFilters').toggleClass("active");
        $(this).toggleClass("active");
    });

    //timetable results
    $('a.showTimetableResults').click(function () {
        $('.timetableView').toggleClass("active");
        $(this).toggleClass("active");
    });

    //carousel play + pause
    $('#playButton').click(function () {
        $('#myCarousel').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#myCarousel').carousel('pause');
    });



    //membership table reveal
    $(function () {
        $("#showmemberships a").click(function () {
            $(".memberships").toggleClass("hidememberships");
            $("#showmemberships a").toggleClass("active");
        });
    });






    // event date show first three event list items
      jQuery('ul.date-list').each(function () {
      var LiN = jQuery(this).find('li').length;
      if (LiN > 3) {
      jQuery('li', this).eq(2).nextAll().hide().addClass('toggleable');
      jQuery(this).append('<a class="plusMinus">Show more...</a>');
      }
      });
      jQuery('ul.date-list').on('click', '.plusMinus', function () {
      if (jQuery(this).hasClass('active')) {
      jQuery(this).text('Show more...').removeClass('active');
      } else {
      jQuery(this).text('Show less...').addClass('active');
      }
      jQuery(this).siblings('li.toggleable').slideToggle();
      });



    
    //equal heights

        equalheight = function(container){

        var currentTallest = 0,
             currentRowStart = 0,
             rowDivs = new Array(),
             $el,
             topPosition = 0;
         $(container).each(function() {

           $el = $(this);
           $($el).height('auto')
           topPostion = $el.position().top;

           if (currentRowStart != topPostion) {
             for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
               rowDivs[currentDiv].height(currentTallest);
             }
             rowDivs.length = 0; // empty the array
             currentRowStart = topPostion;
             currentTallest = $el.height();
             rowDivs.push($el);
           } else {
             rowDivs.push($el);
             currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
          }
           for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
             rowDivs[currentDiv].height(currentTallest);
           }
         });
        }

        $(window).load(function() {
          equalheight('.equal-item');
        });


        $(window).resize(function(){
          equalheight('.equal-item');
        });
    
    //animated scroll
    
      jQuery(document).ready(function($) {
        $(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 1000);
        } );
      } );
    
    //feedback form
    
    //search toggle
    $('#site-search-reveal').click(function () {
        $('#site-search-wrapper').slideToggle("slow");
        $this.toggleClass('active');
    });
    
    //search toggle
    $('#feedback').click(function () {
        $('#feedback-form-content').slideToggle("slow");
        $('#feedback-form-content').focus();
    });
    
    //expand content
    
    $('.expand').click(function(){
		var $this = $(this);
		$this.toggleClass('active');
		if($this.hasClass('active')){
			$(".expand .sr-only").text('Click to hide');			
		} else {
			$(".expand .sr-only").text('Click to expand');
		}
	});
    
    //feedback form select
    
    $(document).ready(function() {
       $('input[type="radio"]').click(function() {
           if($(this).attr('id') == 'helpful_no') {
                $('#helpful_no_select').show();           
           }

           else {
                $('#helpful_no_select').hide();   
           }
       });
    });
    
        $(document).ready(function() {
       $('input[type="radio"]').click(function() {
           if($(this).attr('id') == 'helpful_maybe') {
                $('#helpful_maybe_select').show();           
           }

           else {
                $('#helpful_maybe_select').hide();   
           }
       });
    }); 
    
    
       //main menu
    $('a.main-menu').click(function() {
        $('#main-menu').toggleClass("active");
        $(this).toggleClass("active");
         $('#main-menu ul.root li:nth-child(1) a').addClass("firstItem");
        $('#main-menu ul.root li ul li a').removeClass("firstItem");
        $('#main-menu ul.root li a.firstItem').focus();
    });
    
    //search toggle
    $('a.search').click(function() {
        $('#nav-search').toggleClass("active");
        $(this).toggleClass("active");
        $('#nav-search input').focus();
    });

 //accordion
     $('.expandContent h3 ~ div').hide();

         $(".expandContent h3").on("click", function()
        {
		    $(this).toggleClass("active");
            var p = $(this).next('div').slideToggle();				
		    if ($(this).children().find('#tooltip').text() === "Click to expand")
		    {
		        $(this).children().find('#tooltip').text('Click to hide')
		    }
		    else
		    {
		        $(this).children().find('#tooltip').text('Click to expand')
		    }
		    return false;
		}); 




     
        $('#filterhide a').click(function (event) {
            event.preventDefault();
            $('.eventsFilter.col-md-3').toggleClass("active");
        });
        $('#filterCloseButton a').click(function (event) {
            event.preventDefault();
            $('.eventsFilter.col-md-3.active').removeClass("active");
        });
        $('#closeIcon').click(function (event) {
            event.preventDefault();
            $('.eventsFilter.col-md-3.active').removeClass("active");
        });
        $.resizeSearchResults = function () {
            var browserViewport = $(window).width();
            if (browserViewport <= 992) {
                $(".relDate").prependTo(".eventsFilterType.first");
            }
            if (browserViewport > 992) {
                $('.relDate').appendTo('.eventsSearchSort .pull-right');
            }
        }

        $.resizeSearchResults();

        $(window).resize(function () {
            $.resizeSearchResults();
        });    
 
    return {
        activate: activateResponsiveDesign
    }
    


    
}(jQuery));
