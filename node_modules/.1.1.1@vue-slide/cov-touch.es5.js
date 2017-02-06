'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TOUCH_EVENT_MAP = {
    'touchstart': 1,
    'touchmove': 1,
    'touchend': 1
};

var MOUSE_EVENT_MAP = {
    'mousedown': 1,
    'mousemove': 1,
    'mouseup': 1
};

var _ = {
    on: function on(el, type, func) {
        el.addEventListener(type, func, false);
    },
    off: function off(el, type, func) {
        el.removeEventListener(type, func, false);
    }
};

var CovTouch = function () {
    function CovTouch(_ref) {
        var el = _ref.el;

        _classCallCheck(this, CovTouch);

        this._hasTouch = 'ontouchstart' in window;
        this.$el = el;
        this.init();
        this.touch = {
            start: null,
            end: null
        };
        this.state = {
            swiping: false,
            global: false
        };
        this.queue = {
            'swiping': [],
            'swiped': [],
            'swipe-left': [],
            'swipe-right': [],
            'swipe-up': [],
            'swipe-down': []
        };
    }

    _createClass(CovTouch, [{
        key: 'init',
        value: function init() {
            if (this._hasTouch) {
                _.on(this.$el, 'touchstart', this.touchStart.bind(this));
                _.on(window, 'touchmove', this.touchMove.bind(this));
                _.on(window, 'touchend', this.touchEnd.bind(this));
                _.on(window, 'touchcancel', this.touchCancel.bind(this));
            } else {
                _.on(this.$el, 'mousedown', this.touchStart.bind(this));
                _.on(window, 'mousemove', this.touchMove.bind(this));
                _.on(window, 'mouseup', this.touchEnd.bind(this));
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (this.$el) {
                _.off(this.$el, 'touchstart', this.touchStart.bind(this));
                _.off(this.$el, 'mousedown', this.touchStart.bind(this));
            }

            _.off(window, 'touchmove', this.touchMove.bind(this));
            _.off(window, 'touchend', this.touchEnd.bind(this));
            _.off(window, 'touchcancel', this.touchCancel.bind(this));
            _.off(window, 'mousemove', this.touchMove.bind(this));
            _.off(window, 'mouseup', this.touchEnd.bind(this));

            this.queue = {
                'swiping': [],
                'swiped': [],
                'swipe-left': [],
                'swipe-right': [],
                'swipe-up': [],
                'swipe-down': []
            };
        }
    }, {
        key: 'setGlobal',
        value: function setGlobal() {
            this.state.global = true;
        }
    }, {
        key: 'cancelGlobal',
        value: function cancelGlobal() {
            this.state.global = false;
        }
    }, {
        key: 'listen',
        value: function listen(type, $el, func) {
            var rect = void 0;
            if (!$el) {
                rect = null;
            } else {
                var tmp = $el.getBoundingClientRect();
                rect = {
                    x: tmp.left,
                    y: tmp.top,
                    width: tmp.width,
                    height: tmp.height
                };
            }

            var token = Math.random() * 9999 + type;
            this.queue[type].push({
                $el: $el,
                token: token,
                func: func,
                rect: rect
            });
        }
    }, {
        key: 'leave',
        value: function leave(type, token) {
            if (!this.queue[type]) return false;
            for (var i = 0, len = this.queue[type].length; i < len; i++) {
                if (this.queue[type].token === token) {
                    this.queue[type].splice(i - 1, 1);
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'update',
        value: function update() {
            var keys = Object.keys(this.queue);
            var tmp = void 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var key = _step.value;

                    this.queue[key].forEach(function (item) {
                        if (item.$el) {
                            tmp = item.$el.getBoundingClientRect();
                            item.rect = {
                                x: tmp.left,
                                y: tmp.top,
                                width: tmp.width,
                                height: tmp.height
                            };
                        }
                    });
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'clear',
        value: function clear() {
            var keys = Object.keys(this.queue);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var key = _step2.value;

                    this.queue[key].length = 0;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: 'notice',
        value: function notice(type, rect) {
            var rectTmp = {};
            var once = true;
            var tmpFunc = null;
            for (var i = 0, len = this.queue[type].length; i < len; i++) {
                rectTmp = this.queue[type][i].rect;
                if (!rectTmp) {
                    tmpFunc = this.queue[type][i].func;
                } else {
                    if (this.rectIn(rect, rectTmp) && !this.state.global) {
                        this.queue[type][i].func(this.touch.start, this.touch.end);
                        once = false;
                    }
                }
            }
            if (once && tmpFunc) {
                tmpFunc(this.touch.start, this.touch.end);
            }
        }
    }, {
        key: 'rectIn',
        value: function rectIn(small, big) {
            if (small.x > big.x && small.x + small.width < big.x + big.width && small.y > big.y && small.y + small.height < big.y + big.height) {
                return true;
            }
            return false;
        }
    }, {
        key: 'getRect',
        value: function getRect(dot1, dot2) {
            var rect = {};

            if (dot1.x < dot2.x) {
                rect.x = dot1.x;
                rect.width = dot2.x - dot1.x;
            } else {
                rect.x = dot2.x;
                rect.width = dot1.x - dot2.x;
            }

            if (dot1.y < dot2.y) {
                rect.y = dot1.y;
                rect.height = dot2.y - dot1.y;
            } else {
                rect.y = dot2.y;
                rect.height = dot1.y - dot2.y;
            }
            return rect;
        }
    }, {
        key: 'getPosition',
        value: function getPosition(e) {
            if (TOUCH_EVENT_MAP[e.type]) {
                var poss = [];
                var len = e.touches.length;
                for (var i = 0; i < len; i++) {
                    poss.push({
                        x: e.touches[i].pageX,
                        y: e.touches[i].pageY
                    });
                }
                return poss;
            } else if (MOUSE_EVENT_MAP[e.type]) {
                return [{
                    x: e.pageX,
                    y: e.pageY
                }];
            }
        }
    }, {
        key: 'getDistance',
        value: function getDistance(dot1, dot2) {
            return Math.sqrt(Math.pow(dot1.x - dot2.x, 2) + Math.pow(dot1.y - dot2.y, 2));
        }
    }, {
        key: 'getAngle',
        value: function getAngle(dot1, dot2) {
            return Math.atan2(dot2.y - dot1.y, dot2.x - dot1.x) * 180 / Math.PI;
        }
    }, {
        key: 'touchStart',
        value: function touchStart(e) {
            this.state.swiping = true;
            this.touch.start = this.getPosition(e)[0];
        }
    }, {
        key: 'touchMove',
        value: function touchMove(e) {
            if (!this.touch.start) return;
            this.touch.end = this.getPosition(e)[0];
            this.notice('swiping', this.getRect(this.touch.end, this.touch.start));
        }
    }, {
        key: 'touchEnd',
        value: function touchEnd(e) {
            if (!this.touch.start) return;
            if (e.type === 'mouseup') {
                this.touch.end = this.getPosition(e)[0];
            }
            var angle = this.getAngle(this.touch.end, this.touch.start);
            if (angle > -45 && angle < 45) {
                this.notice('swipe-left', this.getRect(this.touch.end, this.touch.start));
            }
            if (angle < -135 || angle > 135) {
                this.notice('swipe-right', this.getRect(this.touch.end, this.touch.start));
            }
            if (angle > 45 && angle < 135) {
                this.notice('swipe-up', this.getRect(this.touch.end, this.touch.start));
            }
            if (angle < -45 && angle > -135) {
                this.notice('swipe-down', this.getRect(this.touch.end, this.touch.start));
            }
            this.notice('swiped', this.getRect(this.touch.end, this.touch.start));
            this.state.swiping = false;
            this.touch.start = null;
        }
    }, {
        key: 'touchCancel',
        value: function touchCancel(e) {
            e.preventDefault();
            console.log(e);
        }
    }]);

    return CovTouch;
}();

exports.default = CovTouch;