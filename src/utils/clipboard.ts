import useClipboard from 'vue-clipboard3';

export const handleCopy = (text: string) => {
  if (!text && text !== 0) return;
  const { toClipboard } = useClipboard();

  return toClipboard(text);
};
