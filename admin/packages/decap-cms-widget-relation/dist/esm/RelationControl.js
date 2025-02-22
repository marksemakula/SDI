import _uniqBy from "lodash/uniqBy";
import _last from "lodash/last";
import _isEmpty from "lodash/isEmpty";
import _get from "lodash/get";
import _find from "lodash/find";
import _debounce from "lodash/debounce";
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import { fromJS, List, Map } from 'immutable';
import { reactSelectStyles } from 'decap-cms-ui-default';
import { stringTemplate, validations } from 'decap-cms-lib-widgets';
import { FixedSizeList } from 'react-window';
import { DndContext, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import { CSS } from '@dnd-kit/utilities';
import { v4 as uuid } from 'uuid';
import { jsx as ___EmotionJSX } from "@emotion/react";
function arrayMove(array, from, to) {
  const slicedArray = array.slice();
  slicedArray.splice(to < 0 ? array.length + to : to, 0, slicedArray.splice(from, 1)[0]);
  return slicedArray;
}
function MultiValue(props) {
  const {
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id: props.data.data.id
  });
  function onMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  const innerProps = _objectSpread(_objectSpread({}, props.innerProps), {}, {
    onMouseDown
  });
  return ___EmotionJSX("div", {
    ref: setNodeRef,
    style: style
  }, ___EmotionJSX(components.MultiValue, _extends({}, props, {
    innerProps: innerProps
  })));
}
function MultiValueLabel(props) {
  const {
    attributes,
    listeners
  } = useSortable({
    id: props.data.data.id
  });
  return ___EmotionJSX("div", _extends({}, attributes, listeners), ___EmotionJSX(components.MultiValueLabel, props));
}
function SortableSelect(props) {
  const {
    distance,
    value,
    onSortEnd,
    isMulti
  } = props;
  if (!isMulti) {
    return ___EmotionJSX(AsyncSelect, props);
  }
  const keys = Array.isArray(value) ? value.map(({
    data
  }) => data.id) : [];
  const activationConstraint = {
    distance
  };
  const sensors = useSensors(useSensor(MouseSensor, {
    activationConstraint
  }), useSensor(TouchSensor, {
    activationConstraint
  }));
  function handleSortEnd({
    active,
    over
  }) {
    onSortEnd({
      oldIndex: keys.indexOf(active.id),
      newIndex: keys.indexOf(over.id)
    });
  }
  return ___EmotionJSX(DndContext, {
    modifiers: [restrictToParentElement],
    collisionDetection: closestCenter,
    sensors: sensors,
    onDragEnd: handleSortEnd
  }, ___EmotionJSX(SortableContext, {
    items: keys,
    strategy: horizontalListSortingStrategy
  }, ___EmotionJSX(AsyncSelect, props)));
}
function Option({
  index,
  style,
  data
}) {
  return ___EmotionJSX("div", {
    style: style
  }, data.options[index]);
}
function MenuList(props) {
  if (props.isLoading || props.options.length <= 0 || !Array.isArray(props.children)) {
    return props.children;
  }
  const rows = props.children;
  const itemSize = 30;
  return ___EmotionJSX(FixedSizeList, {
    style: {
      width: '100%'
    },
    width: 300,
    height: Math.min(300, rows.length * itemSize + itemSize / 3),
    itemCount: rows.length,
    itemSize: itemSize,
    itemData: {
      options: rows
    }
  }, Option);
}
function optionToString(option) {
  return option && option.value ? option.value : '';
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
function getSelectedOptions(value) {
  const selectedOptions = List.isList(value) ? value.toJS() : value;
  if (!selectedOptions || !Array.isArray(selectedOptions)) {
    return null;
  }
  return selectedOptions;
}
function uniqOptions(initial, current) {
  return _uniqBy(initial.concat(current), o => o.value);
}
function getFieldArray(field) {
  if (!field) {
    return [];
  }
  return List.isList(field) ? field.toJS() : [field];
}
function getSelectedValue({
  value,
  options,
  isMultiple
}) {
  if (isMultiple) {
    const selectedOptions = getSelectedOptions(value);
    if (selectedOptions === null) {
      return null;
    }
    const selected = selectedOptions.map(i => options.find(o => o.value === (i.value || i))).filter(Boolean).map(convertToSortableOption);
    return selected;
  } else {
    return _find(options, ['value', value]) || null;
  }
}
function convertToSortableOption(raw) {
  const option = convertToOption(raw);
  return _objectSpread(_objectSpread({}, option), {}, {
    data: _objectSpread(_objectSpread({}, option.data), {}, {
      id: uuid()
    })
  });
}
export default class RelationControl extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "mounted", false);
    _defineProperty(this, "state", {
      initialOptions: []
    });
    _defineProperty(this, "isValid", () => {
      const {
        field,
        value,
        t
      } = this.props;
      const min = field.get('min');
      const max = field.get('max');
      if (!this.isMultiple()) {
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
    _defineProperty(this, "onSortEnd", options => ({
      oldIndex,
      newIndex
    }) => {
      const {
        onChange,
        field
      } = this.props;
      const value = options.map(optionToString);
      const newValue = arrayMove(value, oldIndex, newIndex);
      const metadata = !_isEmpty(options) && {
        [field.get('name')]: {
          [field.get('collection')]: {
            [_last(newValue)]: _last(options).data
          }
        }
      } || {};
      onChange(fromJS(newValue), metadata);
    });
    _defineProperty(this, "handleChange", selectedOption => {
      const {
        onChange,
        field
      } = this.props;
      if (this.isMultiple()) {
        const options = selectedOption;
        this.setState({
          initialOptions: options.filter(Boolean)
        });
        const value = options.map(optionToString);
        const metadata = !_isEmpty(options) && {
          [field.get('name')]: {
            [field.get('collection')]: {
              [_last(value)]: _last(options).data
            }
          }
        } || {};
        onChange(fromJS(value), metadata);
      } else {
        this.setState({
          initialOptions: [selectedOption].filter(Boolean)
        });
        const value = optionToString(selectedOption);
        const metadata = selectedOption && {
          [field.get('name')]: {
            [field.get('collection')]: {
              [value]: selectedOption.data
            }
          }
        };
        onChange(value, metadata);
      }
    });
    _defineProperty(this, "parseNestedFields", (hit, field) => {
      const {
        locale
      } = this.props;
      const hitData = locale != null && hit.i18n != null && hit.i18n[locale] != null ? hit.i18n[locale].data : hit.data;
      const templateVars = stringTemplate.extractTemplateVars(field);
      // return non template fields as is
      if (templateVars.length <= 0) {
        return _get(hitData, field);
      }
      const data = stringTemplate.addFileTemplateFields(hit.path, fromJS(hitData));
      const value = stringTemplate.compileStringTemplate(field, null, hit.slug, data);
      return value;
    });
    _defineProperty(this, "parseHitOptions", hits => {
      const {
        field
      } = this.props;
      const valueField = field.get('value_field');
      const displayField = field.get('display_fields') || List([field.get('value_field')]);
      const filters = getFieldArray(field.get('filters'));
      const options = hits.reduce((acc, hit) => {
        if (filters.every(filter => {
          // check if the value for the (nested) filter field is in the filter values
          const fieldKeys = filter.field.split('.');
          let value = hit.data;
          for (let i = 0; i < fieldKeys.length; i++) {
            if (Object.prototype.hasOwnProperty.call(value, fieldKeys[i])) {
              value = value[fieldKeys[i]];
            } else {
              return false;
            }
          }
          return filter.values.includes(value);
        })) {
          const valuesPaths = stringTemplate.expandPath({
            data: hit.data,
            path: valueField
          });
          for (let i = 0; i < valuesPaths.length; i++) {
            const label = displayField.toJS().map(key => {
              const displayPaths = stringTemplate.expandPath({
                data: hit.data,
                path: key
              });
              return this.parseNestedFields(hit, displayPaths[i] || displayPaths[0]);
            }).join(' ');
            const value = this.parseNestedFields(hit, valuesPaths[i]);
            acc.push({
              data: hit.data,
              value,
              label
            });
          }
        }
        return acc;
      }, []);
      return options;
    });
    _defineProperty(this, "loadOptions", _debounce((term, callback) => {
      const {
        field,
        query,
        forID
      } = this.props;
      const collection = field.get('collection');
      const optionsLength = field.get('options_length') || 20;
      const searchFieldsArray = getFieldArray(field.get('search_fields'));
      const file = field.get('file');
      query(forID, collection, searchFieldsArray, term, file).then(({
        payload
      }) => {
        const hits = payload.hits || [];
        const options = this.parseHitOptions(hits);
        const uniq = uniqOptions(this.state.initialOptions, options).slice(0, optionsLength);
        callback(uniq);
      });
    }, 500));
  }
  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value || this.props.hasActiveStyle !== nextProps.hasActiveStyle || this.props.queryHits !== nextProps.queryHits;
  }
  async componentDidMount() {
    this.mounted = true;
    // if the field has a previous value perform an initial search based on the value field
    // this is required since each search is limited by optionsLength so the selected value
    // might not show up on the search
    const {
      forID,
      field,
      value,
      query,
      onChange
    } = this.props;
    const collection = field.get('collection');
    const file = field.get('file');
    const initialSearchValues = value && (this.isMultiple() ? getSelectedOptions(value) : [value]);
    if (initialSearchValues && initialSearchValues.length > 0) {
      const metadata = {};
      const searchFieldsArray = getFieldArray(field.get('search_fields'));
      const {
        payload
      } = await query(forID, collection, searchFieldsArray, '', file);
      const hits = payload.hits || [];
      const options = this.parseHitOptions(hits);
      const initialOptions = initialSearchValues.map(v => {
        const selectedOption = options.find(o => o.value === v);
        metadata[v] = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.data;
        return selectedOption;
      }).filter(Boolean);
      const filteredValue = initialOptions.map(option => option.value);
      this.mounted && this.setState({
        initialOptions
      });

      //set metadata
      this.mounted && onChange(filteredValue.length === 1 && !this.isMultiple() ? filteredValue[0] : fromJS(filteredValue), {
        [field.get('name')]: {
          [field.get('collection')]: metadata
        }
      });
    }
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  isMultiple() {
    return this.props.field.get('multiple', false);
  }
  render() {
    const {
      value,
      field,
      forID,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
      queryHits
    } = this.props;
    const isMultiple = this.isMultiple();
    const isClearable = !field.get('required', true) || isMultiple;
    const queryOptions = this.parseHitOptions(queryHits);
    const options = uniqOptions(this.state.initialOptions, queryOptions);
    const selectedValue = getSelectedValue({
      options,
      value,
      isMultiple
    });
    return ___EmotionJSX(SortableSelect, {
      useDragHandle: true,
      onSortEnd: this.onSortEnd(selectedValue),
      distance: 4
      // react-select props:
      ,
      components: {
        MenuList,
        MultiValue,
        MultiValueLabel
      },
      value: selectedValue,
      inputId: forID,
      cacheOptions: true,
      defaultOptions: true,
      loadOptions: this.loadOptions,
      onChange: this.handleChange,
      className: classNameWrapper,
      onFocus: setActiveStyle,
      onBlur: setInactiveStyle,
      styles: reactSelectStyles,
      isMulti: isMultiple,
      isClearable: isClearable,
      placeholder: ""
    });
  }
}
_defineProperty(RelationControl, "propTypes", {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string.isRequired,
  value: PropTypes.node,
  field: ImmutablePropTypes.map,
  query: PropTypes.func.isRequired,
  queryHits: PropTypes.array,
  classNameWrapper: PropTypes.string.isRequired,
  setActiveStyle: PropTypes.func.isRequired,
  setInactiveStyle: PropTypes.func.isRequired,
  locale: PropTypes.string
});