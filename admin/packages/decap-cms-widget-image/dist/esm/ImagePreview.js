import _styled from "@emotion/styled/base";
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { WidgetPreviewContainer } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
const StyledImage = /*#__PURE__*/_styled(({
  src
}) => ___EmotionJSX("img", {
  src: src || '',
  role: "presentation"
}), {
  target: "eeuykvb0",
  label: "StyledImage"
})(process.env.NODE_ENV === "production" ? {
  name: "waguu7",
  styles: "display:block;max-width:100%;height:auto"
} : {
  name: "waguu7",
  styles: "display:block;max-width:100%;height:auto",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbWFnZVByZXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTW9GIiwiZmlsZSI6Ii4uLy4uL3NyYy9JbWFnZVByZXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHsgV2lkZ2V0UHJldmlld0NvbnRhaW5lciB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoKHsgc3JjIH0pID0+IDxpbWcgc3JjPXtzcmMgfHwgJyd9IHJvbGU9XCJwcmVzZW50YXRpb25cIiAvPilgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbmA7XG5cbmZ1bmN0aW9uIFN0eWxlZEltYWdlQXNzZXQoeyBnZXRBc3NldCwgdmFsdWUsIGZpZWxkIH0pIHtcbiAgcmV0dXJuIDxTdHlsZWRJbWFnZSBzcmM9e2dldEFzc2V0KHZhbHVlLCBmaWVsZCl9IC8+O1xufVxuXG5mdW5jdGlvbiBJbWFnZVByZXZpZXdDb250ZW50KHByb3BzKSB7XG4gIGNvbnN0IHsgdmFsdWUsIGdldEFzc2V0LCBmaWVsZCB9ID0gcHJvcHM7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBMaXN0LmlzTGlzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUubWFwKCh2YWwsIGluZGV4KSA9PiAoXG4gICAgICA8U3R5bGVkSW1hZ2VBc3NldCBrZXk9e2luZGV4fSB2YWx1ZT17dmFsfSBnZXRBc3NldD17Z2V0QXNzZXR9IGZpZWxkPXtmaWVsZH0gLz5cbiAgICApKTtcbiAgfVxuICByZXR1cm4gPFN0eWxlZEltYWdlQXNzZXQgey4uLnByb3BzfSAvPjtcbn1cblxuZnVuY3Rpb24gSW1hZ2VQcmV2aWV3KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFdpZGdldFByZXZpZXdDb250YWluZXI+XG4gICAgICB7cHJvcHMudmFsdWUgPyA8SW1hZ2VQcmV2aWV3Q29udGVudCB7Li4ucHJvcHN9IC8+IDogbnVsbH1cbiAgICA8L1dpZGdldFByZXZpZXdDb250YWluZXI+XG4gICk7XG59XG5cbkltYWdlUHJldmlldy5wcm9wVHlwZXMgPSB7XG4gIGdldEFzc2V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVByZXZpZXc7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
function StyledImageAsset({
  getAsset,
  value,
  field
}) {
  return ___EmotionJSX(StyledImage, {
    src: getAsset(value, field)
  });
}
function ImagePreviewContent(props) {
  const {
    value,
    getAsset,
    field
  } = props;
  if (Array.isArray(value) || List.isList(value)) {
    return value.map((val, index) => ___EmotionJSX(StyledImageAsset, {
      key: index,
      value: val,
      getAsset: getAsset,
      field: field
    }));
  }
  return ___EmotionJSX(StyledImageAsset, props);
}
function ImagePreview(props) {
  return ___EmotionJSX(WidgetPreviewContainer, null, props.value ? ___EmotionJSX(ImagePreviewContent, props) : null);
}
ImagePreview.propTypes = {
  getAsset: PropTypes.func.isRequired,
  value: PropTypes.node
};
export default ImagePreview;