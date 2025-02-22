import _find from "lodash/find";
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map, List, fromJS } from 'immutable';
import Select from 'react-select';
import { reactSelectStyles } from 'decap-cms-ui-default';
import { validations } from 'decap-cms-lib-widgets';
import { jsx as ___EmotionJSX } from "@emotion/react";
function optionToString(option) {
  return option && (typeof option.value === 'number' || typeof option.value === 'string') ? option.value : null;
}
function convertToOption(raw) {
  if (typeof raw === 'string') {
    return {
      label: raw,
      value: raw
    };
  }
  return Map.isMap(raw) ? raw.toJS() : raw;
}
function getSelectedValue({
  value,
  options,
  isMultiple
}) {
  if (isMultiple) {
    const selectedOptions = List.isList(value) ? value.toJS() : value;
    if (!selectedOptions || !Array.isArray(selectedOptions)) {
      return null;
    }
    return selectedOptions.map(i => options.find(o => o.value === (i.value || i))).filter(Boolean).map(convertToOption);
  } else {
    return _find(options, ['value', value]) || null;
  }
}
export default class SelectControl extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "isValid", () => {
      const {
        field,
        value,
        t
      } = this.props;
      const min = field.get('min');
      const max = field.get('max');
      if (!field.get('multiple')) {
        return {
          error: false
        };
      }
      const error = validations.validateMinMax(t, field.get('label', field.get('name')), value, min, max);
      return error ? {
        error
      } : {
        error: false
      };
    });
    _defineProperty(this, "handleChange", selectedOption => {
      const {
        onChange,
        field
      } = this.props;
      const isMultiple = field.get('multiple', false);
      const isEmpty = isMultiple ? !(selectedOption !== null && selectedOption !== void 0 && selectedOption.length) : !selectedOption;
      if (field.get('required') && isEmpty && isMultiple) {
        onChange(List());
      } else if (isEmpty) {
        onChange(null);
      } else if (isMultiple) {
        const options = selectedOption.map(optionToString);
        onChange(fromJS(options));
      } else {
        onChange(optionToString(selectedOption));
      }
    });
  }
  componentDidMount() {
    const {
      field,
      onChange,
      value
    } = this.props;
    if (field.get('required') && field.get('multiple')) {
      if (value && !List.isList(value)) {
        onChange(fromJS([value]));
      } else if (!value) {
        onChange(fromJS([]));
      }
    }
  }
  render() {
    const {
      field,
      value,
      forID,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle
    } = this.props;
    const fieldOptions = field.get('options');
    const isMultiple = field.get('multiple', false);
    const isClearable = !field.get('required', true) || isMultiple;
    const options = [...fieldOptions.map(convertToOption)];
    const selectedValue = getSelectedValue({
      options,
      value,
      isMultiple
    });
    return ___EmotionJSX(Select, {
      inputId: forID,
      value: selectedValue,
      onChange: this.handleChange,
      className: classNameWrapper,
      onFocus: setActiveStyle,
      onBlur: setInactiveStyle,
      options: options,
      styles: reactSelectStyles,
      isMulti: isMultiple,
      isClearable: isClearable,
      placeholder: ""
    });
  }
}
_defineProperty(SelectControl, "propTypes", {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.node,
  forID: PropTypes.string.isRequired,
  classNameWrapper: PropTypes.string.isRequired,
  setActiveStyle: PropTypes.func.isRequired,
  setInactiveStyle: PropTypes.func.isRequired,
  field: ImmutablePropTypes.contains({
    options: ImmutablePropTypes.listOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, ImmutablePropTypes.contains({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })])).isRequired
  })
});