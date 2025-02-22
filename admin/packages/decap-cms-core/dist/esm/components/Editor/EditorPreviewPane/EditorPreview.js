import _styled from "@emotion/styled/base";
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { jsx as ___EmotionJSX } from "@emotion/react";
function isVisible(field) {
  return field.get('widget') !== 'hidden';
}
const PreviewContainer = /*#__PURE__*/_styled("div", {
  target: "e1iji6y40",
  label: "PreviewContainer"
})(process.env.NODE_ENV === "production" ? {
  name: "9bq7s9",
  styles: "font-family:Roboto,'Helvetica Neue',HelveticaNeue,Helvetica,Arial,sans-serif"
} : {
  name: "9bq7s9",
  styles: "font-family:Roboto,'Helvetica Neue',HelveticaNeue,Helvetica,Arial,sans-serif",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0VkaXRvci9FZGl0b3JQcmV2aWV3UGFuZS9FZGl0b3JQcmV2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNtQyIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9FZGl0b3IvRWRpdG9yUHJldmlld1BhbmUvRWRpdG9yUHJldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZnVuY3Rpb24gaXNWaXNpYmxlKGZpZWxkKSB7XG4gIHJldHVybiBmaWVsZC5nZXQoJ3dpZGdldCcpICE9PSAnaGlkZGVuJztcbn1cblxuY29uc3QgUHJldmlld0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYU5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5gO1xuXG4vKipcbiAqIFVzZSBhIHN0YXRlZnVsIGNvbXBvbmVudCBzbyB0aGF0IGNoaWxkIGNvbXBvbmVudHMgY2FuIGVmZmVjdGl2ZWx5IHV0aWxpemVcbiAqIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sbGVjdGlvbiwgZmllbGRzLCB3aWRnZXRGb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFjb2xsZWN0aW9uIHx8ICFmaWVsZHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFByZXZpZXdDb250YWluZXI+XG4gICAgICAgIHtmaWVsZHMuZmlsdGVyKGlzVmlzaWJsZSkubWFwKGZpZWxkID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17ZmllbGQuZ2V0KCduYW1lJyl9Pnt3aWRnZXRGb3IoZmllbGQuZ2V0KCduYW1lJykpfTwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvUHJldmlld0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cblByZXZpZXcucHJvcFR5cGVzID0ge1xuICBjb2xsZWN0aW9uOiBJbW11dGFibGVQcm9wVHlwZXMubWFwLmlzUmVxdWlyZWQsXG4gIGVudHJ5OiBJbW11dGFibGVQcm9wVHlwZXMubWFwLmlzUmVxdWlyZWQsXG4gIGZpZWxkczogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QuaXNSZXF1aXJlZCxcbiAgZ2V0QXNzZXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHdpZGdldEZvcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

/**
 * Use a stateful component so that child components can effectively utilize
 * `shouldComponentUpdate`.
 */
export default class Preview extends React.Component {
  render() {
    const {
      collection,
      fields,
      widgetFor
    } = this.props;
    if (!collection || !fields) {
      return null;
    }
    return ___EmotionJSX(PreviewContainer, null, fields.filter(isVisible).map(field => ___EmotionJSX("div", {
      key: field.get('name')
    }, widgetFor(field.get('name')))));
  }
}
Preview.propTypes = {
  collection: ImmutablePropTypes.map.isRequired,
  entry: ImmutablePropTypes.map.isRequired,
  fields: ImmutablePropTypes.list.isRequired,
  getAsset: PropTypes.func.isRequired,
  widgetFor: PropTypes.func.isRequired
};