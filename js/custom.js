/******************************************
    File Name: custom.js
*******************************************/

(function ($) {
    "use strict";

    /* ==============================================
    AFFIX
    =============================================== */
    $('.megamenu').affix({
        offset: {
            top: 0,
            bottom: function () {
                return (this.bottom = $('.footer').outerHeight(true));
            }
        }
    });

    /* ==============================================
    BACK TO TOP BUTTON
    =============================================== */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.dmtop').css({ bottom: "75px" });
        } else {
            $('.dmtop').css({ bottom: "-100px" });
        }
    });

    /* ==============================================
    PRELOADER FIX
    =============================================== */
    $(document).ready(function () {
        $("#preloader").delay(300).fadeOut(); // Reduced delay for faster removal
        $(".preloader").delay(400).fadeOut("fast"); // Faster fade effect
    });

    /* ==============================================
    FUN FACTS COUNTER
    =============================================== */
    function count($this) {
        var current = parseInt($this.html(), 10);
        current += 50; // Increment
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function () {
                count($this);
            }, 30);
        }
    }

    $(".stat_count, .stat_count_download").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

    /* ==============================================
    TOOLTIP & POPOVER
    =============================================== */
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    /* ==============================================
    CONTACT FORM
    =============================================== */
    $(document).ready(function () {
        $('#contactform').submit(function () {
            var action = $(this).attr('action');

            $("#message").slideUp(750, function () {
                $('#message').hide();
                $('#submit')
                    .after('<img src="images/ajax-loader.gif" class="loader" />')
                    .attr('disabled', 'disabled');

                $.post(action, {
                        first_name: $('#first_name').val(),
                        last_name: $('#last_name').val(),
                        email: $('#email').val(),
                        phone: $('#phone').val(),
                        select_service: $('#select_service').val(),
                        select_price: $('#select_price').val(),
                        comments: $('#comments').val(),
                        verify: $('#verify').val()
                    },
                    function (data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#contactform img.loader').fadeOut('slow', function () {
                            $(this).remove();
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#contactform').slideUp('slow');
                    }
                );
            });
            return false;
        });
    });

    /* ==============================================
    CODE WRAPPER
    =============================================== */
    $('.code-wrapper').on("mousemove", function (e) {
        var offsets = $(this).offset();
        var fullWidth = $(this).width();
        var mouseX = e.pageX - offsets.left;

        if (mouseX < 0) mouseX = 0;
        else if (mouseX > fullWidth) mouseX = fullWidth;

        $(this).parent().find('.divider-bar').css({ left: mouseX, transition: 'none' });
        $(this).find('.design-wrapper').css({ transform: 'translateX(' + mouseX + 'px)', transition: 'none' });
        $(this).find('.design-image').css({ transform: 'translateX(' + (-1 * mouseX) + 'px)', transition: 'none' });
    });

    $('.divider-wrapper').on("mouseleave", function () {
        $(this).parent().find('.divider-bar').css({ left: '50%', transition: 'all .3s' });
        $(this).find('.design-wrapper').css({ transform: 'translateX(50%)', transition: 'all .3s' });
        $(this).find('.design-image').css({ transform: 'translateX(-50%)', transition: 'all .3s' });
    });

})(jQuery);

/* ==============================================
TEXT AUTO WRITER EFFECT
=============================================== */
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) delta /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // Inject CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

/* ==============================================
GOOGLE MAP INITIALIZATION
=============================================== */
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
