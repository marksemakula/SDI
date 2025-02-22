import _styled from "@emotion/styled/base";
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import copyToClipboard from 'copy-text-to-clipboard';
import { isAbsolutePath } from 'decap-cms-lib-util';
import { buttons, shadows, zIndex } from 'decap-cms-ui-default';
import { FileUploadButton } from '../UI';
import { jsx as ___EmotionJSX } from "@emotion/react";
const styles = {
  button: /*#__PURE__*/css(buttons.button, ";", buttons.default, ";display:inline-block;margin-left:15px;margin-right:2px;&[disabled]{", buttons.disabled, ";cursor:default;};label:button;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lZGlhTGlicmFyeS9NZWRpYUxpYnJhcnlCdXR0b25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdhIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lZGlhTGlicmFyeS9NZWRpYUxpYnJhcnlCdXR0b25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgY29weVRvQ2xpcGJvYXJkIGZyb20gJ2NvcHktdGV4dC10by1jbGlwYm9hcmQnO1xuaW1wb3J0IHsgaXNBYnNvbHV0ZVBhdGggfSBmcm9tICdkZWNhcC1jbXMtbGliLXV0aWwnO1xuaW1wb3J0IHsgYnV0dG9ucywgc2hhZG93cywgekluZGV4IH0gZnJvbSAnZGVjYXAtY21zLXVpLWRlZmF1bHQnO1xuXG5pbXBvcnQgeyBGaWxlVXBsb2FkQnV0dG9uIH0gZnJvbSAnLi4vVUknO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJ1dHRvbjogY3NzYFxuICAgICR7YnV0dG9ucy5idXR0b259O1xuICAgICR7YnV0dG9ucy5kZWZhdWx0fTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAke2J1dHRvbnMuZGlzYWJsZWR9O1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cbiAgYCxcbn07XG5cbmV4cG9ydCBjb25zdCBVcGxvYWRCdXR0b24gPSBzdHlsZWQoRmlsZVVwbG9hZEJ1dHRvbilgXG4gICR7c3R5bGVzLmJ1dHRvbn07XG4gICR7YnV0dG9ucy5ncmF5fTtcbiAgJHtzaGFkb3dzLmRyb3BNYWlufTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgaGVpZ2h0OiAwLjFweDtcbiAgICB3aWR0aDogMC4xcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAke3pJbmRleC56SW5kZXgwfTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGVsZXRlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtzdHlsZXMuYnV0dG9ufTtcbiAgJHtidXR0b25zLmxpZ2h0UmVkfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnNlcnRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke3N0eWxlcy5idXR0b259O1xuICAke2J1dHRvbnMuZ3JlZW59O1xuYDtcblxuY29uc3QgQWN0aW9uQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtzdHlsZXMuYnV0dG9ufTtcbiAgJHtwcm9wcyA9PlxuICAgICFwcm9wcy5kaXNhYmxlZCAmJlxuICAgIGNzc2BcbiAgICAgICR7YnV0dG9ucy5ncmF5fVxuICAgIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgRG93bmxvYWRCdXR0b24gPSBBY3Rpb25CdXR0b247XG5cbmV4cG9ydCBjbGFzcyBDb3B5VG9DbGlwQm9hcmRCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBtb3VudGVkID0gZmFsc2U7XG4gIHRpbWVvdXQ7XG5cbiAgc3RhdGUgPSB7XG4gICAgY29waWVkOiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBoYW5kbGVDb3B5ID0gKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIGNvbnN0IHsgcGF0aCwgZHJhZnQsIG5hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29weVRvQ2xpcGJvYXJkKGlzQWJzb2x1dGVQYXRoKHBhdGgpIHx8ICFkcmFmdCA/IHBhdGggOiBuYW1lKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29waWVkOiB0cnVlIH0pO1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5tb3VudGVkICYmIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWQ6IGZhbHNlIH0pLCAxNTAwKTtcbiAgfTtcblxuICBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHQsIHBhdGgsIGRyYWZ0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0aGlzLnN0YXRlLmNvcGllZCkge1xuICAgICAgcmV0dXJuIHQoJ21lZGlhTGlicmFyeS5tZWRpYUxpYnJhcnlDYXJkLmNvcGllZCcpO1xuICAgIH1cblxuICAgIGlmICghcGF0aCkge1xuICAgICAgcmV0dXJuIHQoJ21lZGlhTGlicmFyeS5tZWRpYUxpYnJhcnlDYXJkLmNvcHknKTtcbiAgICB9XG5cbiAgICBpZiAoaXNBYnNvbHV0ZVBhdGgocGF0aCkpIHtcbiAgICAgIHJldHVybiB0KCdtZWRpYUxpYnJhcnkubWVkaWFMaWJyYXJ5Q2FyZC5jb3B5VXJsJyk7XG4gICAgfVxuXG4gICAgaWYgKGRyYWZ0KSB7XG4gICAgICByZXR1cm4gdCgnbWVkaWFMaWJyYXJ5Lm1lZGlhTGlicmFyeUNhcmQuY29weU5hbWUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdCgnbWVkaWFMaWJyYXJ5Lm1lZGlhTGlicmFyeUNhcmQuY29weVBhdGgnKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QWN0aW9uQnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0gb25DbGljaz17dGhpcy5oYW5kbGVDb3B5fT5cbiAgICAgICAge3RoaXMuZ2V0VGl0bGUoKX1cbiAgICAgIDwvQWN0aW9uQnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuQ29weVRvQ2xpcEJvYXJkQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGRyYWZ0OiBQcm9wVHlwZXMuYm9vbCxcbiAgcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iXX0= */"))
};
export const UploadButton = /*#__PURE__*/_styled(FileUploadButton, {
  target: "e288rjk3",
  label: "UploadButton"
})(styles.button, ";", buttons.gray, ";", shadows.dropMain, ";margin-bottom:0;span{font-size:14px;font-weight:500;display:flex;justify-content:center;align-items:center;}input{height:0.1px;width:0.1px;margin:0;padding:0;opacity:0;overflow:hidden;position:absolute;z-index:", zIndex.zIndex0, ";outline:none;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lZGlhTGlicmFyeS9NZWRpYUxpYnJhcnlCdXR0b25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCb0QiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVkaWFMaWJyYXJ5L01lZGlhTGlicmFyeUJ1dHRvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBjb3B5VG9DbGlwYm9hcmQgZnJvbSAnY29weS10ZXh0LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgeyBpc0Fic29sdXRlUGF0aCB9IGZyb20gJ2RlY2FwLWNtcy1saWItdXRpbCc7XG5pbXBvcnQgeyBidXR0b25zLCBzaGFkb3dzLCB6SW5kZXggfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5cbmltcG9ydCB7IEZpbGVVcGxvYWRCdXR0b24gfSBmcm9tICcuLi9VSSc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYnV0dG9uOiBjc3NgXG4gICAgJHtidXR0b25zLmJ1dHRvbn07XG4gICAgJHtidXR0b25zLmRlZmF1bHR9O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICR7YnV0dG9ucy5kaXNhYmxlZH07XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuICBgLFxufTtcblxuZXhwb3J0IGNvbnN0IFVwbG9hZEJ1dHRvbiA9IHN0eWxlZChGaWxlVXBsb2FkQnV0dG9uKWBcbiAgJHtzdHlsZXMuYnV0dG9ufTtcbiAgJHtidXR0b25zLmdyYXl9O1xuICAke3NoYWRvd3MuZHJvcE1haW59O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBoZWlnaHQ6IDAuMXB4O1xuICAgIHdpZHRoOiAwLjFweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICR7ekluZGV4LnpJbmRleDB9O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke3N0eWxlcy5idXR0b259O1xuICAke2J1dHRvbnMubGlnaHRSZWR9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEluc2VydEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICR7c3R5bGVzLmJ1dHRvbn07XG4gICR7YnV0dG9ucy5ncmVlbn07XG5gO1xuXG5jb25zdCBBY3Rpb25CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke3N0eWxlcy5idXR0b259O1xuICAke3Byb3BzID0+XG4gICAgIXByb3BzLmRpc2FibGVkICYmXG4gICAgY3NzYFxuICAgICAgJHtidXR0b25zLmdyYXl9XG4gICAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEb3dubG9hZEJ1dHRvbiA9IEFjdGlvbkJ1dHRvbjtcblxuZXhwb3J0IGNsYXNzIENvcHlUb0NsaXBCb2FyZEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIG1vdW50ZWQgPSBmYWxzZTtcbiAgdGltZW91dDtcblxuICBzdGF0ZSA9IHtcbiAgICBjb3BpZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZUNvcHkgPSAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgY29uc3QgeyBwYXRoLCBkcmFmdCwgbmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb3B5VG9DbGlwYm9hcmQoaXNBYnNvbHV0ZVBhdGgocGF0aCkgfHwgIWRyYWZ0ID8gcGF0aCA6IG5hbWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWQ6IHRydWUgfSk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLm1vdW50ZWQgJiYgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZDogZmFsc2UgfSksIDE1MDApO1xuICB9O1xuXG4gIGdldFRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdCwgcGF0aCwgZHJhZnQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29waWVkKSB7XG4gICAgICByZXR1cm4gdCgnbWVkaWFMaWJyYXJ5Lm1lZGlhTGlicmFyeUNhcmQuY29waWVkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICByZXR1cm4gdCgnbWVkaWFMaWJyYXJ5Lm1lZGlhTGlicmFyeUNhcmQuY29weScpO1xuICAgIH1cblxuICAgIGlmIChpc0Fic29sdXRlUGF0aChwYXRoKSkge1xuICAgICAgcmV0dXJuIHQoJ21lZGlhTGlicmFyeS5tZWRpYUxpYnJhcnlDYXJkLmNvcHlVcmwnKTtcbiAgICB9XG5cbiAgICBpZiAoZHJhZnQpIHtcbiAgICAgIHJldHVybiB0KCdtZWRpYUxpYnJhcnkubWVkaWFMaWJyYXJ5Q2FyZC5jb3B5TmFtZScpO1xuICAgIH1cblxuICAgIHJldHVybiB0KCdtZWRpYUxpYnJhcnkubWVkaWFMaWJyYXJ5Q2FyZC5jb3B5UGF0aCcpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBY3Rpb25CdXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvcHl9PlxuICAgICAgICB7dGhpcy5nZXRUaXRsZSgpfVxuICAgICAgPC9BY3Rpb25CdXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5Db3B5VG9DbGlwQm9hcmRCdXR0b24ucHJvcFR5cGVzID0ge1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgZHJhZnQ6IFByb3BUeXBlcy5ib29sLFxuICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiJdfQ== */"));
export const DeleteButton = /*#__PURE__*/_styled("button", {
  target: "e288rjk2",
  label: "DeleteButton"
})(styles.button, ";", buttons.lightRed, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lZGlhTGlicmFyeS9NZWRpYUxpYnJhcnlCdXR0b25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EeUMiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVkaWFMaWJyYXJ5L01lZGlhTGlicmFyeUJ1dHRvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBjb3B5VG9DbGlwYm9hcmQgZnJvbSAnY29weS10ZXh0LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgeyBpc0Fic29sdXRlUGF0aCB9IGZyb20gJ2RlY2FwLWNtcy1saWItdXRpbCc7XG5pbXBvcnQgeyBidXR0b25zLCBzaGFkb3dzLCB6SW5kZXggfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5cbmltcG9ydCB7IEZpbGVVcGxvYWRCdXR0b24gfSBmcm9tICcuLi9VSSc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYnV0dG9uOiBjc3NgXG4gICAgJHtidXR0b25zLmJ1dHRvbn07XG4gICAgJHtidXR0b25zLmRlZmF1bHR9O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICR7YnV0dG9ucy5kaXNhYmxlZH07XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuICBgLFxufTtcblxuZXhwb3J0IGNvbnN0IFVwbG9hZEJ1dHRvbiA9IHN0eWxlZChGaWxlVXBsb2FkQnV0dG9uKWBcbiAgJHtzdHlsZXMuYnV0dG9ufTtcbiAgJHtidXR0b25zLmdyYXl9O1xuICAke3NoYWRvd3MuZHJvcE1haW59O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBoZWlnaHQ6IDAuMXB4O1xuICAgIHdpZHRoOiAwLjFweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICR7ekluZGV4LnpJbmRleDB9O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke3N0eWxlcy5idXR0b259O1xuICAke2J1dHRvbnMubGlnaHRSZWR9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEluc2VydEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICR7c3R5bGVzLmJ1dHRvbn07XG4gICR7YnV0dG9ucy5ncmVlbn07XG5gO1xuXG5jb25zdCBBY3Rpb25CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke3N0eWxlcy5idXR0b259O1xuICAke3Byb3BzID0+XG4gICAgIXByb3BzLmRpc2FibGVkICYmXG4gICAgY3NzYFxuICAgICAgJHtidXR0b25zLmdyYXl9XG4gICAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEb3dubG9hZEJ1dHRvbiA9IEFjdGlvbkJ1dHRvbjtcblxuZXhwb3J0IGNsYXNzIENvcHlUb0NsaXBCb2FyZEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIG1vdW50ZWQgPSBmYWxzZTtcbiAgdGltZW91dDtcblxuICBzdGF0ZSA9IHtcbiAgICBjb3BpZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZUNvcHkgPSAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgY29uc3QgeyBwYXRoLCBkcmFmdCwgbmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb3B5VG9DbGlwYm9hcmQoaXNBYnNvbHV0ZVBhdGgocGF0aCkgfHwgIWRyYWZ0ID8gcGF0aCA6IG5hbWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWQ6IHRydWUgfSk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLm1vdW50ZWQgJiYgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZDogZmFsc2UgfSksIDE1MDApO1xuICB9O1xuXG4gIGdldFRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdCwgcGF0aCwgZHJhZnQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29waWVkKSB7XG4gICAgICByZXR1cm4gdCgnbWVkaWFMaWJyYXJ5Lm1lZGlhTGlicmFyeUNhcmQuY29waWVkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICByZXR1cm4gdCgnbWVkaWFMaWJyYXJ5Lm1lZGlhTGlicmFyeUNhcmQuY29weScpO1xuICAgIH1cblxuICAgIGlmIChpc0Fic29sdXRlUGF0aChwYXRoKSkge1xuICAgICAgcmV0dXJuIHQoJ21lZGlhTGlicmFyeS5tZWRpYUxpYnJhcnlDYXJkLmNvcHlVcmwnKTtcbiAgICB9XG5cbiAgICBpZiAoZHJhZnQpIHtcbiAgICAgIHJldHVybiB0KCdtZWRpYUxpYnJhcnkubWVkaWFMaWJyYXJ5Q2FyZC5jb3B5TmFtZScpO1xuICAgIH1cblxuICAgIHJldHVybiB0KCdtZWRpYUxpYnJhcnkubWVkaWFMaWJyYXJ5Q2FyZC5jb3B5UGF0aCcpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBY3Rpb25CdXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvcHl9PlxuICAgICAgICB7dGhpcy5nZXRUaXRsZSgpfVxuICAgICAgPC9BY3Rpb25CdXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5Db3B5VG9DbGlwQm9hcmRCdXR0b24ucHJvcFR5cGVzID0ge1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgZHJhZnQ6IFByb3BUeXBlcy5ib29sLFxuICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiJdfQ== */"));
export const InsertButton = /*#__PURE__*/_styled("button", {
  target: "e288rjk1",
  label: "InsertButton"
})(styles.button, ";", buttons.green, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lZGlhTGlicmFyeS9NZWRpYUxpYnJhcnlCdXR0b25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEeUMiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVkaWFMaWJyYXJ5L01lZGlhTGlicmFyeUJ1dHRvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBjb3B5VG9DbGlwYm9hcmQgZnJvbSAnY29weS10ZXh0LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgeyBpc0Fic29sdXRlUGF0aCB9IGZyb20gJ2RlY2FwLWNtcy1saWItdXRpbCc7XG5pbXBvcnQgeyBidXR0b25zLCBzaGFkb3dzLCB6SW5kZXggfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5cbmltcG9ydCB7IEZpbGVVcGxvYWRCdXR0b24gfSBmcm9tICcuLi9VSSc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYnV0dG9uOiBjc3NgXG4gICAgJHtidXR0b25zLmJ1dHRvbn07XG4gICAgJHtidXR0b25zLmRlZmF1bHR9O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICR7YnV0dG9ucy5kaXNhYmxlZH07XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuICBgLFxufTtcblxuZXhwb3J0IGNvbnN0IFVwbG9hZEJ1dHRvbiA9IHN0eWxlZChGaWxlVXBsb2FkQnV0dG9uKWBcbiAgJHtzdHlsZXMuYnV0dG9ufTtcbiAgJHtidXR0b25zLmdyYXl9O1xuICAke3NoYWRvd3MuZHJvcE1haW59O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBoZWlnaHQ6IDAuMXB4O1xuICAgIHdpZHRoOiAwLjFweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICR7ekluZGV4LnpJbmRleDB9O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke3N0eWxlcy5idXR0b259O1xuICAke2J1dHRvbnMubGlnaHRSZWR9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEluc2VydEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICR7c3R5bGVzLmJ1dHRvbn07XG4gICR7YnV0dG9ucy5ncmVlbn07XG5gO1xuXG5jb25zdCBBY3Rpb25CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke3N0eWxlcy5idXR0b259O1xuICAke3Byb3BzID0+XG4gICAgIXByb3BzLmRpc2FibGVkICYmXG4gICAgY3NzYFxuICAgICAgJHtidXR0b25zLmdyYXl9XG4gICAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEb3dubG9hZEJ1dHRvbiA9IEFjdGlvbkJ1dHRvbjtcblxuZXhwb3J0IGNsYXNzIENvcHlUb0NsaXBCb2FyZEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIG1vdW50ZWQgPSBmYWxzZTtcbiAgdGltZW91dDtcblxuICBzdGF0ZSA9IHtcbiAgICBjb3BpZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZUNvcHkgPSAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgY29uc3QgeyBwYXRoLCBkcmFmdCwgbmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb3B5VG9DbGlwYm9hcmQoaXNBYnNvbHV0ZVBhdGgocGF0aCkgfHwgIWRyYWZ0ID8gcGF0aCA6IG5hbWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWQ6IHRydWUgfSk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLm1vdW50ZWQgJiYgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZDogZmFsc2UgfSksIDE1MDApO1xuICB9O1xuXG4gIGdldFRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdCwgcGF0aCwgZHJhZnQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29waWVkKSB7XG4gICAgICByZXR1cm4gdCgnbWVkaWFMaWJyYXJ5Lm1lZGlhTGlicmFyeUNhcmQuY29waWVkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICByZXR1cm4gdCgnbWVkaWFMaWJyYXJ5Lm1lZGlhTGlicmFyeUNhcmQuY29weScpO1xuICAgIH1cblxuICAgIGlmIChpc0Fic29sdXRlUGF0aChwYXRoKSkge1xuICAgICAgcmV0dXJuIHQoJ21lZGlhTGlicmFyeS5tZWRpYUxpYnJhcnlDYXJkLmNvcHlVcmwnKTtcbiAgICB9XG5cbiAgICBpZiAoZHJhZnQpIHtcbiAgICAgIHJldHVybiB0KCdtZWRpYUxpYnJhcnkubWVkaWFMaWJyYXJ5Q2FyZC5jb3B5TmFtZScpO1xuICAgIH1cblxuICAgIHJldHVybiB0KCdtZWRpYUxpYnJhcnkubWVkaWFMaWJyYXJ5Q2FyZC5jb3B5UGF0aCcpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBY3Rpb25CdXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvcHl9PlxuICAgICAgICB7dGhpcy5nZXRUaXRsZSgpfVxuICAgICAgPC9BY3Rpb25CdXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5Db3B5VG9DbGlwQm9hcmRCdXR0b24ucHJvcFR5cGVzID0ge1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgZHJhZnQ6IFByb3BUeXBlcy5ib29sLFxuICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiJdfQ== */"));
const ActionButton = /*#__PURE__*/_styled("button", {
  target: "e288rjk0",
  label: "ActionButton"
})(styles.button, ";", props => !props.disabled && /*#__PURE__*/css(buttons.gray, ";;label:ActionButton;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lZGlhTGlicmFyeS9NZWRpYUxpYnJhcnlCdXR0b25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFTyIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9NZWRpYUxpYnJhcnkvTWVkaWFMaWJyYXJ5QnV0dG9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IGNvcHlUb0NsaXBib2FyZCBmcm9tICdjb3B5LXRleHQtdG8tY2xpcGJvYXJkJztcbmltcG9ydCB7IGlzQWJzb2x1dGVQYXRoIH0gZnJvbSAnZGVjYXAtY21zLWxpYi11dGlsJztcbmltcG9ydCB7IGJ1dHRvbnMsIHNoYWRvd3MsIHpJbmRleCB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuaW1wb3J0IHsgRmlsZVVwbG9hZEJ1dHRvbiB9IGZyb20gJy4uL1VJJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBidXR0b246IGNzc2BcbiAgICAke2J1dHRvbnMuYnV0dG9ufTtcbiAgICAke2J1dHRvbnMuZGVmYXVsdH07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJHtidXR0b25zLmRpc2FibGVkfTtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG4gIGAsXG59O1xuXG5leHBvcnQgY29uc3QgVXBsb2FkQnV0dG9uID0gc3R5bGVkKEZpbGVVcGxvYWRCdXR0b24pYFxuICAke3N0eWxlcy5idXR0b259O1xuICAke2J1dHRvbnMuZ3JheX07XG4gICR7c2hhZG93cy5kcm9wTWFpbn07XG4gIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIGhlaWdodDogMC4xcHg7XG4gICAgd2lkdGg6IDAuMXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJHt6SW5kZXguekluZGV4MH07XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICR7c3R5bGVzLmJ1dHRvbn07XG4gICR7YnV0dG9ucy5saWdodFJlZH07XG5gO1xuXG5leHBvcnQgY29uc3QgSW5zZXJ0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtzdHlsZXMuYnV0dG9ufTtcbiAgJHtidXR0b25zLmdyZWVufTtcbmA7XG5cbmNvbnN0IEFjdGlvbkJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICR7c3R5bGVzLmJ1dHRvbn07XG4gICR7cHJvcHMgPT5cbiAgICAhcHJvcHMuZGlzYWJsZWQgJiZcbiAgICBjc3NgXG4gICAgICAke2J1dHRvbnMuZ3JheX1cbiAgICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERvd25sb2FkQnV0dG9uID0gQWN0aW9uQnV0dG9uO1xuXG5leHBvcnQgY2xhc3MgQ29weVRvQ2xpcEJvYXJkQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgbW91bnRlZCA9IGZhbHNlO1xuICB0aW1lb3V0O1xuXG4gIHN0YXRlID0ge1xuICAgIGNvcGllZDogZmFsc2UsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgaGFuZGxlQ29weSA9ICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICBjb25zdCB7IHBhdGgsIGRyYWZ0LCBuYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvcHlUb0NsaXBib2FyZChpc0Fic29sdXRlUGF0aChwYXRoKSB8fCAhZHJhZnQgPyBwYXRoIDogbmFtZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZDogdHJ1ZSB9KTtcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMubW91bnRlZCAmJiB0aGlzLnNldFN0YXRlKHsgY29waWVkOiBmYWxzZSB9KSwgMTUwMCk7XG4gIH07XG5cbiAgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0LCBwYXRoLCBkcmFmdCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodGhpcy5zdGF0ZS5jb3BpZWQpIHtcbiAgICAgIHJldHVybiB0KCdtZWRpYUxpYnJhcnkubWVkaWFMaWJyYXJ5Q2FyZC5jb3BpZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIHJldHVybiB0KCdtZWRpYUxpYnJhcnkubWVkaWFMaWJyYXJ5Q2FyZC5jb3B5Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzQWJzb2x1dGVQYXRoKHBhdGgpKSB7XG4gICAgICByZXR1cm4gdCgnbWVkaWFMaWJyYXJ5Lm1lZGlhTGlicmFyeUNhcmQuY29weVVybCcpO1xuICAgIH1cblxuICAgIGlmIChkcmFmdCkge1xuICAgICAgcmV0dXJuIHQoJ21lZGlhTGlicmFyeS5tZWRpYUxpYnJhcnlDYXJkLmNvcHlOYW1lJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHQoJ21lZGlhTGlicmFyeS5tZWRpYUxpYnJhcnlDYXJkLmNvcHlQYXRoJyk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFjdGlvbkJ1dHRvbiBkaXNhYmxlZD17ZGlzYWJsZWR9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ29weX0+XG4gICAgICAgIHt0aGlzLmdldFRpdGxlKCl9XG4gICAgICA8L0FjdGlvbkJ1dHRvbj5cbiAgICApO1xuICB9XG59XG5cbkNvcHlUb0NsaXBCb2FyZEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBkcmFmdDogUHJvcFR5cGVzLmJvb2wsXG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIl19 */")), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lZGlhTGlicmFyeS9NZWRpYUxpYnJhcnlCdXR0b25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEa0MiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVkaWFMaWJyYXJ5L01lZGlhTGlicmFyeUJ1dHRvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBjb3B5VG9DbGlwYm9hcmQgZnJvbSAnY29weS10ZXh0LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgeyBpc0Fic29sdXRlUGF0aCB9IGZyb20gJ2RlY2FwLWNtcy1saWItdXRpbCc7XG5pbXBvcnQgeyBidXR0b25zLCBzaGFkb3dzLCB6SW5kZXggfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5cbmltcG9ydCB7IEZpbGVVcGxvYWRCdXR0b24gfSBmcm9tICcuLi9VSSc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYnV0dG9uOiBjc3NgXG4gICAgJHtidXR0b25zLmJ1dHRvbn07XG4gICAgJHtidXR0b25zLmRlZmF1bHR9O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICR7YnV0dG9ucy5kaXNhYmxlZH07XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuICBgLFxufTtcblxuZXhwb3J0IGNvbnN0IFVwbG9hZEJ1dHRvbiA9IHN0eWxlZChGaWxlVXBsb2FkQnV0dG9uKWBcbiAgJHtzdHlsZXMuYnV0dG9ufTtcbiAgJHtidXR0b25zLmdyYXl9O1xuICAke3NoYWRvd3MuZHJvcE1haW59O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBoZWlnaHQ6IDAuMXB4O1xuICAgIHdpZHRoOiAwLjFweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICR7ekluZGV4LnpJbmRleDB9O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke3N0eWxlcy5idXR0b259O1xuICAke2J1dHRvbnMubGlnaHRSZWR9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEluc2VydEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICR7c3R5bGVzLmJ1dHRvbn07XG4gICR7YnV0dG9ucy5ncmVlbn07XG5gO1xuXG5jb25zdCBBY3Rpb25CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke3N0eWxlcy5idXR0b259O1xuICAke3Byb3BzID0+XG4gICAgIXByb3BzLmRpc2FibGVkICYmXG4gICAgY3NzYFxuICAgICAgJHtidXR0b25zLmdyYXl9XG4gICAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEb3dubG9hZEJ1dHRvbiA9IEFjdGlvbkJ1dHRvbjtcblxuZXhwb3J0IGNsYXNzIENvcHlUb0NsaXBCb2FyZEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIG1vdW50ZWQgPSBmYWxzZTtcbiAgdGltZW91dDtcblxuICBzdGF0ZSA9IHtcbiAgICBjb3BpZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZUNvcHkgPSAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgY29uc3QgeyBwYXRoLCBkcmFmdCwgbmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb3B5VG9DbGlwYm9hcmQoaXNBYnNvbHV0ZVBhdGgocGF0aCkgfHwgIWRyYWZ0ID8gcGF0aCA6IG5hbWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3BpZWQ6IHRydWUgfSk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLm1vdW50ZWQgJiYgdGhpcy5zZXRTdGF0ZSh7IGNvcGllZDogZmFsc2UgfSksIDE1MDApO1xuICB9O1xuXG4gIGdldFRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdCwgcGF0aCwgZHJhZnQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29waWVkKSB7XG4gICAgICByZXR1cm4gdCgnbWVkaWFMaWJyYXJ5Lm1lZGlhTGlicmFyeUNhcmQuY29waWVkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICByZXR1cm4gdCgnbWVkaWFMaWJyYXJ5Lm1lZGlhTGlicmFyeUNhcmQuY29weScpO1xuICAgIH1cblxuICAgIGlmIChpc0Fic29sdXRlUGF0aChwYXRoKSkge1xuICAgICAgcmV0dXJuIHQoJ21lZGlhTGlicmFyeS5tZWRpYUxpYnJhcnlDYXJkLmNvcHlVcmwnKTtcbiAgICB9XG5cbiAgICBpZiAoZHJhZnQpIHtcbiAgICAgIHJldHVybiB0KCdtZWRpYUxpYnJhcnkubWVkaWFMaWJyYXJ5Q2FyZC5jb3B5TmFtZScpO1xuICAgIH1cblxuICAgIHJldHVybiB0KCdtZWRpYUxpYnJhcnkubWVkaWFMaWJyYXJ5Q2FyZC5jb3B5UGF0aCcpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBY3Rpb25CdXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvcHl9PlxuICAgICAgICB7dGhpcy5nZXRUaXRsZSgpfVxuICAgICAgPC9BY3Rpb25CdXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5Db3B5VG9DbGlwQm9hcmRCdXR0b24ucHJvcFR5cGVzID0ge1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgZHJhZnQ6IFByb3BUeXBlcy5ib29sLFxuICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiJdfQ== */"));
export const DownloadButton = ActionButton;
export class CopyToClipBoardButton extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "mounted", false);
    _defineProperty(this, "timeout", void 0);
    _defineProperty(this, "state", {
      copied: false
    });
    _defineProperty(this, "handleCopy", () => {
      clearTimeout(this.timeout);
      const {
        path,
        draft,
        name
      } = this.props;
      copyToClipboard(isAbsolutePath(path) || !draft ? path : name);
      this.setState({
        copied: true
      });
      this.timeout = setTimeout(() => this.mounted && this.setState({
        copied: false
      }), 1500);
    });
    _defineProperty(this, "getTitle", () => {
      const {
        t,
        path,
        draft
      } = this.props;
      if (this.state.copied) {
        return t('mediaLibrary.mediaLibraryCard.copied');
      }
      if (!path) {
        return t('mediaLibrary.mediaLibraryCard.copy');
      }
      if (isAbsolutePath(path)) {
        return t('mediaLibrary.mediaLibraryCard.copyUrl');
      }
      if (draft) {
        return t('mediaLibrary.mediaLibraryCard.copyName');
      }
      return t('mediaLibrary.mediaLibraryCard.copyPath');
    });
  }
  componentDidMount() {
    this.mounted = true;
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    const {
      disabled
    } = this.props;
    return ___EmotionJSX(ActionButton, {
      disabled: disabled,
      onClick: this.handleCopy
    }, this.getTitle());
  }
}
CopyToClipBoardButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  draft: PropTypes.bool,
  path: PropTypes.string,
  name: PropTypes.string,
  t: PropTypes.func.isRequired
};