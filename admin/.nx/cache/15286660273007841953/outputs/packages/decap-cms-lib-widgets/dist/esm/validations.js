import _isNumber from "lodash/isNumber";
export function validateMinMax(t, fieldLabel, value, min, max) {
  function minMaxError(messageKey) {
    return {
      type: 'RANGE',
      message: t(`editor.editorControlPane.widget.${messageKey}`, {
        fieldLabel,
        minCount: min,
        maxCount: max,
        count: min
      })
    };
  }
  if ([min, max, value === null || value === void 0 ? void 0 : value.size].every(_isNumber) && (value.size < min || value.size > max)) {
    return minMaxError(min === max ? 'rangeCountExact' : 'rangeCount');
  } else if (_isNumber(min) && min > 0 && value !== null && value !== void 0 && value.size && value.size < min) {
    return minMaxError('rangeMin');
  } else if (_isNumber(max) && value !== null && value !== void 0 && value.size && value.size > max) {
    return minMaxError('rangeMax');
  }
}