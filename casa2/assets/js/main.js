/**
  * PreLoader
  * Retina Logos
  * Header Fixed
  * Mobile Navigation
  * Scroll to Top  
*/

; (function ($) {
    "use strict";

    var themesflatTheme = {

        // Main init function
        init: function () {
            this.config();
            this.events();
        },

        // Define vars for caching
        config: function () {
            this.config = {
                $window: $(window),
                $document: $(document),
            };
        },

        // Events
        events: function () {
            var self = this;

            // Run on document ready
            self.config.$document.on('ready', function () {

                // PreLoader
                self.preLoader();

                // Retina Logos
                self.retinaLogo();

                // Header Fixed
                self.headerFixed();

                // Mobile Navigation
                self.mobileNav();

                // Scroll to Top
                self.scrollToTop();

            });

            // Run on Window Load
            self.config.$window.on('load', function () {

            });
        },

        // PreLoader
        preLoader: function () {
            if ($().animsition) {
                $('.animsition').animsition({
                    inClass: 'fade-in',
                    outClass: 'fade-out',
                    inDuration: 1500,
                    outDuration: 800,
                    loading: true,
                    loadingParentElement: 'body',
                    loadingClass: 'animsition-loading',
                    timeout: false,
                    timeoutCountdown: 5000,
                    onLoadEvent: true,
                    browser: [
                        '-webkit-animation-duration',
                        '-moz-animation-duration',
                        'animation-duration'
                    ],
                    overlay: false,
                    overlayClass: 'animsition-overlay-slide',
                    overlayParentElement: 'body',
                    transition: function (url) { window.location.href = url; }
                });
            }
        },

        // Retina Logos
        retinaLogo: function () {
            var retina = window.devicePixelRatio > 1 ? true : false;
            var $logo = $('#site-logo img');
            var $logo_retina = $logo.data('retina');

            if (retina && $logo_retina) {
                $logo.attr({
                    src: $logo.data('retina'),
                    width: $logo.data('width'),
                    height: $logo.data('height')
                });
            }
        },

        // Header Fixed
        headerFixed: function () {
            if ($('body').hasClass('header-fixed')) {
                var nav = $('#site-header');

                if ($('body').is('.header-style-8')) {
                    var nav = $('.site-navigation-wrap');
                }

                if (nav.length) {
                    var offsetTop = nav.offset().top,
                        headerHeight = nav.height(),
                        injectSpace = $('<div />', {
                            height: headerHeight
                        }).insertAfter(nav);

                    $(window).on('load scroll', function () {
                        if ($(window).scrollTop() > offsetTop) {
                            nav.addClass('is-fixed');
                            injectSpace.show();
                        } else {
                            nav.removeClass('is-fixed');
                            injectSpace.hide();
                        }

                        if ($(window).scrollTop() > 300) {
                            nav.addClass('is-small');
                        } else {
                            nav.removeClass('is-small');
                        }
                    })
                }
            }
        },

        // Mobile Navigation
        mobileNav: function () {
            var menuType = 'desktop';

            $(window).on('load resize', function () {
                var mode = 'desktop';
                var wrapMenu = $('#site-header-inner .wrap-inner');
                var navExtw = $('.nav-extend.active');
                var navExt = $('.nav-extend.active').children();

                if (matchMedia('only screen and (max-width: 991px)').matches)
                    mode = 'mobile';

                if (mode != menuType) {
                    menuType = mode;

                    if (mode === 'mobile') {
                        $('#main-nav').attr('id', 'main-nav-mobi')
                            .appendTo('#site-header')
                            .hide().children('.menu').append(navExt)
                            .find('li:has(ul)')
                            .children('ul')
                            .removeAttr('style')
                            .hide()
                            .before('<span class="arrow"></span>');
                    } else {
                        if ($('body').is('.header-style-3'))
                            wrapMenu = $('.site-navigation-wrap .inner');

                        $('#main-nav-mobi').attr('id', 'main-nav')
                            .removeAttr('style')
                            .prependTo(wrapMenu)
                            .find('.ext').appendTo(navExtw)
                            .parent().siblings('#main-nav')
                            .find('.sub-menu')
                            .removeAttr('style')
                            .prev().remove();

                        $('.mobile-button').removeClass('active');
                    }
                }
            });

            $(document).on('click', '.mobile-button', function () {
                $(this).toggleClass('active');
                $('#main-nav-mobi').slideToggle();
            })

            $(document).on('click', '#main-nav-mobi .arrow', function () {
                $(this).toggleClass('active').next().slideToggle();
            })
        },

        // Scroll to Top
        scrollToTop: function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    $('#scroll-top').addClass('show');
                } else {
                    $('#scroll-top').removeClass('show');
                }
            });

            $('#scroll-top').on('click', function () {
                $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
                return false;
            });
        },

    }; // end themesflatTheme
    // script texto 1 y 2

    document.addEventListener("DOMContentLoaded", function () {
        const btnOpcion1 = document.querySelector(".themesflat-button.bg-white:nth-child(1)");
        const btnOpcion2 = document.querySelector(".themesflat-button.bg-white:nth-child(2)");


        btnOpcion1.addEventListener('click', function () {
            cambiarContenido('opcion1');
        });

        btnOpcion2.addEventListener('click', function () {
            cambiarContenido('opcion2');
        });
    });

    function cambiarContenido(opcion) {
        console.log("Función cambiarContenido activada con opción:", opcion);
        var contenedor = document.getElementById('contenedorPrincipal');
        var logo = document.getElementById('logo');
        var titulo = document.getElementById('titulo');
        var contenido = document.getElementById('contenido');

        // Luego aplicamos el efecto de fade out
     contenedor.style.opacity = 0;

     setTimeout(function() {
        

        switch (opcion) {
            case 'opcion1':
                contenedor.classList.remove('opcion2-bg');
                contenedor.classList.add('opcion1-bg');

                logo.innerHTML = '<img src="assets/img/flash_industria_limpia.png" alt="Logo Industria Limpia"><img src="assets/img/flash_supervisores.png" alt="Logo Supervisores"><img src="assets/img/nom.png" alt="Logo NOM">';
                titulo.innerText = "CALIDAD CONSISTENTE, PRODUCCIÓN SOSTENIBLE.";
                contenido.innerHTML = "* 4 hornos tradicionales de mampostería para la elaboración de mezcal tradicional. <br><br>* Más de 1,500 barricas nuevas de Roble Francés y Americano, para un sabor diferenciado. <br><br>* 11 hectáreas de cultivos con 14.5k plantas de agave Espadín propias. <br><br>* Invernadero para el cultivo y protección de agaves de primera generación. <br><br>* ISO 9001, HACCP, Certificado de Industria Limpia, Kosher y uso de Madera Certificada.";

                break;
            case 'opcion2':
                contenedor.classList.remove('opcion1-bg');
                contenedor.classList.add('opcion2-bg');

                logo.innerHTML = '<img src="assets/img/flash_metodo_verde.png" alt="Metodo verde">';
                titulo.innerText = "PROGRAMA DE SUSTENTABILIDAD MÉTODO VERDE®";
                contenido.innerHTML = "Somos una destilería que se distingue por su programa de Sustentabilidad MÉTODO VERDE™, que no utiliza ni maltrata animales. Además, está certificada como Industria Limpia por la Secretaría de Protección al Medio Ambiente de México y cuenta con certificación Kosher, entre otras distinciones de calidad. <br><br>La destilería cuenta con su propia planta de tratamiento de aguas residuales, recolecta el agua de lluvia y usa paneles solares para sus necesidades energéticas.";

                break;
        }
        // Finalmente, aplicamos el efecto de fade in
        contenedor.style.opacity = 1; 
         }, 500); // 500 ms es el tiempo que le dimos a la transición en CSS.
    }

    // script texto 3 y 4
    //main.js
    document.addEventListener("DOMContentLoaded", function () {
        const btnOpcion3 = document.querySelector(".themesflat-button.bg-white:nth-child(1)");
        const btnOpcion4 = document.querySelector(".themesflat-button.bg-white:nth-child(2)");


        btnOpcion3.addEventListener('click', function () {
            cambiarContenido2('opcion3');
        });

        btnOpcion4.addEventListener('click', function () {
            cambiarContenido2('opcion4');
        });
    });

    function cambiarContenido2(opcion) {
        console.log("Función cambiar Contenido activada con opción:", opcion);

        // Primero obtenemos la referencia del contenedor
        var contenedor2 = document.getElementById('contenedorPrincipal');
        var logo2 = document.getElementById('logo2');           // Antes era 'logo'
        var titulo2 = document.getElementById('titulo2');       // Antes era 'titulo'
        var contenido2 = document.getElementById('contenido2'); // Antes era 'contenido'

        // Luego aplicamos el efecto de fade out
        contenedor2.style.opacity = 0;

        setTimeout(function () {

            switch (opcion) {
                case 'opcion3':
                    contenedor2.classList.remove('opcion4-bg');
                    contenedor2.classList.add('opcion3-bg');
                    logo2.innerHTML = '<img src="assets/img/flash_industria_limpia.png" alt="Logo Industria Limpia"><img src="assets/img/flash_supervisores.png" alt="Logo Supervisores"><img src="assets/img/nom.png" alt="Logo NOM">';
                    titulo2.innerText = "CONSISTENT QUALITY, SUSTAINABLE PRODUCTION.";
                    contenido2.innerHTML = "* 4 traditional masonry ovens for the production of traditional mezcal. <br><br>* More than 1,500 new French and American oak barrels, for a differentiated flavor. <br><br>* 11 hectares of crops with 14.5k of our own Espadín agave plants. <br><br>* Greenhouse for the cultivation and protection of first-generation agaves. <br><br>* ISO 9001, HACCP, Clean Industry Certificate, Kosher and use of Certified Wood.";
                    break;
                case 'opcion4':
                    contenedor2.classList.remove('opcion3-bg');
                    contenedor2.classList.add('opcion4-bg');
                    logo2.innerHTML = '<img src="assets/img/flash_metodo_verde.png" alt="Metodo verde">';
                    titulo2.innerText = "GREEN METHOD SUSTAINABILITY PROGRAM";
                    contenido2.innerHTML = "We are a distillery that stands out for its Green Method Sustainability Program, which does not use or mistreat animals. In addition, it is certified as a Clean Industry by the Secretariat of Environmental Protection of Mexico and has Kosher certification, among other quality distinctions. <br><br>The distillery has its own wastewater treatment plant, collects rainwater, and uses solar panels for its energy needs.";
                break;
            }
            // Finalmente, aplicamos el efecto de fade in
            contenedor2.style.opacity = 1;
        }, 500); // 500 ms es el tiempo que le dimos a la transición en CSS.
    }

    // script texto end
    // Start things up
    themesflatTheme.init();

    var ajaxContactForm = function () {
        $('#contactform').each(function () {
            $(this).validate({
                submitHandler: function (form) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url: $form.attr('action'),
                        data: str,
                        beforeSend: function () {
                            $form.find('.form-submit').append(loading);
                        },
                        success: function (msg) {
                            var result, cls;
                            if (msg === 'Success') {
                                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text': result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each contactform
    };

    var ajaxSubscribe = {
        obj: {
            subscribeEmail: $('#subscribe-email'),
            subscribeButton: $('#subscribe-button'),
            subscribeMsg: $('#subscribe-msg'),
            subscribeContent: $("#subscribe-content"),
            dataMailchimp: $('#subscribe-form').attr('data-mailchimp'),
            success_message: '<div class="notification_ok">Thank you for joining our mailing list! Please check your email for a confirmation link.</div>',
            failure_message: '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
            noticeError: '<div class="notification_error">{msg}</div>',
            noticeInfo: '<div class="notification_error">{msg}</div>',
            basicAction: 'mail/subscribe.php',
            mailChimpAction: 'mail/subscribe-mailchimp.php'
        },

        eventLoad: function () {
            var objUse = ajaxSubscribe.obj;

            $(objUse.subscribeButton).on('click', function () {
                if (window.ajaxCalling) return;
                var isMailchimp = objUse.dataMailchimp === 'true';

                if (isMailchimp) {
                    ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
                } else {
                    ajaxSubscribe.ajaxCall(objUse.basicAction);
                }
            });
        },

        ajaxCall: function (action) {
            window.ajaxCalling = true;
            var objUse = ajaxSubscribe.obj;
            var messageDiv = objUse.subscribeMsg.html('').hide();
            $.ajax({
                url: action,
                type: 'POST',
                dataType: 'json',
                data: {
                    subscribeEmail: objUse.subscribeEmail.val()
                },
                success: function (responseData, textStatus, jqXHR) {
                    if (responseData.status) {
                        objUse.subscribeContent.fadeOut(500, function () {
                            messageDiv.html(objUse.success_message).fadeIn(500);
                        });
                    } else {
                        switch (responseData.msg) {
                            case "email-required":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email is required.</strong>'));
                                break;
                            case "email-err":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email invalid.</strong>'));
                                break;
                            case "duplicate":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email is duplicate.</strong>'));
                                break;
                            case "filewrite":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}', 'Error! <strong>Mail list file is open.</strong>'));
                                break;
                            case "undefined":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}', 'Error! <strong>undefined error.</strong>'));
                                break;
                            case "api-error":
                                objUse.subscribeContent.fadeOut(500, function () {
                                    messageDiv.html(objUse.failure_message);
                                });
                        }
                        messageDiv.fadeIn(500);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Connection error');
                },
                complete: function (data) {
                    window.ajaxCalling = false;
                }
            });
        }
    };

    var alertBox = function () {
        $(document).on('click', '.close', function (e) {
            $(this).closest('.flat-alert').remove();
            e.preventDefault();
        })

    };
    // Dom Ready
    $(function () {
        ajaxSubscribe.eventLoad();
        ajaxContactForm();
        alertBox();
    });

})(jQuery);