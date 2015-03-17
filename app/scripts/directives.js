angular.module('quizApp')
.directive('myAdSense', function() {
	return {
	    restrict: 'A',
	    transclude: true,
	    replace: true,
	    template: '<div ng-transclude></div>',
	    link: function ($scope, element, attrs) {}
	}
})
.directive('result1Ad', function() {
	function createHTML() {
		return '<ins class="adsbygoogle"' + 
					'style="display:block"' +
				    'data-ad-client="ca-pub-7864311627791283"' +
				    'data-ad-slot="2601543705"' +
				    'data-ad-format="auto"></ins>';
	}

	return {
	    restrict: 'A',
	    template: createHTML(),
	    controller: function() {
            (adsbygoogle = window.adsbygoogle || []).push({});
        }
	}
})
.directive('dynFbCommentBox', function () {
    function createHTML(href, numposts, colorscheme) {
        return '<div class="fb-comments" ' +
                       'data-href="' + href + '" ' +
                       'data-numposts="' + numposts + '" ' +
                       'data-colorsheme="' + colorscheme + '">' +
               '</div>';
    }

    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
            attrs.$observe('pageHref', function (newValue) {
                var href        = newValue;
                var numposts    = attrs.numposts    || 5;
                var colorscheme = attrs.colorscheme || 'light';

                elem.html(createHTML(href, numposts, colorscheme));
                FB.XFBML.parse(elem[0]);
            });
        }
    };
})
.directive('facebookLike', ['$timeout', function ($timeout) {
    return {
        template:
            '<div class="fb-like" ' +
                'data-href="https://www.facebook.com/quizzofy" ' +
                'data-share="false" ' +
                'data-layout="standard" ' +                
                'data-show-faces="false"></div>',
        link: function (scope, element, attributes) {
            $timeout(function () {
                return typeof FB !== "undefined" && FB !== null
                    ? FB.XFBML.parse(element.parent()[0])
                    : void 0; });
            }
    };
 }]);