import { sha256 } from 'js-sha256';
export default (blob => new Promise((resolve, reject) => {
  const fr = new FileReader();
  fr.onload = ({
    target
  }) => resolve(sha256((target === null || target === void 0 ? void 0 : target.result) || ''));
  fr.onerror = err => {
    fr.abort();
    reject(err);
  };
  fr.readAsArrayBuffer(blob);
}));