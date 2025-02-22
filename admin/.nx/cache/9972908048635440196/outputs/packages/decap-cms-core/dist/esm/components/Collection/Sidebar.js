import _styled from "@emotion/styled/base";
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { css } from '@emotion/react';
import { translate } from 'react-polyglot';
import { NavLink } from 'react-router-dom';
import { Icon, components, colors } from 'decap-cms-ui-default';
import { searchCollections } from '../../actions/collections';
import CollectionSearch from './CollectionSearch';
import NestedCollection from './NestedCollection';
import { jsx as ___EmotionJSX } from "@emotion/react";
const styles = {
  sidebarNavLinkActive: /*#__PURE__*/css("color:", colors.active, ";background-color:", colors.activeBackground, ";border-left-color:#4863c6;;label:sidebarNavLinkActive;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vU2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjMkIiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29sbGVjdGlvbi9TaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAncmVhY3QtcG9seWdsb3QnO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgSWNvbiwgY29tcG9uZW50cywgY29sb3JzIH0gZnJvbSAnZGVjYXAtY21zLXVpLWRlZmF1bHQnO1xuXG5pbXBvcnQgeyBzZWFyY2hDb2xsZWN0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29sbGVjdGlvbnMnO1xuaW1wb3J0IENvbGxlY3Rpb25TZWFyY2ggZnJvbSAnLi9Db2xsZWN0aW9uU2VhcmNoJztcbmltcG9ydCBOZXN0ZWRDb2xsZWN0aW9uIGZyb20gJy4vTmVzdGVkQ29sbGVjdGlvbic7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc2lkZWJhck5hdkxpbmtBY3RpdmU6IGNzc2BcbiAgICBjb2xvcjogJHtjb2xvcnMuYWN0aXZlfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5hY3RpdmVCYWNrZ3JvdW5kfTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4NjNjNjtcbiAgYCxcbn07XG5cbmNvbnN0IFNpZGViYXJDb250YWluZXIgPSBzdHlsZWQuYXNpZGVgXG4gICR7Y29tcG9uZW50cy5jYXJkfTtcbiAgd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nOiA4cHggMCAxMnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTJweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG5jb25zdCBTaWRlYmFySGVhZGluZyA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMzdweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gIGNvbG9yOiAke2NvbG9ycy50ZXh0TGVhZH07XG5gO1xuXG5jb25zdCBTaWRlYmFyTmF2TGlzdCA9IHN0eWxlZC51bGBcbiAgbWFyZ2luOiAxMnB4IDAgMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG5gO1xuXG5jb25zdCBTaWRlYmFyTmF2TGluayA9IHN0eWxlZChOYXZMaW5rKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMThweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmZmO1xuICB6LWluZGV4OiAtMTtcblxuICAke0ljb259IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuXG4gICR7cHJvcHMgPT4gY3NzYFxuICAgICY6aG92ZXIsXG4gICAgJjphY3RpdmUsXG4gICAgJi4ke3Byb3BzLmFjdGl2ZUNsYXNzTmFtZX0ge1xuICAgICAgJHtzdHlsZXMuc2lkZWJhck5hdkxpbmtBY3RpdmV9O1xuICAgIH1cbiAgYH07XG5gO1xuXG5leHBvcnQgY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29sbGVjdGlvbnM6IEltbXV0YWJsZVByb3BUeXBlcy5tYXAuaXNSZXF1aXJlZCxcbiAgICBjb2xsZWN0aW9uOiBJbW11dGFibGVQcm9wVHlwZXMubWFwLFxuICAgIGlzU2VhcmNoRW5hYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VhcmNoVGVybTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWx0ZXJUZXJtOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyTGluayA9IChjb2xsZWN0aW9uLCBmaWx0ZXJUZXJtKSA9PiB7XG4gICAgY29uc3QgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uLmdldCgnbmFtZScpO1xuICAgIGlmIChjb2xsZWN0aW9uLmhhcygnbmVzdGVkJykpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBrZXk9e2NvbGxlY3Rpb25OYW1lfT5cbiAgICAgICAgICA8TmVzdGVkQ29sbGVjdGlvblxuICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgIGZpbHRlclRlcm09e2ZpbHRlclRlcm19XG4gICAgICAgICAgICBkYXRhLXRlc3RpZD17Y29sbGVjdGlvbk5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8bGkga2V5PXtjb2xsZWN0aW9uTmFtZX0+XG4gICAgICAgIDxTaWRlYmFyTmF2TGlua1xuICAgICAgICAgIHRvPXtgL2NvbGxlY3Rpb25zLyR7Y29sbGVjdGlvbk5hbWV9YH1cbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJzaWRlYmFyLWFjdGl2ZVwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9e2NvbGxlY3Rpb25OYW1lfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gdHlwZT1cIndyaXRlXCIgLz5cbiAgICAgICAgICB7Y29sbGVjdGlvbi5nZXQoJ2xhYmVsJyl9XG4gICAgICAgIDwvU2lkZWJhck5hdkxpbms+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sbGVjdGlvbnMsIGNvbGxlY3Rpb24sIGlzU2VhcmNoRW5hYmxlZCwgc2VhcmNoVGVybSwgdCwgZmlsdGVyVGVybSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFNpZGViYXJDb250YWluZXI+XG4gICAgICAgIDxTaWRlYmFySGVhZGluZz57dCgnY29sbGVjdGlvbi5zaWRlYmFyLmNvbGxlY3Rpb25zJyl9PC9TaWRlYmFySGVhZGluZz5cbiAgICAgICAge2lzU2VhcmNoRW5hYmxlZCAmJiAoXG4gICAgICAgICAgPENvbGxlY3Rpb25TZWFyY2hcbiAgICAgICAgICAgIHNlYXJjaFRlcm09e3NlYXJjaFRlcm19XG4gICAgICAgICAgICBjb2xsZWN0aW9ucz17Y29sbGVjdGlvbnN9XG4gICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgb25TdWJtaXQ9eyhxdWVyeSwgY29sbGVjdGlvbikgPT4gc2VhcmNoQ29sbGVjdGlvbnMocXVlcnksIGNvbGxlY3Rpb24pfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxTaWRlYmFyTmF2TGlzdD5cbiAgICAgICAgICB7Y29sbGVjdGlvbnNcbiAgICAgICAgICAgIC50b0xpc3QoKVxuICAgICAgICAgICAgLmZpbHRlcihjb2xsZWN0aW9uID0+IGNvbGxlY3Rpb24uZ2V0KCdoaWRlJykgIT09IHRydWUpXG4gICAgICAgICAgICAubWFwKGNvbGxlY3Rpb24gPT4gdGhpcy5yZW5kZXJMaW5rKGNvbGxlY3Rpb24sIGZpbHRlclRlcm0pKX1cbiAgICAgICAgPC9TaWRlYmFyTmF2TGlzdD5cbiAgICAgIDwvU2lkZWJhckNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zbGF0ZSgpKFNpZGViYXIpO1xuIl19 */"))
};
const SidebarContainer = /*#__PURE__*/_styled("aside", {
  target: "e1t18l343",
  label: "SidebarContainer"
})(components.card, ";width:250px;padding:8px 0 12px;position:fixed;max-height:calc(100vh - 112px);display:flex;flex-direction:column;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vU2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnFDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vU2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3JlYWN0LXBvbHlnbG90JztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEljb24sIGNvbXBvbmVudHMsIGNvbG9ycyB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuaW1wb3J0IHsgc2VhcmNoQ29sbGVjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbGxlY3Rpb25zJztcbmltcG9ydCBDb2xsZWN0aW9uU2VhcmNoIGZyb20gJy4vQ29sbGVjdGlvblNlYXJjaCc7XG5pbXBvcnQgTmVzdGVkQ29sbGVjdGlvbiBmcm9tICcuL05lc3RlZENvbGxlY3Rpb24nO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNpZGViYXJOYXZMaW5rQWN0aXZlOiBjc3NgXG4gICAgY29sb3I6ICR7Y29sb3JzLmFjdGl2ZX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYWN0aXZlQmFja2dyb3VuZH07XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0ODYzYzY7XG4gIGAsXG59O1xuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmFzaWRlYFxuICAke2NvbXBvbmVudHMuY2FyZH07XG4gIHdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogOHB4IDAgMTJweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgU2lkZWJhckhlYWRpbmcgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xuICBjb2xvcjogJHtjb2xvcnMudGV4dExlYWR9O1xuYDtcblxuY29uc3QgU2lkZWJhck5hdkxpc3QgPSBzdHlsZWQudWxgXG4gIG1hcmdpbjogMTJweCAwIDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuYDtcblxuY29uc3QgU2lkZWJhck5hdkxpbmsgPSBzdHlsZWQoTmF2TGluaylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZjtcbiAgei1pbmRleDogLTE7XG5cbiAgJHtJY29ufSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAke3Byb3BzID0+IGNzc2BcbiAgICAmOmhvdmVyLFxuICAgICY6YWN0aXZlLFxuICAgICYuJHtwcm9wcy5hY3RpdmVDbGFzc05hbWV9IHtcbiAgICAgICR7c3R5bGVzLnNpZGViYXJOYXZMaW5rQWN0aXZlfTtcbiAgICB9XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbGxlY3Rpb25zOiBJbW11dGFibGVQcm9wVHlwZXMubWFwLmlzUmVxdWlyZWQsXG4gICAgY29sbGVjdGlvbjogSW1tdXRhYmxlUHJvcFR5cGVzLm1hcCxcbiAgICBpc1NlYXJjaEVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlYXJjaFRlcm06IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlsdGVyVGVybTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHJlbmRlckxpbmsgPSAoY29sbGVjdGlvbiwgZmlsdGVyVGVybSkgPT4ge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbi5nZXQoJ25hbWUnKTtcbiAgICBpZiAoY29sbGVjdGlvbi5oYXMoJ25lc3RlZCcpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtjb2xsZWN0aW9uTmFtZX0+XG4gICAgICAgICAgPE5lc3RlZENvbGxlY3Rpb25cbiAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICBmaWx0ZXJUZXJtPXtmaWx0ZXJUZXJtfVxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2NvbGxlY3Rpb25OYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17Y29sbGVjdGlvbk5hbWV9PlxuICAgICAgICA8U2lkZWJhck5hdkxpbmtcbiAgICAgICAgICB0bz17YC9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb25OYW1lfWB9XG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwic2lkZWJhci1hY3RpdmVcIlxuICAgICAgICAgIGRhdGEtdGVzdGlkPXtjb2xsZWN0aW9uTmFtZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIHR5cGU9XCJ3cml0ZVwiIC8+XG4gICAgICAgICAge2NvbGxlY3Rpb24uZ2V0KCdsYWJlbCcpfVxuICAgICAgICA8L1NpZGViYXJOYXZMaW5rPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb25zLCBjb2xsZWN0aW9uLCBpc1NlYXJjaEVuYWJsZWQsIHNlYXJjaFRlcm0sIHQsIGZpbHRlclRlcm0gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyQ29udGFpbmVyPlxuICAgICAgICA8U2lkZWJhckhlYWRpbmc+e3QoJ2NvbGxlY3Rpb24uc2lkZWJhci5jb2xsZWN0aW9ucycpfTwvU2lkZWJhckhlYWRpbmc+XG4gICAgICAgIHtpc1NlYXJjaEVuYWJsZWQgJiYgKFxuICAgICAgICAgIDxDb2xsZWN0aW9uU2VhcmNoXG4gICAgICAgICAgICBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfVxuICAgICAgICAgICAgY29sbGVjdGlvbnM9e2NvbGxlY3Rpb25zfVxuICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgIG9uU3VibWl0PXsocXVlcnksIGNvbGxlY3Rpb24pID0+IHNlYXJjaENvbGxlY3Rpb25zKHF1ZXJ5LCBjb2xsZWN0aW9uKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8U2lkZWJhck5hdkxpc3Q+XG4gICAgICAgICAge2NvbGxlY3Rpb25zXG4gICAgICAgICAgICAudG9MaXN0KClcbiAgICAgICAgICAgIC5maWx0ZXIoY29sbGVjdGlvbiA9PiBjb2xsZWN0aW9uLmdldCgnaGlkZScpICE9PSB0cnVlKVxuICAgICAgICAgICAgLm1hcChjb2xsZWN0aW9uID0+IHRoaXMucmVuZGVyTGluayhjb2xsZWN0aW9uLCBmaWx0ZXJUZXJtKSl9XG4gICAgICAgIDwvU2lkZWJhck5hdkxpc3Q+XG4gICAgICA8L1NpZGViYXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdGUoKShTaWRlYmFyKTtcbiJdfQ== */"));
const SidebarHeading = /*#__PURE__*/_styled("h2", {
  target: "e1t18l342",
  label: "SidebarHeading"
})("font-size:22px;font-weight:600;line-height:37px;padding:0;margin:10px 20px;color:", colors.textLead, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vU2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmdDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vU2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3JlYWN0LXBvbHlnbG90JztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEljb24sIGNvbXBvbmVudHMsIGNvbG9ycyB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuaW1wb3J0IHsgc2VhcmNoQ29sbGVjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbGxlY3Rpb25zJztcbmltcG9ydCBDb2xsZWN0aW9uU2VhcmNoIGZyb20gJy4vQ29sbGVjdGlvblNlYXJjaCc7XG5pbXBvcnQgTmVzdGVkQ29sbGVjdGlvbiBmcm9tICcuL05lc3RlZENvbGxlY3Rpb24nO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNpZGViYXJOYXZMaW5rQWN0aXZlOiBjc3NgXG4gICAgY29sb3I6ICR7Y29sb3JzLmFjdGl2ZX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYWN0aXZlQmFja2dyb3VuZH07XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0ODYzYzY7XG4gIGAsXG59O1xuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmFzaWRlYFxuICAke2NvbXBvbmVudHMuY2FyZH07XG4gIHdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogOHB4IDAgMTJweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgU2lkZWJhckhlYWRpbmcgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xuICBjb2xvcjogJHtjb2xvcnMudGV4dExlYWR9O1xuYDtcblxuY29uc3QgU2lkZWJhck5hdkxpc3QgPSBzdHlsZWQudWxgXG4gIG1hcmdpbjogMTJweCAwIDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuYDtcblxuY29uc3QgU2lkZWJhck5hdkxpbmsgPSBzdHlsZWQoTmF2TGluaylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZjtcbiAgei1pbmRleDogLTE7XG5cbiAgJHtJY29ufSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAke3Byb3BzID0+IGNzc2BcbiAgICAmOmhvdmVyLFxuICAgICY6YWN0aXZlLFxuICAgICYuJHtwcm9wcy5hY3RpdmVDbGFzc05hbWV9IHtcbiAgICAgICR7c3R5bGVzLnNpZGViYXJOYXZMaW5rQWN0aXZlfTtcbiAgICB9XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbGxlY3Rpb25zOiBJbW11dGFibGVQcm9wVHlwZXMubWFwLmlzUmVxdWlyZWQsXG4gICAgY29sbGVjdGlvbjogSW1tdXRhYmxlUHJvcFR5cGVzLm1hcCxcbiAgICBpc1NlYXJjaEVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlYXJjaFRlcm06IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlsdGVyVGVybTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHJlbmRlckxpbmsgPSAoY29sbGVjdGlvbiwgZmlsdGVyVGVybSkgPT4ge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbi5nZXQoJ25hbWUnKTtcbiAgICBpZiAoY29sbGVjdGlvbi5oYXMoJ25lc3RlZCcpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtjb2xsZWN0aW9uTmFtZX0+XG4gICAgICAgICAgPE5lc3RlZENvbGxlY3Rpb25cbiAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICBmaWx0ZXJUZXJtPXtmaWx0ZXJUZXJtfVxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2NvbGxlY3Rpb25OYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17Y29sbGVjdGlvbk5hbWV9PlxuICAgICAgICA8U2lkZWJhck5hdkxpbmtcbiAgICAgICAgICB0bz17YC9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb25OYW1lfWB9XG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwic2lkZWJhci1hY3RpdmVcIlxuICAgICAgICAgIGRhdGEtdGVzdGlkPXtjb2xsZWN0aW9uTmFtZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIHR5cGU9XCJ3cml0ZVwiIC8+XG4gICAgICAgICAge2NvbGxlY3Rpb24uZ2V0KCdsYWJlbCcpfVxuICAgICAgICA8L1NpZGViYXJOYXZMaW5rPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb25zLCBjb2xsZWN0aW9uLCBpc1NlYXJjaEVuYWJsZWQsIHNlYXJjaFRlcm0sIHQsIGZpbHRlclRlcm0gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyQ29udGFpbmVyPlxuICAgICAgICA8U2lkZWJhckhlYWRpbmc+e3QoJ2NvbGxlY3Rpb24uc2lkZWJhci5jb2xsZWN0aW9ucycpfTwvU2lkZWJhckhlYWRpbmc+XG4gICAgICAgIHtpc1NlYXJjaEVuYWJsZWQgJiYgKFxuICAgICAgICAgIDxDb2xsZWN0aW9uU2VhcmNoXG4gICAgICAgICAgICBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfVxuICAgICAgICAgICAgY29sbGVjdGlvbnM9e2NvbGxlY3Rpb25zfVxuICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgIG9uU3VibWl0PXsocXVlcnksIGNvbGxlY3Rpb24pID0+IHNlYXJjaENvbGxlY3Rpb25zKHF1ZXJ5LCBjb2xsZWN0aW9uKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8U2lkZWJhck5hdkxpc3Q+XG4gICAgICAgICAge2NvbGxlY3Rpb25zXG4gICAgICAgICAgICAudG9MaXN0KClcbiAgICAgICAgICAgIC5maWx0ZXIoY29sbGVjdGlvbiA9PiBjb2xsZWN0aW9uLmdldCgnaGlkZScpICE9PSB0cnVlKVxuICAgICAgICAgICAgLm1hcChjb2xsZWN0aW9uID0+IHRoaXMucmVuZGVyTGluayhjb2xsZWN0aW9uLCBmaWx0ZXJUZXJtKSl9XG4gICAgICAgIDwvU2lkZWJhck5hdkxpc3Q+XG4gICAgICA8L1NpZGViYXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdGUoKShTaWRlYmFyKTtcbiJdfQ== */"));
const SidebarNavList = /*#__PURE__*/_styled("ul", {
  target: "e1t18l341",
  label: "SidebarNavList"
})(process.env.NODE_ENV === "production" ? {
  name: "14vcqsr",
  styles: "margin:12px 0 0;list-style:none;overflow:auto"
} : {
  name: "14vcqsr",
  styles: "margin:12px 0 0;list-style:none;overflow:auto",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vU2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q2dDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vU2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3JlYWN0LXBvbHlnbG90JztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEljb24sIGNvbXBvbmVudHMsIGNvbG9ycyB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuaW1wb3J0IHsgc2VhcmNoQ29sbGVjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbGxlY3Rpb25zJztcbmltcG9ydCBDb2xsZWN0aW9uU2VhcmNoIGZyb20gJy4vQ29sbGVjdGlvblNlYXJjaCc7XG5pbXBvcnQgTmVzdGVkQ29sbGVjdGlvbiBmcm9tICcuL05lc3RlZENvbGxlY3Rpb24nO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNpZGViYXJOYXZMaW5rQWN0aXZlOiBjc3NgXG4gICAgY29sb3I6ICR7Y29sb3JzLmFjdGl2ZX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYWN0aXZlQmFja2dyb3VuZH07XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0ODYzYzY7XG4gIGAsXG59O1xuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmFzaWRlYFxuICAke2NvbXBvbmVudHMuY2FyZH07XG4gIHdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogOHB4IDAgMTJweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgU2lkZWJhckhlYWRpbmcgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xuICBjb2xvcjogJHtjb2xvcnMudGV4dExlYWR9O1xuYDtcblxuY29uc3QgU2lkZWJhck5hdkxpc3QgPSBzdHlsZWQudWxgXG4gIG1hcmdpbjogMTJweCAwIDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuYDtcblxuY29uc3QgU2lkZWJhck5hdkxpbmsgPSBzdHlsZWQoTmF2TGluaylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZjtcbiAgei1pbmRleDogLTE7XG5cbiAgJHtJY29ufSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAke3Byb3BzID0+IGNzc2BcbiAgICAmOmhvdmVyLFxuICAgICY6YWN0aXZlLFxuICAgICYuJHtwcm9wcy5hY3RpdmVDbGFzc05hbWV9IHtcbiAgICAgICR7c3R5bGVzLnNpZGViYXJOYXZMaW5rQWN0aXZlfTtcbiAgICB9XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbGxlY3Rpb25zOiBJbW11dGFibGVQcm9wVHlwZXMubWFwLmlzUmVxdWlyZWQsXG4gICAgY29sbGVjdGlvbjogSW1tdXRhYmxlUHJvcFR5cGVzLm1hcCxcbiAgICBpc1NlYXJjaEVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlYXJjaFRlcm06IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlsdGVyVGVybTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHJlbmRlckxpbmsgPSAoY29sbGVjdGlvbiwgZmlsdGVyVGVybSkgPT4ge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbi5nZXQoJ25hbWUnKTtcbiAgICBpZiAoY29sbGVjdGlvbi5oYXMoJ25lc3RlZCcpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtjb2xsZWN0aW9uTmFtZX0+XG4gICAgICAgICAgPE5lc3RlZENvbGxlY3Rpb25cbiAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICBmaWx0ZXJUZXJtPXtmaWx0ZXJUZXJtfVxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2NvbGxlY3Rpb25OYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17Y29sbGVjdGlvbk5hbWV9PlxuICAgICAgICA8U2lkZWJhck5hdkxpbmtcbiAgICAgICAgICB0bz17YC9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb25OYW1lfWB9XG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwic2lkZWJhci1hY3RpdmVcIlxuICAgICAgICAgIGRhdGEtdGVzdGlkPXtjb2xsZWN0aW9uTmFtZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIHR5cGU9XCJ3cml0ZVwiIC8+XG4gICAgICAgICAge2NvbGxlY3Rpb24uZ2V0KCdsYWJlbCcpfVxuICAgICAgICA8L1NpZGViYXJOYXZMaW5rPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb25zLCBjb2xsZWN0aW9uLCBpc1NlYXJjaEVuYWJsZWQsIHNlYXJjaFRlcm0sIHQsIGZpbHRlclRlcm0gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyQ29udGFpbmVyPlxuICAgICAgICA8U2lkZWJhckhlYWRpbmc+e3QoJ2NvbGxlY3Rpb24uc2lkZWJhci5jb2xsZWN0aW9ucycpfTwvU2lkZWJhckhlYWRpbmc+XG4gICAgICAgIHtpc1NlYXJjaEVuYWJsZWQgJiYgKFxuICAgICAgICAgIDxDb2xsZWN0aW9uU2VhcmNoXG4gICAgICAgICAgICBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfVxuICAgICAgICAgICAgY29sbGVjdGlvbnM9e2NvbGxlY3Rpb25zfVxuICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgIG9uU3VibWl0PXsocXVlcnksIGNvbGxlY3Rpb24pID0+IHNlYXJjaENvbGxlY3Rpb25zKHF1ZXJ5LCBjb2xsZWN0aW9uKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8U2lkZWJhck5hdkxpc3Q+XG4gICAgICAgICAge2NvbGxlY3Rpb25zXG4gICAgICAgICAgICAudG9MaXN0KClcbiAgICAgICAgICAgIC5maWx0ZXIoY29sbGVjdGlvbiA9PiBjb2xsZWN0aW9uLmdldCgnaGlkZScpICE9PSB0cnVlKVxuICAgICAgICAgICAgLm1hcChjb2xsZWN0aW9uID0+IHRoaXMucmVuZGVyTGluayhjb2xsZWN0aW9uLCBmaWx0ZXJUZXJtKSl9XG4gICAgICAgIDwvU2lkZWJhck5hdkxpc3Q+XG4gICAgICA8L1NpZGViYXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdGUoKShTaWRlYmFyKTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const SidebarNavLink = /*#__PURE__*/_styled(NavLink, {
  target: "e1t18l340",
  label: "SidebarNavLink"
})("display:flex;font-size:14px;font-weight:500;align-items:center;padding:8px 18px;border-left:2px solid #fff;z-index:-1;", Icon, "{margin-right:4px;flex-shrink:0;}", props => /*#__PURE__*/css("&:hover,&:active,&.", props.activeClassName, "{", styles.sidebarNavLinkActive, ";};label:SidebarNavLink;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vU2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGdCIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vU2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3JlYWN0LXBvbHlnbG90JztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEljb24sIGNvbXBvbmVudHMsIGNvbG9ycyB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuaW1wb3J0IHsgc2VhcmNoQ29sbGVjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbGxlY3Rpb25zJztcbmltcG9ydCBDb2xsZWN0aW9uU2VhcmNoIGZyb20gJy4vQ29sbGVjdGlvblNlYXJjaCc7XG5pbXBvcnQgTmVzdGVkQ29sbGVjdGlvbiBmcm9tICcuL05lc3RlZENvbGxlY3Rpb24nO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNpZGViYXJOYXZMaW5rQWN0aXZlOiBjc3NgXG4gICAgY29sb3I6ICR7Y29sb3JzLmFjdGl2ZX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYWN0aXZlQmFja2dyb3VuZH07XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0ODYzYzY7XG4gIGAsXG59O1xuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmFzaWRlYFxuICAke2NvbXBvbmVudHMuY2FyZH07XG4gIHdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogOHB4IDAgMTJweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgU2lkZWJhckhlYWRpbmcgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xuICBjb2xvcjogJHtjb2xvcnMudGV4dExlYWR9O1xuYDtcblxuY29uc3QgU2lkZWJhck5hdkxpc3QgPSBzdHlsZWQudWxgXG4gIG1hcmdpbjogMTJweCAwIDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuYDtcblxuY29uc3QgU2lkZWJhck5hdkxpbmsgPSBzdHlsZWQoTmF2TGluaylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZjtcbiAgei1pbmRleDogLTE7XG5cbiAgJHtJY29ufSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAke3Byb3BzID0+IGNzc2BcbiAgICAmOmhvdmVyLFxuICAgICY6YWN0aXZlLFxuICAgICYuJHtwcm9wcy5hY3RpdmVDbGFzc05hbWV9IHtcbiAgICAgICR7c3R5bGVzLnNpZGViYXJOYXZMaW5rQWN0aXZlfTtcbiAgICB9XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbGxlY3Rpb25zOiBJbW11dGFibGVQcm9wVHlwZXMubWFwLmlzUmVxdWlyZWQsXG4gICAgY29sbGVjdGlvbjogSW1tdXRhYmxlUHJvcFR5cGVzLm1hcCxcbiAgICBpc1NlYXJjaEVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlYXJjaFRlcm06IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlsdGVyVGVybTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHJlbmRlckxpbmsgPSAoY29sbGVjdGlvbiwgZmlsdGVyVGVybSkgPT4ge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbi5nZXQoJ25hbWUnKTtcbiAgICBpZiAoY29sbGVjdGlvbi5oYXMoJ25lc3RlZCcpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtjb2xsZWN0aW9uTmFtZX0+XG4gICAgICAgICAgPE5lc3RlZENvbGxlY3Rpb25cbiAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICBmaWx0ZXJUZXJtPXtmaWx0ZXJUZXJtfVxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2NvbGxlY3Rpb25OYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17Y29sbGVjdGlvbk5hbWV9PlxuICAgICAgICA8U2lkZWJhck5hdkxpbmtcbiAgICAgICAgICB0bz17YC9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb25OYW1lfWB9XG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwic2lkZWJhci1hY3RpdmVcIlxuICAgICAgICAgIGRhdGEtdGVzdGlkPXtjb2xsZWN0aW9uTmFtZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIHR5cGU9XCJ3cml0ZVwiIC8+XG4gICAgICAgICAge2NvbGxlY3Rpb24uZ2V0KCdsYWJlbCcpfVxuICAgICAgICA8L1NpZGViYXJOYXZMaW5rPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb25zLCBjb2xsZWN0aW9uLCBpc1NlYXJjaEVuYWJsZWQsIHNlYXJjaFRlcm0sIHQsIGZpbHRlclRlcm0gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyQ29udGFpbmVyPlxuICAgICAgICA8U2lkZWJhckhlYWRpbmc+e3QoJ2NvbGxlY3Rpb24uc2lkZWJhci5jb2xsZWN0aW9ucycpfTwvU2lkZWJhckhlYWRpbmc+XG4gICAgICAgIHtpc1NlYXJjaEVuYWJsZWQgJiYgKFxuICAgICAgICAgIDxDb2xsZWN0aW9uU2VhcmNoXG4gICAgICAgICAgICBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfVxuICAgICAgICAgICAgY29sbGVjdGlvbnM9e2NvbGxlY3Rpb25zfVxuICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgIG9uU3VibWl0PXsocXVlcnksIGNvbGxlY3Rpb24pID0+IHNlYXJjaENvbGxlY3Rpb25zKHF1ZXJ5LCBjb2xsZWN0aW9uKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8U2lkZWJhck5hdkxpc3Q+XG4gICAgICAgICAge2NvbGxlY3Rpb25zXG4gICAgICAgICAgICAudG9MaXN0KClcbiAgICAgICAgICAgIC5maWx0ZXIoY29sbGVjdGlvbiA9PiBjb2xsZWN0aW9uLmdldCgnaGlkZScpICE9PSB0cnVlKVxuICAgICAgICAgICAgLm1hcChjb2xsZWN0aW9uID0+IHRoaXMucmVuZGVyTGluayhjb2xsZWN0aW9uLCBmaWx0ZXJUZXJtKSl9XG4gICAgICAgIDwvU2lkZWJhck5hdkxpc3Q+XG4gICAgICA8L1NpZGViYXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdGUoKShTaWRlYmFyKTtcbiJdfQ== */")), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vU2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q3NDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vU2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3JlYWN0LXBvbHlnbG90JztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEljb24sIGNvbXBvbmVudHMsIGNvbG9ycyB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuaW1wb3J0IHsgc2VhcmNoQ29sbGVjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbGxlY3Rpb25zJztcbmltcG9ydCBDb2xsZWN0aW9uU2VhcmNoIGZyb20gJy4vQ29sbGVjdGlvblNlYXJjaCc7XG5pbXBvcnQgTmVzdGVkQ29sbGVjdGlvbiBmcm9tICcuL05lc3RlZENvbGxlY3Rpb24nO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNpZGViYXJOYXZMaW5rQWN0aXZlOiBjc3NgXG4gICAgY29sb3I6ICR7Y29sb3JzLmFjdGl2ZX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYWN0aXZlQmFja2dyb3VuZH07XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0ODYzYzY7XG4gIGAsXG59O1xuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmFzaWRlYFxuICAke2NvbXBvbmVudHMuY2FyZH07XG4gIHdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogOHB4IDAgMTJweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgU2lkZWJhckhlYWRpbmcgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xuICBjb2xvcjogJHtjb2xvcnMudGV4dExlYWR9O1xuYDtcblxuY29uc3QgU2lkZWJhck5hdkxpc3QgPSBzdHlsZWQudWxgXG4gIG1hcmdpbjogMTJweCAwIDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuYDtcblxuY29uc3QgU2lkZWJhck5hdkxpbmsgPSBzdHlsZWQoTmF2TGluaylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZjtcbiAgei1pbmRleDogLTE7XG5cbiAgJHtJY29ufSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAke3Byb3BzID0+IGNzc2BcbiAgICAmOmhvdmVyLFxuICAgICY6YWN0aXZlLFxuICAgICYuJHtwcm9wcy5hY3RpdmVDbGFzc05hbWV9IHtcbiAgICAgICR7c3R5bGVzLnNpZGViYXJOYXZMaW5rQWN0aXZlfTtcbiAgICB9XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbGxlY3Rpb25zOiBJbW11dGFibGVQcm9wVHlwZXMubWFwLmlzUmVxdWlyZWQsXG4gICAgY29sbGVjdGlvbjogSW1tdXRhYmxlUHJvcFR5cGVzLm1hcCxcbiAgICBpc1NlYXJjaEVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlYXJjaFRlcm06IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlsdGVyVGVybTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHJlbmRlckxpbmsgPSAoY29sbGVjdGlvbiwgZmlsdGVyVGVybSkgPT4ge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbi5nZXQoJ25hbWUnKTtcbiAgICBpZiAoY29sbGVjdGlvbi5oYXMoJ25lc3RlZCcpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtjb2xsZWN0aW9uTmFtZX0+XG4gICAgICAgICAgPE5lc3RlZENvbGxlY3Rpb25cbiAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICBmaWx0ZXJUZXJtPXtmaWx0ZXJUZXJtfVxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2NvbGxlY3Rpb25OYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17Y29sbGVjdGlvbk5hbWV9PlxuICAgICAgICA8U2lkZWJhck5hdkxpbmtcbiAgICAgICAgICB0bz17YC9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb25OYW1lfWB9XG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwic2lkZWJhci1hY3RpdmVcIlxuICAgICAgICAgIGRhdGEtdGVzdGlkPXtjb2xsZWN0aW9uTmFtZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIHR5cGU9XCJ3cml0ZVwiIC8+XG4gICAgICAgICAge2NvbGxlY3Rpb24uZ2V0KCdsYWJlbCcpfVxuICAgICAgICA8L1NpZGViYXJOYXZMaW5rPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb25zLCBjb2xsZWN0aW9uLCBpc1NlYXJjaEVuYWJsZWQsIHNlYXJjaFRlcm0sIHQsIGZpbHRlclRlcm0gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyQ29udGFpbmVyPlxuICAgICAgICA8U2lkZWJhckhlYWRpbmc+e3QoJ2NvbGxlY3Rpb24uc2lkZWJhci5jb2xsZWN0aW9ucycpfTwvU2lkZWJhckhlYWRpbmc+XG4gICAgICAgIHtpc1NlYXJjaEVuYWJsZWQgJiYgKFxuICAgICAgICAgIDxDb2xsZWN0aW9uU2VhcmNoXG4gICAgICAgICAgICBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfVxuICAgICAgICAgICAgY29sbGVjdGlvbnM9e2NvbGxlY3Rpb25zfVxuICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgIG9uU3VibWl0PXsocXVlcnksIGNvbGxlY3Rpb24pID0+IHNlYXJjaENvbGxlY3Rpb25zKHF1ZXJ5LCBjb2xsZWN0aW9uKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8U2lkZWJhck5hdkxpc3Q+XG4gICAgICAgICAge2NvbGxlY3Rpb25zXG4gICAgICAgICAgICAudG9MaXN0KClcbiAgICAgICAgICAgIC5maWx0ZXIoY29sbGVjdGlvbiA9PiBjb2xsZWN0aW9uLmdldCgnaGlkZScpICE9PSB0cnVlKVxuICAgICAgICAgICAgLm1hcChjb2xsZWN0aW9uID0+IHRoaXMucmVuZGVyTGluayhjb2xsZWN0aW9uLCBmaWx0ZXJUZXJtKSl9XG4gICAgICAgIDwvU2lkZWJhck5hdkxpc3Q+XG4gICAgICA8L1NpZGViYXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdGUoKShTaWRlYmFyKTtcbiJdfQ== */"));
export class Sidebar extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "renderLink", (collection, filterTerm) => {
      const collectionName = collection.get('name');
      if (collection.has('nested')) {
        return ___EmotionJSX("li", {
          key: collectionName
        }, ___EmotionJSX(NestedCollection, {
          collection: collection,
          filterTerm: filterTerm,
          "data-testid": collectionName
        }));
      }
      return ___EmotionJSX("li", {
        key: collectionName
      }, ___EmotionJSX(SidebarNavLink, {
        to: `/collections/${collectionName}`,
        activeClassName: "sidebar-active",
        "data-testid": collectionName
      }, ___EmotionJSX(Icon, {
        type: "write"
      }), collection.get('label')));
    });
  }
  render() {
    const {
      collections,
      collection,
      isSearchEnabled,
      searchTerm,
      t,
      filterTerm
    } = this.props;
    return ___EmotionJSX(SidebarContainer, null, ___EmotionJSX(SidebarHeading, null, t('collection.sidebar.collections')), isSearchEnabled && ___EmotionJSX(CollectionSearch, {
      searchTerm: searchTerm,
      collections: collections,
      collection: collection,
      onSubmit: (query, collection) => searchCollections(query, collection)
    }), ___EmotionJSX(SidebarNavList, null, collections.toList().filter(collection => collection.get('hide') !== true).map(collection => this.renderLink(collection, filterTerm))));
  }
}
_defineProperty(Sidebar, "propTypes", {
  collections: ImmutablePropTypes.map.isRequired,
  collection: ImmutablePropTypes.map,
  isSearchEnabled: PropTypes.bool,
  searchTerm: PropTypes.string,
  filterTerm: PropTypes.string,
  t: PropTypes.func.isRequired
});
export default translate()(Sidebar);