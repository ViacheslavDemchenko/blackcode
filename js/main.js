"use strict";

// Polyfill for forEach method
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!function (e, n, A) {
  function o(e, n) {
    return _typeof(e) === n;
  }

  function t() {
    var e, n, A, t, a, i, l;

    for (var f in r) {
      if (r.hasOwnProperty(f)) {
        if (e = [], n = r[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (A = 0; A < n.options.aliases.length; A++) {
          e.push(n.options.aliases[A].toLowerCase());
        }

        for (t = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) {
          i = e[a], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = t : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = t), s.push((t ? "" : "no-") + l.join("-"));
        }
      }
    }
  }

  function a(e) {
    var n = u.className,
        A = Modernizr._config.classPrefix || "";

    if (c && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + A + "no-js(\\s|$)");
      n = n.replace(o, "$1" + A + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + A + e.join(" " + A), c ? u.className.baseVal = n : u.className = n);
  }

  function i(e, n) {
    if ("object" == _typeof(e)) for (var A in e) {
      f(e, A) && i(A, e[A]);
    } else {
      e = e.toLowerCase();
      var o = e.split("."),
          t = Modernizr[o[0]];
      if (2 == o.length && (t = t[o[1]]), "undefined" != typeof t) return Modernizr;
      n = "function" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), a([(n && 0 != n ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, n);
    }
    return Modernizr;
  }

  var s = [],
      r = [],
      l = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var A = this;
      setTimeout(function () {
        n(A[e]);
      }, 0);
    },
    addTest: function addTest(e, n, A) {
      r.push({
        name: e,
        fn: n,
        options: A
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      r.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = l, Modernizr = new Modernizr();
  var f,
      u = n.documentElement,
      c = "svg" === u.nodeName.toLowerCase();
  !function () {
    var e = {}.hasOwnProperty;
    f = o(e, "undefined") || o(e.call, "undefined") ? function (e, n) {
      return n in e && o(e.constructor.prototype[n], "undefined");
    } : function (n, A) {
      return e.call(n, A);
    };
  }(), l._l = {}, l.on = function (e, n) {
    this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, l._trigger = function (e, n) {
    if (this._l[e]) {
      var A = this._l[e];
      setTimeout(function () {
        var e, o;

        for (e = 0; e < A.length; e++) {
          (o = A[e])(n);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    l.addTest = i;
  }), Modernizr.addAsyncTest(function () {
    function e(e, n, A) {
      function o(n) {
        var o = n && "load" === n.type ? 1 == t.width : !1,
            a = "webp" === e;
        i(e, a && o ? new Boolean(o) : o), A && A(n);
      }

      var t = new Image();
      t.onerror = o, t.onload = o, t.src = n;
    }

    var n = [{
      uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
      name: "webp"
    }, {
      uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
      name: "webp.alpha"
    }, {
      uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
      name: "webp.animation"
    }, {
      uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
      name: "webp.lossless"
    }],
        A = n.shift();
    e(A.name, A.uri, function (A) {
      if (A && "load" === A.type) for (var o = 0; o < n.length; o++) {
        e(n[o].name, n[o].uri);
      }
    });
  }), t(), a(s), delete l.addTest, delete l.addAsyncTest;

  for (var p = 0; p < Modernizr._q.length; p++) {
    Modernizr._q[p]();
  }

  e.Modernizr = Modernizr;
}(window, document);
"use strict";

;

(function () {
  var blueBlocks = document.querySelectorAll('.block-animate--blue');
  var yellowBlocks = document.querySelectorAll('.block-animate--yellow');

  function checkDialogVisible(target) {
    // Все позиции элемента
    var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
        // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom + 100 && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) {
      // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код
      return true;
    }
  }

  ;

  function blocksAnimateCheck() {
    blueBlocks.forEach(function (element) {
      if (checkDialogVisible(element)) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
    yellowBlocks.forEach(function (element) {
      if (checkDialogVisible(element)) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }

  blocksAnimateCheck();
  window.addEventListener('scroll', function () {
    blueBlocks.forEach(function (element) {
      if (checkDialogVisible(element)) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
    yellowBlocks.forEach(function (element) {
      if (checkDialogVisible(element)) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  });
})();
"use strict";

;

(function () {
  function getYear() {
    var date = new Date(),
        currentYear = date.getFullYear(),
        yearWrite = document.querySelector('.column-second__copyright');

    if (currentYear > 2020) {
      yearWrite.innerHTML = "\xA9 2020 - ".concat(currentYear, " \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B");
    } else {
      yearWrite.innerHTML = "\xA9 ".concat(currentYear, " \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B");
    }
  }

  ;
  getYear();
})();
"use strict";

;

(function () {
  var cardLg = document.querySelector('.services-card--lg');
  var cardLgIcon = document.querySelector('.services-card--lg__icon');
  var cardSm = document.querySelectorAll('.services-card--sm');
  var cardSmIcon = document.querySelectorAll('.services-card--sm__icon');
  cardLg.addEventListener('mouseover', cardsCircleBlue);
  cardLg.addEventListener('mouseout', cardsCircleGrey);

  function cardsCircleBlue() {
    cardLg.classList.add('services-card--lg--active');
    cardLgIcon.classList.add('services-card--lg__icon--active');
  }

  function cardsCircleGrey() {
    cardLg.classList.remove('services-card--lg--active');
    cardLgIcon.classList.remove('services-card--lg__icon--active');
  }

  function cardsSmCircleBlue() {
    var _loop = function _loop(i) {
      cardSm[i].addEventListener('mouseover', function () {
        cardSm[i].classList.add('services-card--sm--active');
        cardSmIcon[i].classList.add('services-card--sm__icon--active');
      });
    };

    for (var i = 0; i < cardSm.length; i++) {
      _loop(i);
    }
  }

  cardsSmCircleBlue();

  function cardsSmCircleGrey() {
    var _loop2 = function _loop2(i) {
      cardSm[i].addEventListener('mouseout', function () {
        cardSm[i].classList.remove('services-card--sm--active');
        cardSmIcon[i].classList.remove('services-card--sm__icon--active');
      });
    };

    for (var i = 0; i < cardSm.length; i++) {
      _loop2(i);
    }
  }

  cardsSmCircleGrey();
})();
"use strict";

;

(function () {
  function getInternetExplorerVersion() {
    var rv = -1;

    if (navigator.appName == 'Microsoft Internet Explorer') {
      var ua = navigator.userAgent;
      var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
    } else if (navigator.appName == 'Netscape') {
      var _ua = navigator.userAgent;

      var _re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");

      if (_re.exec(_ua) != null) rv = parseFloat(RegExp.$1);
    }

    return rv;
  }

  function hideSite() {
    var site = document.querySelector('.container-fluid');
    var body = document.getElementsByTagName('body')[0];
    var siteOverlay = document.createElement('div');
    var message = document.createElement('p');
    message.classList.add('ie-text-warning');
    message.innerHTML = 'Пожалуйста, зайдите с нормального браузера!';

    if (getInternetExplorerVersion() !== -1) {
      siteOverlay.classList.add('container-fluid--overlay');
      site.appendChild(message);
      site.appendChild(siteOverlay);
      body.classList.add('no-scroll');
      console.log('Это IE');
    } else {
      console.log('Это не IE');
    }
  }

  hideSite();
})();
"use strict";

;

(function () {
  // Main modal
  var headerBtn = document.querySelector('.header__btn');
  var headerModal = document.querySelector('.main-modal');
  var modalClose = document.querySelector('.close');
  var container = document.querySelector('.container-fluid');
  var body = document.getElementsByTagName('body')[0];
  var userSelectTime = document.querySelector('.main-modal__user-time');
  var userTime = document.querySelector('.main-modal-select');
  var cardBtns = document.querySelectorAll('.card__btn');
  var questionBtn = document.querySelector('.form-right__btn');
  var mobileBtn = document.querySelector('.mobile-menu__btn');
  headerBtn.addEventListener('click', showHeaderModal);
  mobileBtn.addEventListener('click', showHeaderModal);
  questionBtn.addEventListener('click', showHeaderModal);
  modalClose.addEventListener('click', hideHeaderModal);
  document.addEventListener('keydown', eschideHeaderModal);
  document.addEventListener('click', clickhideHeaderModal);
  userTime.addEventListener('change', userSelect);

  function showHeaderModal() {
    if (headerModal.style.display !== 'block') {
      headerModal.style.display = 'block';
      container.classList.add('container-fluid--modal-overlay');
      body.classList.add('no-scroll');
    }
  }

  function hideHeaderModal() {
    headerModal.style.display = 'none';
    container.classList.remove('container-fluid--modal-overlay');
    body.classList.remove('no-scroll');
  }

  function eschideHeaderModal(e) {
    if (e.keyCode === 27) {
      hideHeaderModal();
    }
  }

  function clickhideHeaderModal(e) {
    var target = e.target;

    if (target == container) {
      hideHeaderModal();
    }
  }

  function userSelect() {
    if (userTime.selectedIndex == 3) {
      userTime.style.display = 'none';
      userSelectTime.style.display = 'block';
    }
  }

  function cardBtnModalShow() {
    for (var i = 0; i < cardBtns.length; i++) {
      cardBtns[i].addEventListener('click', function () {
        showHeaderModal();
      });
    }
  }

  cardBtnModalShow();
})();
"use strict";

;

(function () {
  var el = document.querySelector('.section-advantages');
  var menuSticky = document.querySelector('.header-top--sticky');
  var screenWidth = window.screen.availWidth;

  function menuStickyCheck() {
    var offsetTop = el.getBoundingClientRect().top + document.body.scrollTop;

    if (offsetTop <= 96) {
      if (screenWidth >= 1024) {
        menuSticky.classList.add('active');
      }
    } else {
      menuSticky.classList.remove('active');
    }
  }

  menuStickyCheck();
  window.addEventListener('scroll', function () {
    screenWidth = window.screen.availWidth;

    if (screenWidth >= 1024) {
      menuStickyCheck();
    } else {
      menuSticky.classList.remove('active');
    }
  });
  window.addEventListener('resize', function () {
    screenWidth = window.screen.availWidth;

    if (screenWidth >= 1024) {
      menuStickyCheck();
    } else {
      menuSticky.classList.remove('active');
    }
  });
})();
"use strict";

;

(function () {
  var hamburger = document.getElementById('menu__button');
  var menu = document.querySelector('.nav-list');
  var menuLinks = document.querySelectorAll('.nav__link');
  var body = document.getElementsByTagName('body')[0];
  var logoText = document.querySelector('.logo__link');
  var social = document.querySelector('.social-list');
  var mobileBtn = document.querySelector('.mobile-menu__btn');
  var socialLinks = document.querySelectorAll('.social__icon');
  var screenWidth = window.screen.availWidth;
  var timerShow;
  hamburger.addEventListener('click', mobileMenu);

  function mobileMenuLinkClick() {
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (screenWidth < 1024) {
          mobileMenuHide();
        }
      });
    });
  }

  mobileMenuLinkClick();

  function mobileSocialClick() {
    socialLinks.forEach(function (socialLink) {
      socialLink.addEventListener('click', function () {
        if (screenWidth < 1024) {
          mobileMenuHide();
        }
      });
    });
  }

  mobileSocialClick();

  function mobileMenu() {
    if (!hamburger.classList.contains('active')) {
      timerShow = setTimeout(menuLinksShow, 500);
      hamburger.classList.add('active');
      menu.classList.add('nav-list--open');
      body.classList.add('no-scroll');
      logoText.classList.add('logo__link--mobile-open');
      mobileBtn.classList.add('mobile-menu__btn--animate');
      social.classList.add('social-list--animate');
    } else {
      mobileMenuHide();
    }
  }

  function mobileMenuHide() {
    setTimeout(menuLinksHide, 250);
    hamburger.classList.remove('active');
    menu.classList.remove('nav-list--open');
    body.classList.remove('no-scroll');
    logoText.classList.remove('logo__link--mobile-open');
    mobileBtn.classList.remove('mobile-menu__btn--animate');
    social.classList.remove('social-list--animate');
  }

  function menuLinksShow() {
    menuLinks.forEach(function (link) {
      link.style.opacity = '1';
    });
  }

  function menuLinksHide() {
    menuLinks.forEach(function (link) {
      link.style.opacity = '0';
    });
  }

  window.addEventListener('resize', function () {
    screenWidth = window.screen.availWidth;

    if (screenWidth > 1024) {
      menuLinksShow();
      hamburger.classList.remove('active');
      menu.classList.remove('nav-list--open');
      body.classList.remove('no-scroll');
    }
  });
})();
"use strict";

;

(function () {
  // Quiz modal
  var quizBtn = document.querySelector('.card-content__btn');
  var quizModal = document.querySelector('.quiz');
  var quizClose = document.querySelector('.close--quiz');
  var quizFinalClose = document.getElementById('close--quiz');
  var container = document.querySelector('.container-fluid');
  var body = document.getElementsByTagName('body')[0];
  var questionBtnPrev = document.querySelector('.quiz__btn--left');
  var questionsBtnNext = document.querySelector('.quiz__btn--right');
  var quizFinal = document.querySelector('.quiz-final');
  var briefBtn = document.querySelector('.brief-btn');
  quizBtn.addEventListener('click', showQuizModal);
  briefBtn.addEventListener('click', showQuizModal);
  quizClose.addEventListener('click', hideQuizModal);
  quizFinalClose.addEventListener('click', hideQuizFinalModal);
  document.addEventListener('keydown', eschideQuizModal);
  document.addEventListener('click', clickhideQuizModal);
  questionsBtnNext.addEventListener('click', nextQuestion);
  questionBtnPrev.addEventListener('click', prevQuestion);

  function showQuizModal() {
    quizModal.style.display = 'block';
    container.classList.add('container-fluid--modal-overlay');
    body.classList.add('no-scroll');
  }

  function hideQuizModal() {
    quizModal.style.display = 'none';
    container.classList.remove('container-fluid--modal-overlay');
    body.classList.remove('no-scroll');
  }

  function showQuizFinalModal() {
    quizFinal.classList.add('quiz-final--active');
    container.classList.add('container-fluid--modal-overlay');
    body.classList.add('no-scroll');
  }

  function hideQuizFinalModal() {
    quizFinal.classList.remove('quiz-final--active');
    container.classList.remove('container-fluid--modal-overlay');
    body.classList.remove('no-scroll');
  }

  function eschideQuizModal(e) {
    if (e.keyCode === 27) {
      hideQuizModal();
      hideQuizFinalModal();
    }
  }

  function clickhideQuizModal(e) {
    var target = e.target;

    if (target == container) {
      hideQuizModal();
      hideQuizFinalModal();
    }
  }

  var slideIndex = 1;
  showQuestions(slideIndex);
  /* Функция увеличивает индекс на 1, показывает следующй слайд*/

  function nextQuestion() {
    showQuestions(slideIndex += 1);
  }
  /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/


  function prevQuestion() {
    showQuestions(slideIndex -= 1);
  }
  /* Устанавливает текущий слайд */


  function currentQuestion(n) {
    showQuestions(slideIndex = n);
  }
  /* Основная функция слайдера */


  function showQuestions(n) {
    var i;
    var questions = document.querySelectorAll('.question__item');
    var questionsNum = document.querySelectorAll('.question');

    if (n > questions.length) {
      slideIndex = 1;
      hideQuizModal();
      showQuizFinalModal();
    }

    if (n < 1) {
      slideIndex = questions.length;
    }

    for (var _i = 0; _i < questions.length; _i++) {
      questions[_i].classList.remove('question__item--active');

      questionsNum[_i].classList.remove('question--active');
    }

    questions[slideIndex - 1].classList.add('question__item--active');
    questionsNum[slideIndex - 1].classList.add('question--active');
  }
})();
"use strict";

$(document).ready(function () {
  var screenWidth = window.screen.availWidth;
  var advantagesSlider = document.querySelector('.advantages__slider');
  var portfolioSlider = document.querySelector('.portfolio__slider');

  if ($(window).width() < 1024) {
    advantagesSlider.classList.add('owl-carousel');
    portfolioSlider.classList.add('owl-carousel');
    $('.owl-carousel').owlCarousel({
      stagePadding: 50,
      center: true,
      loop: true,
      autoWidth: true,
      autoHeight: true,
      margin: 10,
      dots: false,
      // autoplay: true,
      // autoplayTimeout: 3000,
      // autoplayHoverPause: true,
      items: 1
    });
  } else if ($(window).width() >= 1024) {
    $('.owl-carousel').trigger('destroy.owl.carousel');
    advantagesSlider.classList.remove('owl-carousel');
    portfolioSlider.classList.remove('owl-carousel');
  }

  $(window).resize(function () {
    if ($(window).width() < 1024) {
      advantagesSlider.classList.add('owl-carousel');
      portfolioSlider.classList.add('owl-carousel');
      $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        center: true,
        loop: true,
        autoWidth: true,
        autoHeight: true,
        margin: 10,
        dots: false,
        // autoplay: true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause: true,
        items: 1
      });
    } else if ($(window).width() >= 1024) {
      $('.owl-carousel').trigger('destroy.owl.carousel');
      advantagesSlider.classList.remove('owl-carousel');
      portfolioSlider.classList.remove('owl-carousel');
    }
  });
});
"use strict";

;

(function () {
  var screenWidth = window.screen.availWidth; // Select all links with hashes

  $('a[href*="#"]') // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();

        if (screenWidth < 1024) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {});
        } else {
          $('html, body').animate({
            scrollTop: target.offset().top - 96
          }, 1000, function () {});
        }
      }
    }
  });
})();
"use strict";

;

(function () {
  var text = ['Нам важно, ', 'чтобы ведение вашего\n', 'бизнеса протекало как можно\n', 'комфортнее и для этого выделили\n', 'отдельные услуги для небольших\n', 'задач'];

  function typeText() {
    var line = 0;
    var count = 0;
    var out = '';
    var blackOut = '';
    var textOut = document.querySelector('.dialog__text--blue');
    var span = document.createElement('span');
    span.classList.add('dialog__text');

    function typeLine() {
      var interval = setTimeout(function () {
        if (line == 0) {
          out += text[line][count];
          textOut.innerHTML = "".concat(out, " |");
        } else {
          textOut.innerHTML = out;
          blackOut += text[line][count];
          span.innerHTML = "".concat(blackOut, " |");
          textOut.appendChild(span);
        }

        count++;

        if (count >= text[line].length) {
          count = 0;
          line++;

          if (line == text.length) {
            clearTimeout(interval);
            span.innerHTML = blackOut;
            return true;
          }
        }

        typeLine();
      }, getRandomNum(getRandomNum(150 * 2.5)));
    }

    typeLine();

    function getRandomNum(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  } // Запуск функции печати текста после появления соответствующего блока на экране через скролл


  var element = document.querySelector('#target');

  function checkDialogVisible(target) {
    // Все позиции элемента
    var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
        // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) {
      // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код
      return true;
    }
  }

  ; // Снимаем обработчик события после совершения действия или выполнения условия

  var handler = function handler(event) {
    if (checkDialogVisible(element)) {
      typeText();
      window.removeEventListener('scroll', handler);
    }
  };

  window.addEventListener('scroll', handler); // А также запустим функцию печати текста сразу. А то вдруг, элемент изначально видно

  if (checkDialogVisible(element)) {
    typeText();
    window.removeEventListener('scroll', handler);
  }
})();
"use strict";

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();