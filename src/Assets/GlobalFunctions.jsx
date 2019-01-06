function cssStyler(element) {
  const result = [];
  if (element) {
    Object.keys(element).forEach((key) => {
      result.push(`${key}:${element[key]};`);
    });
  }
  return result.map(value => value);
}

export default { cssStyler };
