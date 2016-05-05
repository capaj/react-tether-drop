'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tetherDrop = require('tether-drop');

var _tetherDrop2 = _interopRequireDefault(_tetherDrop);

require('tether-drop/dist/css/drop-theme-basic.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defOpts = {
  classes: 'drop-theme-basic',
  position: 'bottom left',
  openOn: 'hover'
};

var TetherDrop = function (_React$Component) {
  _inherits(TetherDrop, _React$Component);

  function TetherDrop() {
    _classCallCheck(this, TetherDrop);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TetherDrop).call(this));

    _this.content = document.createElement('div');
    return _this;
  }

  _createClass(TetherDrop, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var opts = Object.assign({
        target: this.refs.children
      }, defOpts, this.props.opts);
      opts.content = function () {
        return _reactDom2.default.render(_this2.props.drop, _this2.content);
      };
      this.drop = new _tetherDrop2.default(opts);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.drop.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'children' },
        this.props.children
      );
    }
  }]);

  return TetherDrop;
}(_react2.default.Component);

exports.default = TetherDrop;
//# sourceMappingURL=index.js.map