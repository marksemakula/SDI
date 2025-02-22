import React from 'react';
import { jsx as ___EmotionJSX } from "@emotion/react";
const image = {
  label: 'Image',
  id: 'image',
  fromBlock: match => match && {
    image: match[2],
    alt: match[1],
    title: match[4]
  },
  toBlock: ({
    alt,
    image,
    title
  }) => `![${alt || ''}](${image || ''}${title ? ` "${title.replace(/"/g, '\\"')}"` : ''})`,
  // eslint-disable-next-line react/display-name
  toPreview: ({
    alt,
    image,
    title
  }, getAsset, fields) => {
    const imageField = fields === null || fields === void 0 ? void 0 : fields.find(f => f.get('widget') === 'image');
    const src = getAsset(image, imageField);
    return ___EmotionJSX("img", {
      src: src || '',
      alt: alt || '',
      title: title || ''
    });
  },
  pattern: /^!\[(.*)\]\((.*?)(\s"(.*)")?\)$/,
  fields: [{
    label: 'Image',
    name: 'image',
    widget: 'image',
    media_library: {
      allow_multiple: false
    }
  }, {
    label: 'Alt Text',
    name: 'alt'
  }, {
    label: 'Title',
    name: 'title'
  }]
};
export const DecapCmsEditorComponentImage = image;
export default image;