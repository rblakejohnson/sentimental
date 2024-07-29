export const formatDate = (d) => {
  const date = typeof d === 'string' ? new Date(d) : d;

  const formatted = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(date);

  return formatted;
};
